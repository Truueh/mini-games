function enemyBulletx(x, y)
{
    this.x = x;
    this.y = y;
    this.hit = false;
    this.toShow = true;

    this.show = function()
    {
            push();
            noStroke();
            fill(255, 100, 100);
            rect(this.x, this.y, 10, 5);
            pop();
    }

    this.fire = function()
    {
            this.x -= 8;
    }

    this.hits = function(player)
    {
        let d = dist(this.x, this.y, player.x, player.y);
        if(this.hit === false)
        {
                if(d <= 40)
                {
                    this.alpha = 0;
                    this.toShow = false;
                    this.hit = true;
                    hp.pop();
                }
        }
    }
}