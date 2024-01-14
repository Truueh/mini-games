function Ship() {
    this.x = width/2;
    this.w = width * 10 / 100;
    this.h = height * 15 / 100;
    this.xdir = 0;
    
    this.show = function() {
        push();
        noStroke();
        fill(152,152,152)
        triangle(this.x, height - 160, this.x - 30, height - 84 - 44, this.x + 30, height - 84 - 44);
        pop();
        rectMode(CENTER);
        push();
            noStroke();
            fill(152,152,152);
            rect(this.x, height - 84, this.w, this.h);
        pop();
        push();
            noStroke();
            rectMode(CENTER);
            fill(255, 20, 0);
            rect(this.x, height - 24, this.w / 2, 30);
        pop();
    }

    this.setDir = function(dir) 
    {
        this.xdir = dir;
        this.x+= this.xdir * 4;
    }
    
    this.move = function() 
    {
        if(this.x <= 25 || this.x >= 575) {
            this.xdir = 0;
        }

        if(this.x >=25 && this.x <= 575) 
        {
            this.x += this.xdir * 4;
        }
    }

}
