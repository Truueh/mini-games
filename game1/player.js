function Player(x, y)
{
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 70;
    this.xdir = 0;
    this.ydir = 0;

    this.show = function()
    {
        fill(255, 255, 0);
        rectMode(CENTER);
        push();
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        fill(155, 155, 155);
        arc(this.x, this.y - this.h / 2 + 1, this.w, this.h, -PI, TWO_PI, CHORD);
        fill(255, 0, 0);
        triangle(this.x - this.w / 2, this.y, this.x - this.w / 2, this.y + this.h / 2 + 6, this.x - this.w /2 - 12, this.y + this.h / 2 + 6);
        triangle(this.x + this.w / 2, this.y, this.x + this.w / 2, this.y + this.h / 2 + 6, this.x + this.w /2 + 12, this.y + this.h / 2 + 6);
        rect(this.x, this.y + this.h / 2 + 3, this.w, 6);
        fill(255, 255, 0);
        fill(0);
        pop();
        push();
        fill(0);
        strokeWeight(2);
        line(this.x - this.w / 2, this.y - this.h / 2, this.x + this.w / 2, this.y - this.h / 2);
        pop();
        if(faceright)
        {
            push();
            noStroke();
            rect(this.x + this.w / 2 - 5, this.y + this.h / 2 + 7, 10, 14);
            rect(this.x - this.w / 2 + 5, this.y + this.h / 2 + 7, 10, 14);
            pop();
            strokeWeight(2);
            line(this.x + this.w / 2 - 1, this.y + this.h / 2 - 6, this.x - this.w / 2 + 1, this.y + this.h / 2 - 6);            line(this.x + 15, this.y + 23, this.x - 7, this.y + 23);
            push();
            noStroke();
            fill(0);
            rect(this.x + 18 , this.y + 18, 4, 4);
            rect(this.x - 11 , this.y + 18, 4, 4);
            pop();
        }
        else if(faceleft)
        {
            push();
            noStroke();
            rect(this.x + this.w / 2 - 5, this.y + this.h / 2 + 7, 10, 14);
            rect(this.x - this.w / 2 + 5, this.y + this.h / 2 + 7, 10, 14);
            pop();
            strokeWeight(2);
            line(this.x + this.w / 2 - 1, this.y + this.h / 2 - 6, this.x - this.w / 2 + 1, this.y + this.h / 2 - 6);
            line(this.x - 15, this.y + 23, this.x + 7, this.y + 23);
            push();
            noStroke();
            fill(0);
            rect(this.x - 18 , this.y + 18, 4, 4);
            rect(this.x + 11 , this.y + 18, 4, 4);
            pop();
        }
        else if(faceup)
        {
            push();
            noStroke();
            rect(this.x + this.w / 2 - 5, this.y + this.h / 2 + 11, 10, 10);
            rect(this.x - this.w / 2 + 5, this.y + this.h / 2 + 11, 10, 10);
            pop();
            push();
            fill(255, 0, 0);
            noStroke();
            arc(this.x, this.y, this.w, 30, -PI, TWO_PI, CHORD);
            rect(this.x, this.y + this.h / 4, this.w, this.h / 2);
            line(this.x + this.w / 2 - 1, this.y + this.h / 2 - 1, this.x - this.w / 2 + 1, this.y + this.h / 2 - 1);
            pop();
        }
        else if(facedown)
        {
            push();
            noStroke();
            rect(this.x + this.w / 2 - 5, this.y + this.h / 2 + 7, 10, 14);
            rect(this.x - this.w / 2 + 5, this.y + this.h / 2 + 7, 10, 14);
            pop();
            strokeWeight(2);
            line(this.x + this.w / 2 - 1, this.y + this.h / 2 - 6, this.x - this.w / 2 + 1, this.y + this.h / 2 - 6);            line(this.x + 15, this.y + 23, this.x - 7, this.y + 23);
            push();
            noStroke();
            fill(0);
            rect(this.x + 18 , this.y + 18, 4, 4);
            rect(this.x - 11 , this.y + 18, 4, 4);
            pop();
        }
    }


    this.movex = function()
    {
        this.x += 5 * this.xdir;
    }

    this.movey = function()
    {
        this.y += 5 * this.ydir;
    }

    this.gun = function()
    {
        if(faceright)
        {
            push();
            fill(0);
            noStroke();
            rect(this.x + 25 + 3, this.y + 10, 6, 10);
            rect(this.x + 25 + 9, this.y + 3, 18, 6);
            pop();
        }
        else if(faceleft)
        {
            push();
            fill(0);
            noStroke();
            rect(this.x - 29 + 3, this.y + 10, 6, 10);
            rect(this.x - 41 + 9, this.y + 3, 18, 6);
            pop();
        }
        else if(facedown)
        {
            push();
            fill(0);
            noStroke();
            rect(this.x - 19, this.y + 30, 6, 18);
            pop();
        }
    }

    this.reload = function()
    {
        console.log('reloading...');
        ammo = 12;
    }

    this.dash = function()
    {
        if(faceright)
        {
            this.x += 45;
        }
        else if(faceleft)
        {
            this.x -= 45;
        }
        else if(faceup)
        {
            this.y -= 45;
        }
        else if(facedown)
        {
            this.y += 45;
        }
        canBeHit = false;
    }
}