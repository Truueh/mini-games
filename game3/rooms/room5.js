function roomFive()
{
    this.toShow = false;
    this.discovered = false;
    this.moneybag = new moneyBag();
    this.enemies = [new Enemy(width / 2, 50), new Enemy(width / 2, height - 50)];

    this.showmoneybag = function()
    {
        this.moneybag.show();
    }
    this.display = function()
    {
        if(this.toShow === true)
        {
            push();
            noStroke();
            //Background
            fill(30, 30, 30);
            rect(width / 2, height / 2, 900, 600);
            //Road Top And Bottom
            fill(255);
            rect(width / 2, height / 2 + 120, width, 30);
            rect(width / 2, height / 2 - 120, width, 30);
            //Road
            fill(10, 10, 10);
            rect(width / 2, height / 2, width, 210);
            //Road Middle
            fill(255);
            rect(80, height / 2, 130, 20);
            rect(80 + 145, height / 2, 130, 20);
            rect(80 + 290, height / 2, 130, 20);
            rect(80 + 435, height / 2, 130, 20);
            rect(80 + 580, height / 2, 130, 20);
            rect(80 + 725, height / 2, 130, 20);
            rect(80 + 870, height / 2, 130, 20);
            pop();
        }
    }
}