let player;
let enemiesKilled = 0;
let w = 0;
let won = false;
let bossHp = 30;
let bossEnemies = [];
let enemybulletx;
let bossbullets = [];
let enemybulletxDown;
let enemybulletydown;
let enemybullety;
let showMap = true;
let died = false;
let enemies = [];
let allPlayersAreDeadEight = false;
let allPlayersAreDeadFourteen = false;
let rooms = [];
let heartspawn;
let bullets = [];
let roomone;
let roomtwo;
let roomthree;
let roomfour;
let roomfive;
let roomsix;
let roomseven;
let roomeight;
let roomnine;
let roomten;
let roomeleven;
let roomtwelve;
let roomthirteen;
let roomfourteen;
let roomfifteen;
let faceright = true;
let faceleft = false;
let faceup = false;
let facedown = false;
let bulletdirx = 0;
let bulletdiry = 0;
let bulletsy = [];
let currentRoom;
let ammo = 12;
let canBeHit = true;
let dashesLeft = 1;
let isReloading = false;
let hp = [];
let canturnleft = true;
let canturnright = true;
let canturnup = true;
let canturndown = true;
let minimp;
let currency = 0;
let currencyLocationRooms = [];
let moneybag;
let toShowFirstMoneyBag = true;
let toShowSecondMoneyBag = true;
let toShowHeartSpawn = true;
let currencyRemaining = true;
let heartSpawnLocations = [];
let enemiesthree = [];
let num1 = Math.floor(Math.random() * 5);
let num2 = Math.floor(Math.random() * 5);
let num3 = Math.floor(Math.random() * 3)
while(num2 === num1)
{
    num2 = Math.floor(Math.random() * 5);
}

function setup()
{
    createCanvas(900, 600);
    for(let i = 0; i < 5; i++)
    {
        hp.push(new heart(i * 40 + 30, 30));
    }

    enemybullety = new enemyBullety(width / 2 - 130, 0, 1);
    enemybulletydown = new enemyBullety(width / 2 - 130, height, -1);
    enemybulletx = new enemyBulletx(width, height / 2 - 130);
    enemybulletxdown = new enemyBulletx(width, height / 2 + 130);
    bossbullets.push(new enemyBulletx(width - 180, height / 2 - 80), new enemyBulletx(width - 180, height / 2), new enemyBulletx(width - 180, height / 2 + 80));
    bossEnemies.push(new Enemy(width / 2 + 150, 70), new Enemy(width / 2 + 150, height - 70));
    player = new Player(width / 2, height / 2);
    roomone = new roomOne();
    roomtwo = new roomTwo();
    roomthree = new roomThree();
    roomfour = new roomFour();
    roomfive = new roomFive();
    roomsix = new roomSix();
    roomseven = new roomSeven();
    roomeight = new roomEight();
    roomnine = new roomNine();
    roomten = new roomTen();
    roomeleven = new roomEleven();
    roomtwelve = new roomTwelve();
    roomthirteen = new roomThirteen();
    roomfourteen = new roomFourteen();
    roomfifteen = new roomFifteen();
    minimap = new Map();
    moneybagone = new moneyBag();
    moneybagtwo = new moneyBag();
    heartSpawnLocations.push(roomthree, roomseven, roomthirteen);
    heartspawn = new heartSpawn(heartSpawnLocations[num3]);
    currentRoom = roomone;
    roomone.discovered = true;
    currencyLocationRooms.push(roomfour, roomsix, roomten, roomtwelve, roomfive);
    rooms.push(roomone, roomtwo, roomthree, roomfour, roomfive, roomsix, roomseven, roomeight, roomnine, roomten, roomeleven, roomtwelve, roomthirteen, roomfourteen, roomfifteen);
    enemies.push(roomthree, roomfour, roomfive, roomsix, roomseven, roomeight, roomnine, roomten, roomtwelve, roomfourteen);
}

