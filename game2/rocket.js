function rocket(x, y) {

    this.x = airplane.x + 120;
    this.y = y + 19;
    this.toRemove = false;

    this.show = function() {
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, 30, 10);
    }

    this.move = function() {
        this.x += 8;
    }

    this.hits = function(enemyx, enemyy) {
        let d = Math.floor(dist(this.x + 30, this.y, enemyx, enemyy));
        if(d <= 50) {
            return this.toRemove = true;
        }
    }

}