function Snake() {
    this.x=0;
    this.y=0;
    this.xspeed=scale * 1;
    this.yspeed=0;

    this.draw= function(){
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale);

    }
     this.update= function(){
         this.x += this.xspeed
         this.y += this.yspeed 

         if(this.x > canvas.width){
             this.x=0;

             if(this.y > canvas.height){
                this.y=0;

                if(this.x < 0){
                    this.x= canvas.width;

                    if(this.x < 0){
                        this.x= canvas.width;
         }
     }
     this.changeDirection= function(direction){
         switch(direction){
             case 'up':
                 this.xspeed=0;
                 this.yspeed= -scale * 1;
                 break;

                 case 'down':
                 this.xspeed=0;
                 this.yspeed=scale * 1;
                 break;

                 case 'left':
                 this.xspeed=0;-scale *1;
                 this.yspeed=0;
                 break;

                 case 'right':
                 this.xspeed=scale * 1;
                 this.yspeed=0;
                 break;
         }
        }}}
     }
    }