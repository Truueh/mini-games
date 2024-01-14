function roomSeven()
{
    this.toShow = false;
    this.discovered = false;
    this.enemies = [new Enemy(30, height / 5), new Enemy(width / 4, height - 50), new Enemy(width - width / 4, height - 50), new Enemy(width - 30, height / 2)];


    this.display = function()
    {
        if(this.toShow === true)
        {
            push();
            noStroke();
            //Background
            fill(30, 30, 30);
            rect(width / 2, height / 2, width, height);
            //Road Right And Left
            fill(255);
            rect(width / 2 + 120, height / 2, 30, height);
            rect(width / 2 - 120, height / 2 - 205, 30, height / 3);
            rect(width / 2 - 120, height / 2 + 205, 30, height / 3);
            //Road Top And Bottom
            rect(width / 2 - width / 3 + 10, height / 2 + 120, width / 3 + 20, 30);
            rect(width / 2 - width / 3 + 10, height / 2 - 120, width / 3 + 20, 30);
            //Road
            fill(10, 10, 10);
            rect(width / 2, height / 2, 210, height);
            rect(width / 4 - 50, height / 2, 350, 210);
            //Road Middle
            fill(255);
            rect(width / 2, 80, 20, 130);
            rect(width / 2, 80 + 145, 20, 130);
            rect(width / 2, 80 + 145 + 145, 20, 130);
            rect(width / 2, 80 + 145 + 145 + 145, 20, 130);
            //Road Side
            rect(80, height / 2, 120, 20);
            rect(80 + 145, height / 2, 130, 20);
            rect(80 + 145 + 145, height / 2, 120, 20);
            pop();
        }
    }
}
