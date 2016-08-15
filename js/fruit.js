/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-26 14:53:25
 * @version $Id$
 */
//定义个类，类里面控制数组，控制很多的果实
var fruitObj=function(){
	this.alive=[]; //bool
	this.orange=new Image();
	this.blue=new Image();
	this.x=[];
	this.y=[];
	this.l=[];//表示图片的长度
	this.spd=[];
	this.fruitType=[];
	this.aneNo=[];
}
fruitObj.prototype.num= 30;
fruitObj.prototype.init= function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;//每个果实都是活着的
		this.x[i]=0;
		this.y[i]=0; 
		this.aneNo[i]=0; 
		this.spd[i]=Math.random()*0.017+0.003;  
		this.fruitType[i]="";
		this.born(i);
	} 
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png"; 
}

fruitObj.prototype.born= function(i){//随机找一个海葵
	 this.aneNo[i]=Math.floor(Math.random()*ane.num); 
	 this.l[i]=0;
	 this.alive[i]=true;  
	 var ran=Math.random();
	 if(ran<0.2){
	 	this.fruitType[i]="blue";
	 }else{
	 	this.fruitType[i]="orange";
	 }
}
fruitObj.prototype.draw= function(){
	 for(var i=0;i<this.num;i++){
	 	if(this.alive[i]){ 
 			if(this.fruitType[i]=="blue"){
 				var pic=this.blue;
 			}else{
 				var pic=this.orange;
 			}
	 		if(this.l[i]<14){
	 			this.x[i]=ane.headx[this.aneNo[i]];
	 			this.y[i]=ane.heady[this.aneNo[i]];
 			 	this.l[i]+=this.spd[i]*detalTime;//用到随时间变化的变量时一定要用时间间隔，使得过程变得平滑
		 	}else{
		 		this.y[i]-=this.spd[i]*7*detalTime;
		 	}
			ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
	 		if(this.y[i]<10){
				this.alive[i]=false;
			}
	 	} 
	}

}
fruitObj.prototype.dead= function(i){
	this.alive[i]=false;
}



//判断屏幕上有多少个果实是活着的,是不再继承类的函数
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;
		} 
	}
	if(num<15){
		//如果数量小于15就长出一个果实 
		sendFruit(); 
		return;
	}

}

//长出一个果实
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;//一个果实
		}
	}
} 