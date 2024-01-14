function Enemy() 
{

    this.x = random(800, 2300);
    this.y = random(60, 540);
    this.w = 70;
    this.h = 40;
    this.toRemove = false;

    this.show = function() 
    {
        push();
        fill(90, 90, 90);
        rect(this.x, this.y, this.w, this.h);
        triangle(this.x + 1, this.y, this.x - 50, this.y + this.h / 2, this.x + 1, this.y + this.h);
        triangle(this.x, this.y + 1, this.x + this.w, this.y - 15, this.x + this.w, this.y + 1);
        triangle(this.x, this.y + this.h - 1, this.x + this.w, this.y + 55, this.x + this.w, this.y + this.h - 1);
        pop();
        fill(255, 100, 0);
        rect(this.x + this.w, this.y + 5, 30, this.h - 10);

    }
    
    this.move = function()
    {

        this.x -= 7;

    }

    this.crash = function() {
        this.y += 5;
        enemies.forEach(element => {
            if(element.y >= 800)
            {
                enemies.splice(element, 1);
            }
        });
    }

}