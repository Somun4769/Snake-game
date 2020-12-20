function Fruit(){
    this.x;
    this.y;

    this.picLocation=function(){
        this.x= (Math.floor(math.random() * rows - 1) +1) * scale;
        this.y= (Math.floor(math.random() * columns - 1) +1) * scale;
    }
    this.draw= function(){
        ctx.fillStyle="//#endregionFFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}