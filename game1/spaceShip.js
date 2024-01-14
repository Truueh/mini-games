function alien(x, y) {
    this.x = x;
    this.y = y;
    this.xdir = 5;
    this.toDelete = false;

    this.show = function() {
        stroke(0);
        fill(4, 97, 0);
        ellipse(this.x, this.y, 50, 50);
    }

    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += 30;
    }

    this.evaporate = function(num) {
        this.splice(num, 1);
    }

    this.move = function() {
        this.x += this.xdir;
    }

}