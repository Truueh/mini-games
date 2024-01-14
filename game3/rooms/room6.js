function roomSix()
{
    this.toShow = false;
    this.discovered = false;
    this.moneybag = new moneyBag();
    this.enemies = [new Enemy(width / 4, 50), new Enemy(width - width / 4, 50), new Enemy (30, height - height / 5), new Enemy(width - 30, height - height / 5)];

    this.showmoneybag = function()
    {
        this.moneybag.show();
    }
    this.display = function()
    {
        if(this.toShow === true)
        {
            push();
            //Background
            fill(30, 30, 30);
            noStroke();
            rect(width / 2, height / 2, width, height);
            //Road Top And Bottom
            fill(255);
            rect(width / 2, height / 2 - 120, width, 30);
            rect(157, height / 2 + 120, width / 3 + 16, 30);
            rect(width - 157, height / 2 + 120, width / 3 + 16, 30);
            //Road Right And Left
            rect(width / 2 + 120, height - height / 2 + 205, 30, height / 3);
            rect(width / 2 - 120, height - height / 2 + 205, 30, height / 3);
            //Road
            fill(10, 10, 10);
            rect(width / 2,height / 2, width, 210);
            rect(width / 2, height - 100, 210, 200);
            //Road Middle
            fill(255);
            rect(80, height / 2, 130, 20);
            rect(80 + 145, height / 2, 130, 20);
            rect(80 + 290, height / 2, 130, 20);
            rect(width - 80, height / 2, 130, 20);
            rect(width - 80 - 145, height / 2, 130, 20);
            rect(width - 80 - 145 - 145, height / 2, 130, 20);
            rect(width / 2, height - 80, 20, 130);
            rect(width / 2, height - 80 - 145, 20, 130);
            pop();
        }
    }
}