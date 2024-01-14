function Boss(x, y)
{
    this.x = x;
    this.y = y;
    w = 0;

    this.hpbar = function()
    {
        push();
        strokeWeight(2);
        fill(0, 0, 0, 0);
        rect(width / 2, height - 50, 360, 16);
        pop();
        push();
        noStroke();
        fill(250, 0, 0);
        rect(width / 2, height - 50, 360 - w, 14);
        pop();
    }

    this.show = function()
    {
        push();
        noStroke();
        //Shirt & Pants Color
        fill(10, 10, 10);
        //Shirt
        rect(this.x - 15, this.y, 30, 60);
        //Pants - Up
        rect(this.x - 37, this.y - 20, 74, 20);
        //Pants - Down
        rect(this.x - 37, this.y + 20, 74, 20);
        //Hands - Shirt
        rect(this.x - 10, this.y, 20, 130);
        //HandsShirt - Up
        rect(this.x - 20, this.y - 65 + 7, 40, 15);
        //HandsShirt - Down
        rect(this.x - 20, this.y + 65 - 7, 40, 15);
        fill(25, 25, 25);
        //Shoes - Up
        rect(this.x - 77, this.y - 20, 6, 13);
        //Shoes - Down
        rect(this.x - 77, this.y + 20, 6, 13);
        fill(255,224,189);
        //Hand - Up
        rect(this.x - 47, this.y - 58, 14, 10);
        //Hand - Down
        rect(this.x - 47, this.y + 58, 14, 10);
        //Head
        rect(this.x - 13, this.y, 25, 25);
        pop();
    }

    this.couch = function()
    {
        fill(40, 40, 40);
        //Up Pillow
        rect(this.x, this.y - 55, 100, 40);
        //Down Pillow
        rect(this.x, this.y + 55, 100, 40);
        fill(30, 30, 30);
        //seat
        rect(this.x - 5, this.y, 110, 70);
        //Back Pillow
        fill(50, 50, 50);
        rect(this.x + 30, this.y, 40, 150);
    }

    this.arrowDisposalUp = function()
    {
        push();
        fill(50, 50, 50);
        strokeWeight(1);
        rect(width / 2 - 130, 8, 35, 16);
        pop();
    }

    this.arrowDisposalDown = function()
    {
        push();
        fill(50, 50, 50);
        strokeWeight(1);
        rect(width / 2 - 130, height - 8, 35, 16);
        pop();
    }

    this.arrowDisposalWallUp = function()
    {
        push();
        fill(50, 50, 50);
        strokeWeight(1);
        rect(width - 8, height / 2 - 130, 16, 35);
        pop();
    }

    this.arrowDisposalWallDown = function()
    {
        push();
        fill(50, 50, 50);
        strokeWeight(1);
        rect(width - 8, height / 2 + 130, 16, 35);
        pop();
    }

    this.enemyDisposalUp = function()
    {
            push();
            fill(50, 50, 50);
            strokeWeight(1);
            rect(width / 2 + 150, 8, 100, 50);
            pop();
    }

    this.enemyDisposalDown = function()
    {
            push();
            fill(50, 50, 50);
            strokeWeight(1);
            rect(width / 2 + 150, height - 8, 100, 50);
            pop();
    }

}