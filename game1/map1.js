function mapOne()
{
    this.toShow = true;

    this.display = function()
    {
        if(this.toShow === true)
        {
            fill(40, 0, 0);
            rect(width / 2, height / 2, 900, 600);
            fill(0);
            rect(width - 10, height / 2, 20, 150);
        }
    }
}