function draw()
{
    background(100, 100, 100);
    //Display Rooms
    rooms.forEach(element => {
        element.display();
    });

    //If Player Dies
    if(hp.length <= 0)
    {
        died = true;
    }

    //If Player Kills Boss
    if(bossHp <= 0)
    {
        bosshp = 0;
        won = true;
    }

    //If Bullets Hit Enemy
    bullets.forEach(i => {
        enemies.forEach(j => {
            j.enemies.forEach(k => {
                if(currentRoom === j)
                {
                    i.hits(k);
                    if(i.hit === true)
                    {
                        if(k.timesHit >= 3)
                        {
                            k.toShow = false;
                        }
                        bullets.pop();
                    }
                }
            });
        });
    });

    bulletsy.forEach(i => {
        enemies.forEach(j => {
            j.enemies.forEach(k => {
                if(currentRoom === j)
                {
                    i.hits(k);
                    if(i.hit)
                    {
                        if(k.timesHit >= 3)
                        {
                            k.toShow = false;
                        }
                        bulletsy.pop();
                    }
                }
            });
        });
    });

    //Enemeis - ROOM 3
    if(currentRoom === roomthree)
    {
        roomthree.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 4
    if(currentRoom === roomfour)
    {
        roomfour.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 5
    if(currentRoom === roomfive)
    {
        roomfive.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 6
    if(currentRoom === roomsix)
    {
        roomsix.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 7
    if(currentRoom === roomseven)
    {
        roomseven.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 8
    if(currentRoom === roomeight)
    {
        roomeight.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 9
    if(currentRoom === roomnine)
    {
        roomnine.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies = ROOM 10
    if(currentRoom === roomten)
    {
        roomten.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies - ROOM 12
    if(currentRoom === roomtwelve)
    {
        roomtwelve.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //Enemies - ROOM 14
    if(currentRoom === roomfourteen)
    {
        roomfourteen.enemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                element.move();
                element.hits(player);
            }
        });
    }
    //BOSS - ROOM 15
    if(currentRoom === roomfifteen)
    {
        //If Player Is Close To Boss
        if(player.x >= width - 270)
        {
            player.x -= 400;
        }
        currency = 0;
        //Disable Minimap
        showMap = false;
        //BulletY - UP
        if(!died && !won)
        {
            enemybullety.fire();
            if(enemybullety.y > 910)
            {
                enemybullety.y = -2000;
                setTimeout(function() {enemybullety.y = 0}, 500);
            }
        }
        enemybullety.hits(player);
        if(enemybullety.hit === true)
        {
            setTimeout(function() {enemybullety.y = -20; enemybullety.hit = false; enemybullety.toShow = true}, 500);
        }
        else if(enemybullety.hit === false)
        {
            enemybullety.show();
        }
        //BulletY - DOWN
        if(!died && !won)
        {
            enemybulletydown.fire();
            if(enemybulletydown.y < -10)
            {
                enemybulletydown.y = 2000;
                setTimeout(function() {enemybulletydown.y = height}, 500);
            }
        }
        enemybulletydown.hits(player);
        if(enemybulletydown.hit === true)
        {
            setTimeout(function() {enemybulletydown.y = height + 20; enemybulletydown.hit = false; enemybulletydown.toShow = true}, 500);
        }
        else if(enemybulletydown.hit === false)
        {
            enemybulletydown.show();
        }
        //BulletX - UP
        if(!died && !won)
        {
            enemybulletx.fire();
            if(enemybulletx.x < -10)
            {
                enemybulletx.x = 2000;
                setTimeout(function() {enemybulletx.x = width}, 500);
            }
        }
        enemybulletx.hits(player);
        if(enemybulletx.hit === true)
        {
            setTimeout(function() {enemybulletx.x = width + 20; enemybulletx.hit = false; enemybulletx.toShow = true}, 500);
        }
        else if(enemybulletx.hit === false)
        {
            enemybulletx.show();
        }

        //BulletX - DOWN
        if(!died && !won)
        {
            enemybulletxdown.fire();
            if(enemybulletxdown.x < -10)
            {
                enemybulletxdown.x = 2000;
                setTimeout(function() {enemybulletxdown.x = width}, 500);
            }
        }
        enemybulletxdown.hits(player);
        if(enemybulletxdown.hit)
        {
            setTimeout(function() {enemybulletxdown.x = width + 20; enemybulletxdown.hit = false; enemybulletxdown.toShow = true}, 500);
        }
        else if(enemybulletxdown.hit === false)
        {
            enemybulletxdown.show();
        }
        
        //Boss Bullets
        bossbullets.forEach(element => {
            if(!died && !won)
            {
                element.fire();
            }

            if(element.x < -10)
            {
                element.x = 2000;
                setTimeout(function() {element.x = width - 180}, 700);
            }

            element.hits(player);
                if(element.hit)
                {
                    setTimeout(function() {element.x = width - 180; element.hit = false; element.toShow = true}, 700);
                }
            else if(element.hit === false)
            {
                element.show();
            }
        });

        //Enemy Spawns
        bossEnemies.forEach(element => {
            if(element.toShow)
            {
                element.show();
                if(!died && !won)
                {
                    element.move();
                    element.hits(player);
                }
                else if(won || died)
                {
                    element.hit = false;
                }
            }
            else if(element.toShow === false && element === bossEnemies[0])
            {
                setTimeout(function() { element.toShow = true; element.x = width / 2 + 170; element.y = -20}, 3000);
            }
            else if(element.toShow === false && element === bossEnemies[1])
            {
                setTimeout(function() { element.toShow = true; element.x = width / 2 + 170; element.y = height + 30}, 3000);
            }

            bullets.forEach(i => {
                i.hits(element);
                if(i.hit)
                {
                    currency = 0;
                    bullets.pop();
                }
            });
            bulletsy.forEach(i => {
                i.hits(element);
                if(i.hit)
                {
                    currency = 0;
                    bulletsy.pop();
                }
            });

            if(element.timesHit >= 3)
            {
                enemiesKilled ++;
                element.toShow = false;
                element.timesHit = 0;
            }

        });

        //boss
        if(enemiesKilled >= 3)
        {
            roomfifteen.boss.couch();
            roomfifteen.boss.show();
            roomfifteen.boss.hpbar();
        }
        roomfifteen.boss.arrowDisposalUp();
        roomfifteen.boss.arrowDisposalDown();
        roomfifteen.boss.arrowDisposalWallDown();
        roomfifteen.boss.arrowDisposalWallUp();
        roomfifteen.boss.enemyDisposalUp();
        roomfifteen.boss.enemyDisposalDown();

        //If Boss Is Hit
        bullets.forEach(element => {
            let d = dist(element.x, element.y, roomfifteen.boss.x, roomfifteen.boss.y);

            if(d <= 70)
            {
                w += 12;
                bossHp --;
                bullets.pop();
            }
        });

    }
    else
    {
        showMap = true;
    }

    //Disply Minimap
    if(showMap)
    {
        minimap.show();
    }
    //Bullets - Show & Fire
    bullets.forEach(element => {
        element.show();
        if(!died && !won)
        {
            element.fire();
        }

        if(element.x >= 1000 || element.x <= -100)
        {
            bullets.splice(element, 1);
        }
    });

    if(currentRoom === heartspawn.room && toShowHeartSpawn)
    {
            heartspawn.show();
    }

    if(currentRoom === currencyLocationRooms[num1])
    {
        if(toShowFirstMoneyBag)
        {
            currentRoom.showmoneybag();
        }
    }
    if(currentRoom === currencyLocationRooms[num2])
    {
        if(toShowSecondMoneyBag)
        {
            currentRoom.showmoneybag();
        }
    }

    bulletsy.forEach(element => {
        element.show();
        if(!died && !won)
        {
            element.fire();
        }

        if(element.x >= 1000)
        {
            bullets.splice(element, 1);
        }
    });
    //Player Functions
    if(!died && !won)
    {
        player.movex();
        player.movey();
    }
    player.show();
    player.gun();

    //If Player Enters Right Door Room 1
    if(player.x >= 865 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomone.toShow)
    {
        roomtwo.discovered = true;
        currentRoom = roomtwo;
        roomtwo.toShow = true;
        roomone.toShow = false;
        player.x = 73;
    }
    //If Player Enters Left Door Room 2
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomtwo.toShow)
    {
        currentRoom = roomone;
        roomone.toShow = true;
        roomtwo.toShow = false;
        player.x = 840;
    }
    //If Player Enters Down Door Room 2
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomtwo.toShow)
    {
        roomthree.discovered = true;
        currentRoom = roomthree;
        roomtwo.toShow = false;
        roomthree.toShow = true;
        player.y = 78;
    }
    //If Player Enters Up Door Room 2
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomtwo.toShow)
    {
        roomfour.discovered = true;
        currentRoom = roomfour;
        roomfour.toShow = true;
        roomtwo.toShow = false;
        player.y = height - 73;
    }
    //If Player Enters Up Door Room 3
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomthree.toShow)
    {
        roomtwo.discovered = true;
        currentRoom = roomtwo;
        roomthree.toShow = false;
        roomtwo.toShow = true;
        player.y = height - 73;
    }
    //If Player Enters Right Door Room 3
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomthree.toShow)
    {
        roomfive.discovered = true;
        currentRoom = roomfive;
        roomthree.toShow = false;
        roomfive.toShow = true;
        player.x = 73;
    }
    //If Player Enters Down Door Room 4
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomfour.toShow)
    {
        roomtwo.discovered = true;
        currentRoom = roomtwo;
        roomfour.toShow = false;
        roomtwo.toShow = true;
        player.y = 78;
    }
    //If Player Enters Right Door Room 4
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomfour.toShow)
    {
        roomtwelve.discovered = true;
        currentRoom = roomtwelve;
        roomfour.toShow = false;
        roomtwelve.toShow = true;
        player.x = 78;
    }
    //If Player Enters Up Door Room 4
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomfour.toShow)
    {
        roomsix.discovered = true;
        currentRoom = roomsix;
        roomfour.toShow = false;
        roomsix.toShow = true;
        player.y = height - 73;
    }
    //If Player Enters Left Door Room 5
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomfive.toShow)
    {
        roomthree.discovered = true;
        currentRoom = roomthree;
        roomfive.toShow = false;
        roomthree.toShow = true;
        player.x = 840;
    }
    //If Player Enters Right Door Room 5
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomfive.toShow)
    {
        roomseven.discovered = true;
        currentRoom = roomseven;
        roomfive.toShow = false;
        roomseven.toShow = true;
        player.x = 73;
    }
    //If Player Enters Down Door Room 6
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomsix.toShow)
    {
        roomfour.discovered = true;
        currentRoom = roomfour;
        roomsix.toShow = false;
        roomfour.toShow = true;
        player.y = 78;
    }
    //If Player Enters Right Door Room 6
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomsix.toShow)
    {
        roomten.discovered = true;
        currentRoom = roomten;
        roomsix.toShow = false;
        roomten.toShow = true;
        player.x = 73;
    }
    //If Player Enters Left Door Room 6
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomsix.toShow)
    {
        roomeight.discovered = true;
        currentRoom = roomeight;
        roomsix.toShow = false;
        roomeight.toShow = true;
        player.x = 840;
    }
    //If Player Enters Left Door Room 7
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomseven.toShow)
    {
        roomfive.discovered = true;
        currentRoom = roomfive;
        roomseven.toShow = false;
        roomfive.toShow = true;
        player.x = 840;
    }
    //If Player Enters Down Door Room 7
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomseven.toShow)
    {
        roomthirteen.discovered = true;
        currentRoom = roomthirteen;
        roomseven.toShow = false;
        roomthirteen.toShow = true;
        player.y = 78;
    }
    //If Player Enters Up Door Room 7
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomseven.toShow)
    {
        roomnine.discovered = true;
        currentRoom = roomnine;
        roomseven.toShow = false;
        roomnine.toShow = true;
        player.y = height - 73;
    }
    //Check Enemies In Room 8
    allPlayersAreDeadEight = true;
    roomeight.enemies.forEach(element => {
        if(element.toShow)
        {
            allPlayersAreDeadEight = false;
        }
    });
    if(allPlayersAreDeadEight)
    {
        roomeight.doorLocked = false;
    }
    //If Player Enters Right Door Room 8
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomeight.toShow)
    {
        if(roomeight.doorLocked === false)
        {
            roomsix.discovered = true;
            currentRoom = roomsix;
            roomeight.toShow = false;
            roomsix.toShow = true;
            player.x = 73;
        }
    }
    //If Player Enters Down Door Room 9
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomnine.toShow)
    {
        roomseven.discovered = true;
        currentRoom = roomseven;
        roomnine.toShow = false;
        roomseven.toShow = true;
        player.y = 78;
    }
    //If Player Enters Right Door Room 9
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomnine.toShow)
    {
        roomfourteen.discovered = true;
        currentRoom = roomfourteen;
        roomnine.toShow = false;
        roomfourteen.toShow = true;
        player.x = 73;
    }
    //If Player Enters Up Door Room 9
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomnine.toShow)
    {
        roomeleven.discovered = true;
        currentRoom = roomeleven;
        roomnine.toShow = false;
        roomeleven.toShow = true;
        player.y = height - 73;
    }
    //If Player Enters Left Door Room 10
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomten.toShow)
    {
        roomsix.discovered = true;
        currentRoom = roomsix;
        roomten.toShow = false;
        roomsix.toShow = true;
        player.x = 840;
    }
    //If Player Enters Down Door Room 10
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomten.toShow)
    {
        roomtwelve.discovered = true;
        currentRoom = roomtwelve;
        roomten.toShow = false;
        roomtwelve.toShow = true;
        player.y = 78;
    }
    //If Player Enters Down Door Room 11
    if(player.x >= (width / 2) - 75 && player.x <= (width / 2) + 75 && player.y >= 540 && roomeleven.toShow)
    {
        roomnine.discovered = true;
        currentRoom = roomnine;
        roomeleven.toShow = false;
        roomnine.toShow = true;
        player.y = 78;
    }
    //If Player Enters Left Door Room 11
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomeleven.toShow)
    {
        roomtwelve.discovered = true;
        currentRoom = roomtwelve;
        roomeleven.toShow = false;
        roomtwelve.toShow = true;
        player.x = 840;
    }
    //If Player Enters Left Door Room 12
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomtwelve.toShow)
    {
        roomfour.discovered = true;
        currentRoom = roomfour;
        roomtwelve.toShow = false;
        roomfour.toShow = true;
        player.x = 840;
    }
    //If Player Enters Right Door Room 12
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomtwelve.toShow)
    {
        roomeleven.discovered = true;
        currentRoom = roomeleven;
        roomtwelve.toShow = false;
        roomeleven.toShow = true;
        player.x = 73;
    }
    //If Player Enters Up Door Room 12
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomtwelve.toShow)
    {
        roomten.discovered = true;
        currentRoom = roomten;
        roomtwelve.toShow = false;
        roomten.toShow = true;
        player.y = height - 73;
    }
    //If Player Enters Up Door Room 13
    if(player.x >= (width / 2) - 60 && player.x <= (width / 2) + 60 && player.y <= 75 && roomthirteen.toShow)
    {
        roomseven.discovered = true;
        currentRoom = roomseven;
        roomthirteen.toShow = false;
        roomseven.toShow = true;
        player.y = height - 73;
    }
    //If Player Enters Right Door Room 13
    if(player.x >= 850 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomthirteen.toShow)
    {
        roomfifteen.discovered = true;
        currentRoom = roomfifteen;
        roomthirteen.toShow = false;
        roomfifteen.toShow = true;
        player.x = 73;
    }
        //Check Enemies In Room 14
        allPlayersAreDeadFourteen = true;
        roomfourteen.enemies.forEach(element => {
            if(element.toShow)
            {
                allPlayersAreDeadFourteen = false;
            }
        });
    
        if(allPlayersAreDeadFourteen)
        {
            roomfourteen.doorLocked = false;
        }
    //If Player Enters Left Door Room 14
    if(player.x <= 45 && player.y >= height / 2 - 100 && player.y <= height / 2 + 100 && roomfourteen.toShow)
    {
        if(roomfourteen.doorLocked === false)
        {
            roomnine.discovered = true;
            currentRoom = roomnine;
            roomfourteen.toShow = false;
            roomnine.toShow = true;
            player.x = 840;
        }
    }

    //If Player Hits Cieling
    if(player.y <= 35 + 37)
    {
        player.ydir = 0;
        canturnup = false;
    }
    else
    {
        canturnup = true;
    }
    //If Player Hits Floor
    if(player.y >= 565 - 14)
    {
        player.ydir = 0;
        canturndown = false;
    }
    else
    {
        canturndown = true;
    }
    //If Player Hits Left Wall
    if(player.x <= 40)
    {
        if(player.y >= height / 2 - 75 && player.y <= height / 2 + 75 && player.x >= 800 && roomone.toShow === true)
        {}
        else
        {
            player.xdir = 0;
            canturnleft = false;
        }
    }
    else
    {
        canturnleft = true;
    }
    //If Player Hits Right Wall
    if(player.x >= 860)
    {
        if(player.y >= height / 2 - 75 && player.y <= height / 2 + 75 && player.x >= 800 && roomone.toShow === true)
        {}
        else
        {
            player.xdir = 0;
            canturnright = false;
        }
    }
    else
    {
        canturnright = true;
    }
    //Ammo
    push();
    fill(0, 0, 0, 0);
    strokeWeight(3);
    rect(width - 106, height - 38, 206, 70);
    pop();
    push();
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Ammo: "  + ammo + '/12', width - 106, height - 26);
    //Currency
    text('Currency: ' + currency, 100 , height - 26);
    pop();

    if(player.x >= (width / 2) - 25 && player.x <= (width / 2) + 25 && player.y <= (height / 2) + 25 && player.y >= (height /2) - 25 && currentRoom === currencyLocationRooms[num1] && toShowFirstMoneyBag)
    {
        push();
        strokeWeight(2);
        textSize(20);
        textAlign(CENTER);
        text("'E' To Pick Up", width / 2, height / 2 - 50);
        pop();
    }
    if(player.x >= (width / 2) - 25 && player.x <= (width / 2) + 25 && player.y <= (height / 2) + 25 && player.y >= (height /2) - 25 && currentRoom === currencyLocationRooms[num2] && toShowSecondMoneyBag)
    {
        push();
        strokeWeight(2);
        textSize(20);
        textAlign(CENTER);
        text("'E' To Pick Up", width / 2, height / 2 - 50);
        pop();
    }
    //If Player Stands On HeartSpawn
    if(player.x >= width / 2 - 20 && player.x <= width / 2 + 20 && player.y >= height / 2 - 20 && player.y <= height / 2 + 20 && currentRoom === heartspawn.room && toShowHeartSpawn)
    {
        push();
        strokeWeight(2);
        textSize(20);
        textAlign(CENTER);
        text("'E' To Pick Up", width / 2, height / 2 - 50);
        pop();
    }
    //If Player Stands On Shop
    if(player.x > width - 200 && player.x < width - 100 && player.y > height / 2 - 100 && player.y < height / 2 + 100 && currentRoom === roomeleven)
    {
        push();
        strokeWeight(2);
        textSize(20);
        textAlign(CENTER);
        text("'E' To Buy 1 Heart", 740, 290 - 70);
        text("Cost: 120", 740, 290 - 50);
        pop();
    }

    hp.forEach(element => {
        element.show();
    });
    //Player Death Message
    if(died)
    {
        push();
        fill(255);
        textAlign(CENTER);
        textSize(50);
        text("You Died!", width / 2, height / 2);
        pop();
    }
    //Player Win Message
    if(won)
    {
        push();
        fill(255);
        textAlign(CENTER);
        textSize(50);
        text("You Win!", width / 2, height / 2);
        pop();
    }
}

