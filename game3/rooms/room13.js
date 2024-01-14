function roomThirteen()
{
    this.toShow = false;
    this.discovered = false;
    this.display = function()
    {
        if(this.toShow === true)
        {
            push();
            noStroke();
            //Background
            fill(30, 30, 30);
            rect(width / 2, height / 2, width, height);
            fill(10, 10, 10);
            //Road
            rect(width / 2 + width / 4 - 55, height / 2, width / 2 + 110, 210);
            rect(width / 2, height / 2 - 130, 230, 350);
            //Road Left And Right
            fill(255);
            rect(width / 2 + 130, height / 2 - 205, 30, height / 3);
            rect(width / 2 - 120, height / 2 - 85, 30, 440);
            //Road Top And Bottom
            rect(width / 2 + width / 5 - 5, height / 2 + 120, width / 2 + 110, 30);
            rect(width / 2 + width / 3 - 10, height / 2 - 120, width / 3 + 20, 30);
            //Road Middle
            fill(255);
            rect(width / 2, 80, 20, 130);
            rect(width / 2, 80 + 145, 20, 130);
            //Road Side
            rect(width - 80, height / 2, 120, 20);
            rect(width - 80 - 145, height / 2, 130, 20);
            rect(width - 80 - 145 - 145, height / 2, 120, 20);
            pop();
        }
    }
}