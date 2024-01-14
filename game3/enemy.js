function Enemy(x, y)
{
    this.x = x;
    this.y = y;
    this.w = 45;
    this.h = 60;
    this.s = 2;
    this.toShow = true;
    this.timesHit = 0;

    this.show = function()
    {
        push();
        fill(190, 10, 10);
        strokeWeight(0);
        //head
        rect(this.x, this.y - this.h / 2 - 15, 30, 30);
        fill(220, 10, 10);
        //body
        rect(this.x, this.y, this.w, this.h);
        //right leg
        rect(this.x + this.w / 4 + this.w / 8, this.y + this.h / 2 + this.h / 6 - 1, this.w / 4, this.h / 3);
        //left leg
        rect(this.x - this.w / 4 - this.w / 8, this.y + this.h / 2 + this.h / 6 - 1, this.w / 4, this.h / 3);
        //band
        push();
        fill(15, 15, 15);
        rect(this.x, this.y + this.h / 2 - 12, this.w + 1, 12);
        pop();
    }

    this.move = function()
    {
        //Position - TOP RIGHT
        if(this.x > player.x && this.y < player.y)
        {
            push();
            fill(130, 130, 130);
            rect(this.x - 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x - this.w / 2 - (this.h * 3/5) / 2 + 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x - this.w / 2 - (this.h * 3/5) - 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.x -= this.s;
            this.y += this.s;
        }
        //Position - BOTTOM RIGHT
        else if(this.x > player.x && this.y > player.y)
        {
            push();
            fill(130, 130, 130);
            rect(this.x - 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x - this.w / 2 - (this.h * 3/5) / 2 + 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x - this.w / 2 - (this.h * 3/5) - 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.x -= this.s;
            this.y -= this.s;
        }
        //Position - TOP LEFT
        else if(this.x < player.x && this.y < player.y)
        {
            push();
            fill(130, 130, 130);
            rect(this.x + 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x + this.w / 2 + (this.h * 3/5) / 2 - 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x + this.w / 2 + (this.h * 3/5) + 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.x += this.s;
            this.y += this.s;
        }
        //Position - BOTTOM LEFT
        else if(this.x < player.x && this.y > player.y)
        {
            push();
            fill(130, 130, 130);
            rect(this.x + 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x + this.w / 2 + (this.h * 3/5) / 2 - 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x + this.w / 2 + (this.h * 3/5) + 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.x += this.s;
            this.y -= this.s
        }
        //Position - TOP
        else if(this.y < player.y)
        {
            push();
            fill(130, 130, 130);
            rect(this.x - 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x - this.w / 2 - (this.h * 3/5) / 2 + 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x - this.w / 2 - (this.h * 3/5) - 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.y += this.s;
        }
        //Position - BOTTOM
        else if(this.y > player.y)
        {
            push();
            fill(130, 130, 130);
            rect(this.x - 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x - this.w / 2 - (this.h * 3/5) / 2 + 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x - this.w / 2 - (this.h * 3/5) - 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.y -= this.s;
        }
        //Position - RIGHT
        else if(this.x > player.x)
        {
            push();
            fill(130, 130, 130);
            rect(this.x - 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x - this.w / 2 - (this.h * 3/5) / 2 + 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x - this.w / 2 - (this.h * 3/5) - 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.x -= this.s;
        }
        //Position - LEFT
        else if(this.x < player.x)
        {
            push();
            fill(130, 130, 130);
            rect(this.x + 7, this.y - this.h / 2 - 15, 16, 12);
            pop();
            //hands
            rect(this.x + this.w / 2 + (this.h * 3/5) / 2 - 2, this.y - this.h / 2 + (this.h / 5) / 2, this.h * 3/5, this.h / 5);
            //knife
            fill(100, 100, 100);
            rect(this.x + this.w / 2 + (this.h * 3/5) + 3, this.y - this.h / 2 + (this.h / 5) / 2, 10, 5);
            pop();
            this.x += this.s;
        }
    }

    this.hits = function(player)
    {
        let d = dist(this.x, this.y, player.x, player.y);
        if(d <= 50)
        {
            this.toShow = false;
            hp.splice(hp.length - 1, 1);
        }
    }
}