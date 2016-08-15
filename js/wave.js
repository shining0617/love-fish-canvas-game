/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-27 15:58:22
 * @version $Id$
 */

var waveObj=function(){
	this.x=[];
	this.y=[];
	this.alive=[];
	this.r=[];
	this.c=[];
}
waveObj.prototype.num = 10;
waveObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.r[i]=0;
	}
}
waveObj.prototype.draw=function(){
	ctx1.save();
	ctx1.lineWidth=2;
	ctx1.shadowBlur=10;
	ctx1.shadowColor="white";
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			//draw
			this.r[i]+=detalTime*0.05;
			//死亡时最大的半径
			if(this.r[i]>60){
				this.alive[i]=false;
				break;
			}
			var alpha=1-this.r[i]/60;
			ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
			ctx1.beginPath();
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath(); 
			ctx1.stroke(); 
		}
	}
	ctx1.restore();
}
waveObj.prototype.born=function(x,y){
	for(var i=0;i<this.num;i++){
		if(!this.alive[i]){
			//born
			this.alive[i]=true;
			this.r[i]=20;
			this.x[i]=x;
			this.y[i]=y;
			return;
		}
	}
}