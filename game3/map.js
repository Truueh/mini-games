function Map()
{
    this.x = width - 120;
    this.y = 85;
    this.h = this.y;

    this.show = function()
    {
        push();
        strokeWeight(2);
        fill(40, 40, 40, 70);
        rect(this.x, this.y, 220, 160);
        //Rooms
        pop();
        push();
        fill(0);
        noStroke();
        //Room 1
        if(currentRoom === roomone)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203, this.h, 36, 24);
            pop();
        }
        else if(roomone.discovered)
        {
            push();
            fill(0);
            rect(width - 203, this.h, 36, 24);
            pop(); 
        }
        if(currentRoom === roomtwo)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 5 + 36, this.h, 36, 24);
            pop();
        }
        else if(roomtwo.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 5 + 36, this.h, 36, 24);
            pop(); 
        }
        if(currentRoom === roomthree)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 5 + 36, this.h + 24 + 5, 36, 24);
            pop();
        }
        else if(roomthree.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 5 + 36, this.h + 24 + 5, 36, 24);
            pop(); 
        }
        if(currentRoom === roomfour)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 5 + 36, this.h - 24 - 5, 36, 24);
            pop();
        }
        else if(roomfour.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 5 + 36, this.h - 24 - 5, 36, 24);
            pop(); 
        }
        if(currentRoom === roomfive)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 10 + 72, this.h + 24 + 5, 36, 24);
            pop();
        }
        else if(roomfive.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 10 + 72, this.h + 24 + 5, 36, 24);
            pop(); 
        }
        if(currentRoom === roomsix)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 5 + 36, this.h - 48 - 10, 36, 24);
            pop();
        }
        else if(roomsix.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 5 + 36, this.h - 48 - 10, 36, 24);
            pop(); 
        }
        if(currentRoom === roomseven)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 15 + 72 + 36, this.h + 24 + 5, 36, 24);
            pop();
        }
        else if(roomseven.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 15 + 72 + 36, this.h + 24 + 5, 36, 24);
            pop(); 
        }
        if(currentRoom === roomeight)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203, this.h - 48 - 10, 36, 24);
            pop();
        }
        else if(roomeight.discovered)
        {
            push();
            fill(0);
            rect(width - 203, this.h - 48 - 10, 36, 24);
            pop(); 
        }
        if(currentRoom === roomnine)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 15 + 72 + 36, this.h, 36, 24);
            pop();
        }
        else if(roomnine.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 15 + 72 + 36, this.h, 36, 24);
            pop(); 
        }
        if(currentRoom === roomten)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 10 + 72, this.h - 48 - 10, 36, 24);
            pop();
        }
        else if(roomten.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 10 + 72, this.h - 48 - 10, 36, 24);
            pop(); 
        }
        if(currentRoom === roomeleven)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 15 + 72 + 36, this.h - 24 - 5, 36, 24);
            pop();
        }
        else if(roomeleven.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 15 + 72 + 36, this.h - 24 - 5, 36, 24);
            pop(); 
        }
        if(currentRoom === roomtwelve)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 10 + 72, this.h - 24 - 5, 36, 24);
            pop();
        }
        else if(roomtwelve.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 10 + 72, this.h - 24 - 5, 36, 24);
            pop(); 
        }
        if(currentRoom === roomthirteen)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 15 + 72 + 36, this.h + 48 + 10, 36, 24);
            pop();
        }
        else if(roomthirteen.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 15 + 72 + 36, this.h + 48 + 10, 36, 24);
            pop(); 
        }
        if(currentRoom === roomfourteen)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 20 + 108 + 36, this.h, 36, 24);
            pop();
        }
        else if(roomfourteen.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 20 + 108 + 36, this.h, 36, 24);
            pop(); 
        }
        if(currentRoom === roomfifteen)
        {
            push();
            fill(371, 327, 176);
            rect(width - 203 + 20 + 108 + 36, this.h + 48 + 10, 36, 24);
            pop();
        }
        else if(roomfifteen.discovered)
        {
            push();
            fill(0);
            rect(width - 203 + 20 + 108 + 36, this.h + 48 + 10, 36, 24);
            pop(); 
        }
        pop();
    }
}