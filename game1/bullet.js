function bullet(x, y) {
    this.x = x;
    this.y = y;
    this.toDelete = false;

    this.show = function() {
        fill(255, 0, 0);
        noStroke();
        rect(this.x, this.y - 138, 10, 20);
    }

    this.fire = function() {
        this.y -= 5;
    }

    this.hits = function(alien) {
        let d = dist(this.x, this.y - 138, alien.x, alien.y);
        if(d < 10 + 25) {
            return true;
        } else {
            return false;
        }
    }

    this.evaporate = function() {
        this.toDelete = true;
    }

}   