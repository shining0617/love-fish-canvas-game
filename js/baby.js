/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-26 18:36:25
 * @version $Id$
 */
var babyObj=function(){
	this.x;
	this.y;
	this.angle;  
	this.babyTailTimer=0;
	this.babyTailCount=0;

	this.babyEyeTimer=0;//定义一个时间的计数器
	this.babyEyeCount=0;//时间的控制器，定义执行到哪一帧了
	this.babyEyeInterval=1000;//时间间隔的变量，表示当前这张图片需要持续多长时间

	this.babyBobyTimer=0;
	this.babyBobyCount=0;
}
babyObj.prototype.init= function(){
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50; 
	this.angle=0;  
}
babyObj.prototype.draw= function(){ 
	//小鱼尾巴摇摆
	this.babyTailTimer+=detalTime;
	if(this.babyTailTimer>50){
		this.babyTailCount=(this.babyTailCount+1)%7; //%7可取值到0-7
		this.babyTailTimer%=50;
	}
	//小鱼眨眼
	this.babyEyeTimer+=detalTime;
	if(this.babyEyeTimer>this.babyEyeInterval){
		//提醒执行下一帧
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		//恢复到当前的计时器
		this.babyEyeTimer%=this.babyEyeInterval;
		if(this.babyEyeCount==0){
			this.babyEyeInterval=Math.random()*1500+2000;
		}else{
			this.babyEyeInterval=200;
		}
	}
	//小鱼身体变色
	this.babyBobyTimer+=detalTime;
	if(this.babyBobyTimer>300){
		this.babyBobyCount=this.babyBobyCount+1;
		this.babyBobyTimer%=300;
		if(this.babyBobyCount>19){
			this.babyBobyCount=19;
			//game over
			data.gameOver=true;
		}
	}
	//绘制小鱼
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);
	var deltaY=mom.y-this.y;
	var deltaX=mom.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+ Math.PI;//k返回值是-PI~PI的范围
	this.angle=lerpAngle(beta, this.angle, 0.6); 
	ctx1.save();
	ctx1.translate(this.x,this.y); 
	ctx1.rotate(this.angle);
	var babyTailCount=this.babyTailCount;
	var babyEyeCount=this.babyEyeCount;//临时变量
	var babyBodyCount=this.babyBobyCount;//临时变量
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+23,-babyTail[babyTailCount].height*0.5); 
  	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
  	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
  	ctx1.restore();
}

