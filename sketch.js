let explosionarray = [];
let spawntimer = 3000;

function setup(){
    createCanvas(500,500);
    //background(150);
    for(var i = 0; i < 9; i++){
        explosionarray[i] = new explosion(50);
    }
}
    
function draw(){
    background(150);
    let gametimer = millis();
    if (gametimer >= spawntimer){
        console.log("spawn one");
        for(var i = 0; i < 9; i++){
            //check for spawned status. If not spawned and the gametimer is above spawn timer then spawn an explosion.
            if (explosionarray[i].spawned == false){
                explosionarray[i].spawn(true);
                break;
            }
        }
        spawntimer = spawntimer + random([2000,3000,4000,5000]);
    }
    
    for (var i = 0; i < 9; i++){
        //check for collision with mouse. only checks if spawned is true and destroyed is false (in explosion.js).
        explosionarray[i].update(0.5);
        explosionarray[i].collided_with(mouseX,mouseY);
        
    }
}