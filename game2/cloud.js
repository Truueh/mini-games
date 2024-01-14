function cloud() 
{

    this.x = random(800, 1600);
    this.y = random(0, 600);

    this.show = function() 
    {

        fill(255, 255, 255);
        ellipse(this.x, this.y, 150, 40);
        ellipse(this.x, this.y - 10, 70, 60);

    }
    
    this.move = function()
    {

        this.x -= 4;

    }

}