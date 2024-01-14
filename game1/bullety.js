function bullety(x, y, dir)
{
    this.x = x;
    this.y = y;
    this.dir = dir;

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
        this.y += 8 * this.dir;
    }
}