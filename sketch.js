let explosionarray = [];
let noofexplosions = 9;
let spawntimer = 3000;
let endthegame = false;
let txt;
let timertext;


function setup(){
    createCanvas(500,500);
    //background(150);
    for(var i = 0; i < noofexplosions; i++){
        explosionarray[i] = new explosion(50);
    }
	txt = createDiv('Hello');
	txt.position(600, 50);
	timertxt = createDiv();
	timertxt.position(600, 100);
}
    
function draw(){
    background(150);
	if (endthegame){
		txt.html("Game Ended");
	}
	if (!endthegame){
		let gametimer = millis();
		if (gametimer >= spawntimer){
			console.log("spawn one");
			for(var i = 0; i < noofexplosions; i++){
				//check for spawned status. If not spawned and the gametimer is above spawn timer then spawn an explosion.
				if (explosionarray[i].spawned == false){
					explosionarray[i].spawn(true);
					break;
				}
			}
			spawntimer = spawntimer + random([2000,3000,4000,5000]);
		}
		timertxt.html("You survived: " +gametimer/1000);
	}
	
    for (var i = 0; i < noofexplosions; i++){
        //check for collision with mouse. only checks if spawned is true and destroyed is false (in explosion.js).
		if (endthegame && explosionarray[i].exploded == false){
			explosionarray[i].exploded = true;
		}
		explosionarray[i].update(5);
		explosionarray[i].collided_with(mouseX,mouseY);
		if (explosionarray[i].exploded == true){
		endthegame = true;	
		}
    }
}