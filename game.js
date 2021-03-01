window.onload = function() {
    model.pickCellLocaion();
};

var view = {
    placeRed: function() {
        var cell = document.getElementById(model.colours[0]);
        cell.classList.add("red");
    },
    placeBlue: function() {
        var cell = document.getElementById(model.colours[1]);
        cell.classList.add("blue");
    }
};

var model = {
    numColours: 2,
    colours: [00, 00],
    pickCellLocaion: function() {
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