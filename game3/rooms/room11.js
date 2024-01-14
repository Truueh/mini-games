function roomEleven()
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
            rect(width / 2 - width / 4 + 55, height / 2, width / 2 + 120, 210);
            rect(width / 2, height / 2 + 130, 230, 350);
            //Road Left And Right
            fill(255);
            rect(width / 2 - 130, height / 2 + 205, 30, height / 3);
            rect(width / 2 + 120, height / 2 + 85, 30, 440);
            //Road Top And Bottom
            rect(width / 2 - width / 5 + 5, height / 2 - 120, width / 2 + 110, 30);
            rect(width / 2 - width / 3 + 10, height / 2 + 120, width / 3 + 20, 30);
            //Road Middle
            fill(255);
            rect(width / 2, height - 80, 20, 130);
            rect(width / 2, height - 80 - 145, 20, 130);
            //Road Side
            rect(80, height / 2, 120, 20);
            rect(80 + 145, height / 2, 130, 20);
            rect(80 + 145 + 145, height / 2, 120, 20);
            pop();
            //Shop Table
            push();
            strokeWeight(1);
            fill(160, 50, 0);
            rect(width - 150, height / 2, 100, 200);
            //Shop Keeper Body
            fill(40, 40, 40);
            rect(width - 80, height / 2, 30, 65);
            //Shop Keeper Hand Up Shirt
            rect(width - 80 - 10, height / 2 - 39, 50, 15);
            //Shop Keeper Hand Down Shirt
            rect(width - 80 - 10, height / 2 + 39, 50, 15);
            //Shop Keeper Head
            fill(255,224,189);
            rect(width - 80, height / 2, 25, 25);
            pop();
        }
    }
}
