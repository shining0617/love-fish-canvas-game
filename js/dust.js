/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-27 18:05:19
 * @version $Id$
 */
var dustObj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[]; 
	this.alpha;
}
dustObj.prototype.num = 30;
dustObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){  
		this.x[i]=canWidth*Math.random();
		this.y[i]=canHeight*Math.random();
		this.amp[i]=25+Math.random()*15;
		this.No[i]=Math.floor(Math.random()*7);
	}
	this.alpha=0;
}
dustObj.prototype.draw=function(){
	this.alpha+=detalTime*0.0008;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++){
		var no=this.No[i];
		ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);  
	}  
}
