let ship;
let aliensOne = [];
let aliensTwo = [];
let bullets = [];
let totalShots = 0;
let hitShots = 0;
let score = 0;
let alienhead;
let spaceshipcartoon;
let aliens;
let indexOne = [];
let indexTwo = [];
let finished = false;
let alienCartoon;
let shipCartoon;
let lost = false;
let printed = false;

function setup() {
  createCanvas(600, 600);
  ship = new Ship();
  for(let i = 0; i < 7; i++) 
  {
    aliensOne[i] = new alien(i * 70 + 80, 50);
    aliensTwo[i] = new alien(i * 70 + 80, 120);
  }

}

function stars() {

}

function draw() 
{
  background(0);

  if(!finished) {
  ship.move();
  }
  ship.show();

  for(let i = 0; i < bullets.length; i++) {
    if(!finished)
    {
    bullets[i].show();
    }
    bullets[i].fire();
    let j = 0;

    aliensOne.forEach(element => {
      if(bullets[i].hits(element)) 
      {
        hitShots++;
        score+= 5;
        bullets[i].evaporate();
        indexOne.push(j);
      }

      j++;
    });
    j = 0;

    aliensTwo.forEach(element => {
      if(bullets[i].hits(element)) 
      {
        hitShots++;
        score+= 5;
        bullets[i].evaporate();
        indexTwo.push(j);
      }

      j++;
    });

    if(bullets[i].y <= 0) {
      bullets.splice(bullets[i], 1);
    }

  }

  indexOne.forEach(element => {
    aliensOne.splice(element, 1);
  });

  indexTwo.forEach(element => {
    aliensTwo.splice(element, 1);
  });
  indexOne = [];
  indexTwo = [];
  if(aliensOne.length <= 0 && aliensTwo.length <= 0 && !finished) 
  {
    print();
    finished = true;
  }

  let right = false;
  let left = false;

  aliensOne.forEach(element => {
    element.show();
    if(!finished) {
      element.move();
    }
    if(element.x > width - 25) {
      right = true;
    }
    if(element.x === 25) {
      left = true;
    } 
  });

  aliensTwo.forEach(element => {
    element.show();
    if(!finished) {
      element.move();
    }
    if(element.x > width - 25) {
      right = true;
    }
    if(element.x === 25) {
      left = true;
    } 
  });

  if(right) {

    aliensOne.forEach(element => {
      if(!finished) { 
        element.shiftDown();
      }
    });

    aliensTwo.forEach(element => {
      if(!finished) { 
        element.shiftDown();
      }
    });

  }
  if(left) {
    aliensOne.forEach(element => {
      if(!finished) { 
        element.shiftDown();
      }
    });
    
    aliensTwo.forEach(element => {
      if(!finished) { 
        element.shiftDown();
      }
    });

  }
  for(let i = 0; i < bullets.length; i++) 
  {
    if(bullets[i].toDelete) 
    {
      bullets.splice(bullets[i], 1);
    }
  }

  aliensOne.forEach(alian => {
    if(alian.y >= (height - 100 - 90) && alian.x > ship.x - 30 && alian.x < ship.x + 30) {
      finished = true;
      lost = true;
    }
  });

  aliensTwo.forEach(alian => {
    if(alian.y >= (height - 100 - 90) && alian.x > ship.x - 30 && alian.x < ship.x + 30) {
     finished = true;
     lost = true;
    }
  });

  aliensOne.forEach(element => {
    if(element.y >= height + 25) {
      score -= 5;
      aliensOne.splice(element, 1);
    }
  });
  aliensTwo.forEach(element => {
    if(element.y >= height + 25) {
      score -= 5;
      aliensTwo.splice(element, 1);
    }
  });

  if(lost && !printed) {
    printed = true;
    console.log('~~YOU LOST!~~');
    console.log('Here are your results:');
    console.log('Total shots fired:  ' + totalShots);
    console.log('Total shots hit:  ' + hitShots);
    console.log('Accuracy: ' + Math.floor((hitShots / totalShots) * 100) + '%');
    console.log('Score: ' + (score - (totalShots - hitShots) * 2));
  }

}

function keyReleased() 
{
  if(keyCode !== 32) {
  ship.xdir = 0;
  }
}

function print() 
{
  console.clear();
    console.log('~~~YOU WIN!~~~');
    console.log('Here are your results:');
    console.log('Total shots fired:  ' + totalShots);
    console.log('Total shots hit:  ' + hitShots);
    console.log('Accuracy: ' + Math.floor((hitShots / totalShots) * 100) + '%');
    console.log('Score: ' + (score - (totalShots - hitShots) * 2));
}

function keyPressed() 
{
  if(!finished)
  {
    if(keyCode === 32) 
    {
      totalShots++;
      let mybullet = new bullet(ship.x, height);
      bullets.push(mybullet);
    } 
    else if(keyCode === 13) 
    {
      print(); 
    }

    if(keyCode === RIGHT_ARROW) 
    {
      if(!(ship.x > width - 30)) { 
      ship.setDir(1);
      ship.move();
      } 
    } 
    else if(keyCode === LEFT_ARROW) 
    {
      if(!(ship.x < 30)) { 
        ship.setDir(-1);
        ship.move();
        }
    } 
  }
}