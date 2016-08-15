/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-26 13:58:51
 * @version $Id$
 */
//定义一个类
var aneObj=function(){
	//start point,control point,end point(sin);

	this.rootx=[];
	this.headx=[];
	this.heady=[]; 
	this.alpha=0;
	this.amp=[]; //每个海葵的振幅
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){//初始化确定每一个海葵的位置 
	for(var i=0;i<this.num;i++){
		this.rootx[i]=i*16+Math.random()*20;
		this.headx[i]=this.rootx[i];
		this.heady[i]=canHeight-250+Math.random()*50;
		this.amp[i]=Math.random()*50+70; //[100,150)
	} 
}
aneObj.prototype.draw=function(){
	ctx2.save();
	ctx2.globalAlpha=0.4;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e"; 
	this.alpha+=detalTime*0.0008;
	var l=Math.sin(this.alpha);
	for(var i=0;i<this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i]=this.rootx[i]+l*this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]); 
		ctx2.stroke();   
	}  
	ctx2.restore();
}
