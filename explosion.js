class explosion{
    constructor(size){
        this.size = size;
        this.xpos = round(random(25,475));
        this.ypos = round(random(25,475));
        this.spawned = false;
        this.exploded = false;
		this.explodedsize = 250;
        this.is_destroyed = false;
        this.distance = 0;
        this.growrate = 0;
		this.freeze = false;
    }
    
    show(){
		if (this.size <= 200){
			fill('green');
			noStroke();
			ellipse(this.xpos,this.ypos,this.size);
		}
		else{
			fill('red');
			noStroke();
			ellipse(this.xpos,this.ypos,this.size);
		}
    }
    
    spawn(spawn_called){
        if (spawn_called){
            this.spawned = true;
            this.show();
        }
    }
    
    collided_with(mouseyx,mouseyy){
        if (this.spawned == true && this.is_destroyed == false && !this.exploded){
            let collision_distance = this.size/2
            this.distance = dist(mouseyx,mouseyy,this.xpos,this.ypos);
            if(this.distance < collision_distance){
                this.is_destroyed = true;
                console.log("collided with");
            }
        }
    }
    
    update(howfast){
        //only updates if its spawned and not destroyed. Once destroyed it does not update.
        if (this.spawned == true && this.is_destroyed == false){
			if (!this.exploded){
				this.size = this.size + howfast;
				this.explodegameend();
			}
			this.show();
        }
    }
	
	
	
	explodegameend(){
		if (this.size > this.explodedsize){
			this.exploded = true;
			console.log("game ended");
		}
	}
	
}