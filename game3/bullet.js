function bullet(x, y, dir)
{
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.hit = false;

    this.show = function()
    {
        push();
        noStroke();
        fill(255, 0, 0);
        ellipse(this.x, this.y, 6, 6);
        pop();
    }

    this.fire = function()
    {
        this.x += 13 * this.dir;
    }

    this.hits = function(enemy)
    {
        if(this.hit === false)
        {
            let d = dist(this.x, this.y, enemy.x, enemy.y);
            if(enemy.toShow === true)
            {
                if(d <= 22)
                {
                        enemy.timesHit ++;
                        currency += 2;
                        this.hit = true;
                }
            }
        }
    }

}