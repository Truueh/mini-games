function enemyBullety(x, y, dir)
{
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.hit = false;
    this.toShow = true;

    this.show = function()
    {
            push();
            noStroke();
            fill(255, 100, 100);
            rect(this.x, this.y, 5, 10);
            pop();
    }

    this.fire = function()
    {
            this.y += 8 * this.dir;
    }

    this.hits = function(player)
    {
        let d = dist(this.x, this.y, player.x, player.y);
        if(this.hit === false)
        {
            if(d <= 40)
            {
                this.toShow = false;
                this.hit = true;
                hp.pop();
            }
        }
    }
}