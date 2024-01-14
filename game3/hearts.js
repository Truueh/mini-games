function heart(x, y)
{
    this.x = x;
    this.y = y;

    this.show = function()
    {
        push();
        strokeWeight(2);
        fill(220, 0, 0);
        rect(this.x, this.y, 30, 30);
        pop();
    }
}