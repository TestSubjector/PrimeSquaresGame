var MapFile = require('./map');
var TunnelFile = require('./tunnel');
var Vue = require('./lib/vue.js');
// var SaverFile = require('./saver');
// var Saver = SaverFile();
var Map = MapFile(4);
var Tunnel = TunnelFile(20);
var game = new Vue({
    el: '#gameArea',
    data: {
        size : 4,
        maxSize: 10,
        sizes : [3,4,5,6,7,8,9,10],
        nodes: Map.nodes,
        hedges: Map.hedges,
        vedges: Map.vedges,
        instr: false,
        showTheGrid: false,
        winnerName: "",
        gameStatus: "selection of game parameters",
        guessRound: 1, // TODO: remove
        gameRound: 1, // TODO: remove
        mode : "PvP",
        // difficulty : "Normal", // TODO: remove
        scoreOne: 0,
        scoreTwo: 0,
        reveal: "Reveal Tunnel" // TODO: remove
    },

    watch :{
        size: function (newSize) {
            Map = MapFile(newSize);
            this.nodes = Map.nodes;
            this.hedges = Map.hedges;
            this.vedges = Map.vedges;
            this.size = parseInt(newSize);
        }
    },

    methods: {
        //Game logic
        startGame: function () { // Processed
            this.scoreTwo = 0;
            this.scoreOne = 0;
            // this.reveal = "Reveal Tunnel";
            Tunnel = TunnelFile(parseInt(this.size));
            // Tunnel.resetTunnel();
            Map.totalClearBoard();
            alert("Starting Prime Squares Game...");
            this.gameStatus = "Player one's turn";
            // if(this.mode == "AI"){
            //     Tunnel.easyTunnel(Map);
            //     alert("The computer has built a tunnel, detection start now!");
            //     this.gameStatus = "node/edge detection";
            //     this.gameRound = 2;
            // } else {
            //     alert("It's player one's turn to build a tunnel, player two, please look away");
            //     this.gameStatus = "tunnel building";
            // }
        },

        //When player click a edge, it may means that player is trying to build a tunnel or make a guess or make a final guess
        edgeClick: function (edge) { // TODO: Not Processed
            if(this.gameStatus == "tunnel building" || this.gameStatus == "tunnel guess") {
                Map.selectEdge(edge);
                if (this.gameStatus == "tunnel building") {
                    Tunnel.selectEdge(edge);
                } else if (this.gameStatus == "tunnel guess") {
                    Tunnel.finalSelectEdge(edge);
                }
            } else if (this.gameStatus == "node/edge detection") {
                Map.prepare(edge);
                Tunnel.prepareEdge(edge);
            }
        },

        //Node can be clicked only when it is guessing.
        nodeClick: function (node) { // TODO: Not Processed
            if(this.gameStatus == "node/edge detection" && this.gameRound < 4) {
                Map.prepare(node);
                Tunnel.prepareNode(node);
            }
        },

        //After each round of guess, we need to reveal the result of guesses.
        finishGuess: function () { // TODO: Not Processed
            if (this.gameRound == 1) {
                this.scoreOne = Tunnel.finalGuess();
                if (this.scoreOne == -1){
                    this.scoreOne = 10000;
                }
                alert("PlayerTwo as detector:" + this.scoreOne);
                this.gameStatus = "Between two game";
            } else {
                this.scoreTwo = Tunnel.finalGuess();
                if (this.scoreTwo == -1){
                    this.scoreTwo = 10000;
                }
                if (this.mode == "PvP") {
                    alert("PlayerTwo as detector:" + this.scoreOne + ". PlayerOne as detector:" + this.scoreTwo);
                } else {
                    alert("Your score:" + this.scoreTwo);
                }
                this.endGame();
            }
        },

        //When the guess if finished, we need to check the result, calculate the score.
        finishPrepare: function () { // TODO: Not Processed
            Map.clearBoard();
            this.guessRound ++;
            //console.log(guessRound);

            var result = Tunnel.guessResult(this.difficulty == "Easy");
            var goodNodes = result.goodNodes;
            var goodEdges = result.goodEdges;
            var badNodes = result.badNodes;
            var badEdges = result.badEdges;

            for(var i = 0; i < goodEdges.length; i++){
                Map.reveal(goodEdges[i],"good");
            }
            for(var i = 0; i < goodNodes.length; i++){
                Map.reveal(goodNodes[i],"good");
            }
            for(var i = 0; i < badEdges.length; i++){
                Map.reveal(badEdges[i],"bad");
            }
            for(var i = 0; i < badNodes.length; i++){
                Map.reveal(badNodes[i],"bad");
            }

            if (this.guessRound > 3) {
                this.gameStatus = "tunnel guess";
                alert("choose your final guess!");
                goodEdges.map(
                  function (edge) {
                      edge.class.animate = true;
                  }
                );
                Tunnel.commitGoodEdges(this.difficulty == "Easy");
            }
        },

        //Helper functions
        maxEdge: function () { // TODO: Not Processed
            return Tunnel.getSize();
        },

        saveScore: function () { // Processed
            var maxScore = this.scoreTwo;
            if (this.mode == "PvP") {
                maxScore = Math.max(this.scoreTwo, this.scoreOne);
            }
            Saver.saveScore(this.winnerName, maxScore);
            this.gameStatus = "selection of game parameters";
            this.scoreTwo = 0;
            this.scoreOne = 0;
        },

        getWinner: function () { // Processed
            if (this.scoreOne > this.scoreTwo) {
                return "Player One";
            } else if (this.scoreOne == this.scoreTwo) {
                return "Player One && Player Two";
            } else {
                return "Player Two";
            }
        },

        endGame: function () {// TODO: Not Processed
            this.gameRound = 1;
            this.guessRound = 1;
            this.gameStatus = "game end";
            Map.totalClearBoard();
        },

        clearBoard: function () { // TODO: Not Processed
            Tunnel.resetTunnel();
            Map.clearBoard();
        },

        gotoBegin: function () { // Processed
            Map.totalClearBoard();
            // Tunnel.resetTunnel();
            // this.gameStatus = "mode selection";
            this.gameStatus = "selection of game parameters";

        },

        gotoDetect: function(){ // TODO: Not Processed
            if(Tunnel.isValid(this.size)) {
                Map.clearBoard();
                this.gameStatus = "node/edge detection";
                alert("It's guess round now");
            } else {
                alert("Your tunnel is invalid. It must start on the top edge, end on the bottom edge, and be a single simple path.");
            }
        },

        isValid: function () {// TODO: Not Processed
            return Tunnel.isValid(this.size);
        },

        edgeLeft: function () {// TODO: Not Processed
            return Tunnel.edgeLeft();
        },

        // revealBoard: function () {// Processed
        //     Map.totalClearBoard();
        //     if(this.reveal == "Reveal Tunnel"){
        //         var tunnel = Tunnel.getTunnel();
        //         tunnel.map(
        //             function (edge) {
        //                 Map.reveal(edge,"good");
        //             }
        //         );
        //         this.reveal = "Hide Tunnel";
        //     } else {
        //         this.reveal = "Reveal Tunnel";
        //     }

        // },

        // startSameGame: function () {// TODO: Not Processed
        //     Map.totalClearBoard();
        //     Tunnel.clearGuess();
        //     this.mode = "AI";
        //     this.gameRound = 2;
        //     this.guessRound = 1;
        //     this.scoreOne = 0;
        //     this.scoreTwo = 0;
        //     this.gameStatus = "node/edge detection";
        // },
        
        showInfoPanel: function() {
            return false;
        },

        toggleGrid: function() {
            this.showTheGrid = !this.showTheGrid;
        },

        showGrid: function(){
            return this.showTheGrid;
        },

        startNextRound: function () {// TODO: Not Processed
            this.gameRound++;
            this.guessRound = 1;
            Map.totalClearBoard();
            Tunnel.resetTunnel();
            this.gameStatus = "tunnel building";
        },

        //Show/Hide logic for html element
        // showBetweenGameInfo: function () {// Processed
        //     return this.gameStatus == "Between two game";
        // },

        showSaveButton: function () {// TODO: Not Processed
            return (this.scoreOne > 0 || this.scoreTwo > 0) && this.gameStatus == "game end";
        },

        showEdgeInfo: function () {// TODO: Not Processed
            return this.gameStatus == "tunnel building";
        },

        showGuessInfo: function () {// TODO: Not Processed
            return this.gameStatus == "node/edge detection";
        },

        showModeSelect: function () {// Processed
            return this.gameStatus == "selection of game parameters";
        },

        showFinishGuessInfo: function () {// TODO: Not Processed
            return this.gameStatus == "tunnel guess";
        },

        showInstr: function(){// Processed
            return this.instr;
        },

        showBasicInfoPvP: function () {// Processed
            return this.mode == "PvP";
        },

        // showBasicInfoAI: function () {// Processed
        //     return this.mode == "AI";
        // },

        changeInstr: function () {// Processed
            this.instr = !this.instr;
        },
    }
});