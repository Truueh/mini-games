let airplane;
let rockets = [];
let clouds = [];
let enemies = [];
let argument = false;
let timer = 60;
let lifePoints = 3;
let enemiesCount = 3;
let finished = false;
let died = false;
let score = 0;
let bulletsFired = 0;
let bulletsHit = 0;
window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);




function setup() 
{
  createCanvas(800, 600);
  airplane = new Airplane();
  for(let i = 0; i < 3; i++)
  {
    enemies[i] = new Enemy();  
  }

    for(let i = 0; i < 7; i++) {
      clouds[i] = new cloud();
    }
}

function draw() 
{
    background(0, 169, 202);
    airplane.show();
    if(!finished && !died)
    {
    airplane.update();
    }

    clouds.forEach(element => {
      element.show();
      if(!finished && !died)
      {
      element.move();
      }
      
      if(element.x <= -100)
      {
        element.x = random(800, 1600);
        element.y = random(0, 600);
      }

    });

    enemies.forEach(i => {
      i.show();
      if(!finished)
      {
      i.move();
      }
      if(i.x < -100 && !died) {
        i.x = 800;
        i.y = random(60, 540);
        score -= 5;
      }
    });

      rockets.forEach(element => {
        if(element.x >= 830) {
          score -= 5;
          rockets.splice(element, 1);
        }
        if(!finished && !died)
          element.show();
        {
        element.move();
        }
      });

      rockets.forEach(element => {
        for(let i = 0; i < enemies.length; i++) {
          if(element.hits(enemies[i].x, enemies[i].y)) {
            enemies.splice(i, 1);
            rockets.splice(element, 1);
            bulletsHit++;
            score += 5;
          } 
        }
      });

      if(!finished && !died)
      {
        if(frameCount % 60 == 0 && timer > 0) {
        timer--;
        }
      }

          if(timer === 0) {
            finished = true;
          }
        if(!finished)
        {
          if(enemies.length === 0) {
            if(!finished && !died)
            {
              enemiesCount++;
              for(let i = 0; i <= enemiesCount; i++) {
                enemies[i] = new Enemy();
              }
              score += 2;
            }
          }
        }
        for(let i = 0; i < enemies.length; i++) {
          if(airplane.hits(enemies[i].x, enemies[i].y)) {
            if(!died && !finished)
            {
              lifePoints--;
              enemies.splice(i, 1);
            }
          }
        }

        if(lifePoints <= 0) {
          died = true;
        }

        if(finished && !argument)
        {
         argument = true;
        }

        if(died)
        {
          airplane.crash();
          if(airplane.y >= 700)
          {
            airplane.y = 700;
          }
        }

        push();
    stroke(0);
    strokeWeight(3);
    textAlign(CENTER);
    textSize(30);
    if(score < 0)
    {
      fill(255, 0, 0);
    } else if (score >= 0 && score <= 10)
    {
      fill(255, 100, 0);
    } else if(score > 10)
    {
      fill(0, 255, 0);
    }
    text('Score: ' + score, 75, 40)
    pop();
    push();
      textAlign(CENTER);
      stroke(0);
      strokeWeight(3);
      fill(255);
      textSize(28);
      text('Life Points: ' + lifePoints, 700, 40);
      if(timer > 0)
      {
        text('Time Left: ' + timer, width / 2, 40);
      }
      else
      {
        text('Time Is Up!', width / 2, 40);
      }

        fill(254, 213, 0);
        text(Math.floor(frameRate()),30 , 570);
    pop();

    if(finished)
    {
      textSize(18);
      stroke(0);
      strokeWeight(3);
      fill(255);
      textAlign(CENTER);
      text('HERE ARE YOUR RESULTS:', width / 2, height / 2);
      text('Score: ' + score, width / 2, height / 2 + 20);
      text('Bullets Fired: ' + bulletsFired, width / 2, height / 2 + 40);
      text('Bullets Hit: ' + bulletsHit, width / 2, height / 2 + 60);
      text('Accuracy: ' + Math.floor(bulletsHit / bulletsFired * 100) + '%', width / 2, height / 2 + 80);

      airplane.x += 8;
      enemies.forEach(i => {
        i.crash();
      }); 
      
    }

    if(died)
    {
      textSize(18);
      stroke(0);
      strokeWeight(3);
      fill(255);
      textAlign(CENTER);
      text('HERE ARE YOUR RESULTS:', width / 2, height / 2);
      text('Score: ' + score, width / 2, height / 2 + 20);
      text('Bullets Fired: ' + bulletsFired, width / 2, height / 2 + 40);
      text('Bullets Hit: ' + bulletsHit, width / 2, height / 2 + 60);
      text('Accuracy: ' + Math.floor(bulletsHit / bulletsFired * 100) + '%', width / 2, height / 2 + 80);

      airplane.x += 8;
    }

}

let Key = {
    _pressed: {},
  
    UP: 38,
    DOWN: 40,
    
    isDown: function(keyCode) {
      return this._pressed[keyCode];
    },
    
    onKeydown: function(event) {
      this._pressed[event.keyCode] = true;
    },
    
    onKeyup: function(event) {
      delete this._pressed[event.keyCode];
    }
  };

  window.addEventListener('keydown', function(event) 
  {
      switch (event.keyCode) 
      {
        case 38:
        if(!finished)
        {
          airplane.moveUp();
        }
        break;
    
        case 40:
        if(!finished)
        {
          airplane.moveDown();
        }
        break;
      }
    }, false);

    function keyPressed() {
      if(!finished && !died)
      {
        if(keyCode === 32) {
          rockets.push(new rocket(airplane.x, airplane.y));
          bulletsFired++;
        }
      }
    }



