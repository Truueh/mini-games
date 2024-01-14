function Timer() 
{
    if (frameCount % 60 == 0 && timer > 0) 
    { 
        timer --;
    }
      if (timer == 0) 
      {
        console.log('TIME IS UP!');
      }
      
} 