function keyReleased()
{
    if(keyCode === 65 || keyCode === 68)
    {
        player.xdir = 0;
    }
    if(keyCode === 83 || keyCode === 87)
    {
        player.ydir = 0;
    }
}

function keyPressed()
{
    if(!died && !won)
    {
        if(keyCode === 68)
        {
            if(canturnright)
            {
                player.xdir = 1;
                faceleft = false;
                faceup = false;
                facedown = false;
                faceright = true;
                bulletdirx = 1;
                bulletdiry = 0;
            }
        }
        else if(keyCode === 65)
        {
            if(canturnleft)
            {
                player.xdir = -1;
                faceright = false;
                faceup = false;
                facedown = false;
                faceleft = true;
                bulletdirx = -1;
                bulletdiry = 0;
            }
        }
        else if(keyCode === 87)
        {
            if(canturnup)
            {
                player.ydir = -1;
                bulletdiry = -1;
                bulletdirx = 0;
                facedown = false;
                faceright = false;
                faceleft = false;
                faceup = true;
            }
        }
        else if(keyCode === 83)
        {
            if(canturndown)
            {
                player.ydir = 1;
                bulletdiry = 1;
                bulletdirx = 0;
                faceup = false;
                faceright = false;
                faceleft = false;
                facedown = true;
            }
        }
            else if(keyCode === 80)
            {
                if(ammo > 0 && (bulletdirx != 0 || bulletdiry != 0) && !isReloading)
                {
                    ammo--;
                    if(bulletdirx === 1)
                    {
                        bullets.push(new bullet(player.x + 28, player.y + 3, bulletdirx));
                    }
                    else if(bulletdirx === -1)
                    {
                        bullets.push(new bullet(player.x - 28, player.y + 3, bulletdirx));
                    }
                    if(bulletdiry === 1 || bulletdiry === -1)
                    {
                        bulletsy.push(new bullety(player.x - 18, player.y + 5, bulletdiry));
                    }
                }
            }
            else if(keyCode === 16)
            {
                if(dashesLeft > 0)
                {
                    if(player.x < 745 && player.x > 155 && player.y < 440 && player.y > 160)
                    {
                        player.dash();
                        dashesLeft--;
                        setTimeout(function(){dashesLeft = 1}, 2000);
                    }
                    else if(player.y < 160 && faceup)
                    {
                        player.y = 70;
                        dashesLeft--;
                        setTimeout(function(){dashesLeft = 1}, 2000);
                    }
                    else if(player.x > 745 && faceright)
                    {
                        player.x = 860;
                        dashesLeft--;
                        setTimeout(function(){dashesLeft = 1}, 2000);
                    }
                    else if(player.x < 155 && faceleft)
                    {
                        player.x = 40;
                        dashesLeft--;
                        setTimeout(function(){dashesLeft = 1}, 2000);
                    }
                    else if(player.y  > 440 && facedown)
                    {
                        player.y = 553;
                        dashesLeft--;
                        setTimeout(function(){dashesLeft = 1}, 2000);
                    }
                    else
                    {
                        player.dash();
                        dashesLeft--;
                        setTimeout(function(){dashesLeft = 1}, 2000);
                    }
                }
            }
            else if(keyCode === 82)
            {
                if(ammo < 12)
                {
                    isReloading = true;
                    setTimeout(function(){ammo = 12; isReloading = false;}, 2000);
                }
            }
            else if(keyCode === 69)
            {
                if(currentRoom === currencyLocationRooms[num1])
                {
                    if(player.x >= (width / 2) - 25 && player.x <= (width / 2) + 25 && player.y <= (height / 2) + 25 && player.y >= (height /2) - 25 && toShowFirstMoneyBag)
                    {
                        currency += 100;
                        toShowFirstMoneyBag = false;
                    }
                }
                else if(currentRoom === currencyLocationRooms[num2])
                {
                    if(player.x >= (width / 2) - 25 && player.x <= (width / 2) + 25 && player.y <= (height / 2) + 25 && player.y >= (height /2) - 25 && toShowSecondMoneyBag)
                    {
                        currency += 100;
                        toShowSecondMoneyBag = false;
                    }
                }
                else if(currentRoom === roomeleven)
                {
                    if(player.x > width - 200 && player.x < width - 100 && player.y > height / 2 - 100 && player.y < height / 2 + 100 && currency >= 120)
                    {
                        hp.push(new heart((hp.length) * 40 + 30, 30));
                        currency -= 120;
                    }
                }

                if (player.x >= width / 2 - 20 && player.x <= width / 2 + 20 && player.y >= height / 2 - 20 && player.y <= height / 2 + 20 && currentRoom === heartspawn.room)
                {
                    if(toShowHeartSpawn)
                    {
                        toShowHeartSpawn = false;
                        hp.push(new heart((hp.length) * 40 + 30, 30));
                    }
                }

            }
        }
}