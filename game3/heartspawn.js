function heartSpawn(room)
{
    this.room = room;
    this.show = function()
    {
        push();
        strokeWeight(2);
        fill(220, 0, 0);
        rect(width / 2, height / 2, 40, 40);
        pop();
    }
}