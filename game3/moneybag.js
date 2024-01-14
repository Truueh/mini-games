function moneyBag()
{

    this.show = function()
    {
        push();
        strokeWeight(2);
        fill(210,105,30);
        //Bag
        rect(width / 2, height / 2, 50, 50);
        //Bag Top
        rect(width / 2, height / 2 - 35, 20, 20);
        pop();
        //Dollar Sign
        push();
        fill(0, 255, 0);
        noStroke();
        rect(width / 2, height / 2 - 13, 26, 6);
        rect(width / 2 - 10, height / 2 - 6, 6, 8);
        rect(width / 2, height / 2 + 1, 26 , 6);
        rect(width / 2 + 10, height / 2 + 8, 6, 8);
        rect(width / 2, height / 2 + 15, 26 , 6);
        rect(width / 2 - 6, height / 2, 5, 42);
        rect(width / 2 + 6, height / 2, 5, 42);
        pop();
    }
}