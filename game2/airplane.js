function Airplane() {
    this.x = 50;
    this.y = height / 2;
    this.toRemove = false;

    this.show = function() 
    {
        push();
        fill(162, 162, 162);
        noStroke();
        rect(this.x, this.y, 90, 46);
        triangle(this.x + 90, this.y + 46, this.x + 120, this.y + 23, this.x + 90, this.y);
        triangle(this.x, this.y, this.x, this.y - 15, this.x + 40, this.y);
        triangle(this.x, this.y + 61, this.x, this.y + 46, this.x + 40, this.y + 46);
        pop();
        fill(255, 80, 0);
        noStroke();
        rect(this.x - 32, this.y + 11, 32, 10);
        rect(this.x - 32, this.y + 25, 32, 10);
    }

    this.update = function() 
    {
        if (Key.isDown(Key.UP)) this.moveUp();
        if (Key.isDown(Key.DOWN)) this.moveDown();
      };

    this.moveUp = function() 
    {
        if(this.y > 20)
        {
            this.y -= 8;
        }
        else
        {
            this.y = 21;
        }
    }
    this.moveDown = function() 
    {
        if(this.y < 535)
        {
            this.y += 8;
        }
        else
        {
            this.y = 534;
        }
    }

    this.hits = function(enemyx, enemyy)
    {
        let d = dist(this.x, this.y, enemyx, enemyy);

        if(d <= 100) {
            return this.toRemove = true;
        }
    }

    this.crash = function()
    {
        this.y += 5;
    }

}