window.onload = function() {
    model.pickCellLocation();
    let start = document.getElementById("startButton");
    start.onclick = controller.start;
};

var view = {
    placeRed: function() {
        var cell = document.getElementById(model.colours[0]);
        cell.classList.add("red");
        setTimeout(() => {cell.classList.remove("red");}, 1400);
    },
    placeBlue: function() {
        var cell = document.getElementById(model.colours[1]);
        cell.classList.add("blue");
        setTimeout(() => {cell.classList.remove("blue");}, 1400);
    }
};

var model = {
    numColours: 2,
    colours: [00, 00],
    pickCellLocation: function() {
        var location;
        for (var i = 0; i < this.numColours; i++) {
            location = this.pickCell();
            this.colours[i] = location;
        }
    },
    pickCell: function() {

        var row = Math.floor(Math.random() * 8);
        var col = Math.floor(Math.random() * 8);

        var cell = row + "" + col;

        return cell
    }
}

var controller = {
    start: function() {
        setTimeout(() => {view.placeRed();}, 1000);
        setTimeout(() => {controller.takeGuess();}, 2400);
    },
    takeGuess: function() {
        var cell = document.getElementsByTagName("td");
        for(var i = 0; i < cell.length; i++) {
            cell[i].onclick = controller.guess;
        }
    },
    guess: function(eventObj) {
        var cell = eventObj.target.id;
        if(cell == model.colours[0]) {
            controller.nextRound();
            console.log("Yes")
        } else {
            console.log("No");
        }
    },
    nextRound: function() {
        model.pickCellLocation();
        console.log("Complete");
    }
};