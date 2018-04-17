class explosion{
    constructor(size){
        this.size = size;
        this.xpos = round(random(25,475));
        this.ypos = round(random(25,475));
        this.spawned = false;
        this.exploded = false;
        this.is_destroyed = false;
        this.distance = 0;
        this.growrate = 0;
    }
    
    show(){
        fill('red');
        noStroke();
        ellipse(this.xpos,this.ypos,this.size);
    }
    
    noshow(){
        clear();
        background(150);
        //ellipse(this.xpos,this.ypos,this.size);
    }
    
    spawn(spawn_called){
        if (spawn_called){
            this.spawned = true;
            this.show();
        }
    }
    
    collided_with(mouseyx,mouseyy){
        if (this.spawned == true && this.is_destroyed == false){
            let collision_distance = this.size/2
            this.distance = dist(mouseyx,mouseyy,this.xpos,this.ypos);
            if(this.distance < collision_distance){
                this.is_destroyed = true;
                //this.noshow(); //gets rid of the explosion from the screen if collided with and destroyed.
                console.log("collided with");
            }
        }
    }
    
    
    update(howfast){
        //only updates if its spawned and not destroyed. Once destroyed it does not update.
        if (this.spawned == true && this.is_destroyed == false){
            this.size = this.size + howfast;
            fill('red');
            ellipse(this.xpos,this.ypos,this.size);
        }
    }
}