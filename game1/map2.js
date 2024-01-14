function mapTwo()
{
    this.toShow = false;

    this.display = function()
    {
        if(this.toShow === true)
        {
            fill(0, 40, 0);
            rect(width / 2, height / 2, 900, 600);
            fill(0);
            rect(10, height / 2, 20, 150);
        }
    }
}
