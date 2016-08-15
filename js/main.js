/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-26 11:03:13
 * @version $Id$
 */
var can1;
var can2;
var ctx1;
var ctx2;

var lastTime;//上一帧的被执行完的时间
var detalTime;//两帧间隔的时间差

var bgPic=new Image();
var canWidth;
var canHeight;
var ane;
var fruit;
var mom;
var mx;
var my;
var baby;
var babyTail=[];
var babyEye=[];
var babyBody=[];
var momTail=[];
var momEye=[];
var momBodyOra=[];
var momBodyBlue=[];
var data;
var wave;
var halo;
var dust;
var dustPic=[];
document.body.onload=game;
function game(){
	 init();
	 lastTime=Date.now();//当前时间
	 detalTime=0;
	 gameloop();
}
function init(){
	//获得canvas的场景画笔
	can1=document.getElementById("canvas1");//绘制鱼,dust,ui,圆圈
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");//绘制背景,海葵,水果
	ctx2=can2.getContext("2d");
	bgPic.src="./src/background.jpg";//注意路径是./不是../
	canWidth=can1.width;
	canHeight=can1.height; 

	ane=new aneObj();
	ane.init();

	fruit=new fruitObj();
	fruit.init();

	mom=new momObj();
	mom.init();

	baby=new babyObj();
	baby.init();

	mx=canWidth/2;
	my=canHeight/2;

	can1.addEventListener("mousemove", onMouseMove);

 	for(var i=0;i<8;i++){
		babyTail[i]=new Image();
		babyTail[i].src="./src/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		babyEye[i]=new Image();
		babyEye[i].src="./src/babyEye"+i+".png";
	}
	for(var i=0;i<20;i++){
		babyBody[i]=new Image();
		babyBody[i].src="./src/babyFade"+i+".png";
	}
	for(var i=0;i<8;i++){
		momTail[i]=new Image();
		momTail[i].src="./src/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		momEye[i]=new Image();
		momEye[i].src="./src/bigEye"+i+".png";
	} 
	data=new dataObj();
	for(var i=0;i<8;i++){
		momBodyOra[i]=new Image(); 
		momBodyBlue[i]=new Image();
		momBodyOra[i].src="./src/bigSwim"+i+".png"; 
		momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";
	}

	ctx1.font="30px Verdana";
    ctx1.textAlign="center"; 

    wave=new waveObj();
    wave.init();

    halo=new haloObj();
    halo.init();

    
    for(var i=0;i<7;i++){
		dustPic[i]=new Image();  
		dustPic[i].src="./src/dust"+i+".png";  
	}
	dust=new dustObj();
    dust.init();
}

//动画动起来
function gameloop(){
 	ctx2.clearRect(0,0,canWidth,canHeight);
 	ctx1.clearRect(0,0,canWidth,canHeight);
	window.requestAnimationFrame(gameloop);// frame per second 时间间隔是不一样的，是计算机智能计算的
	var now=Date.now();
	detalTime=now-lastTime;
	lastTime=now;
	if(detalTime>40)detalTime=40;

	drawBarckground(); 
	ane.draw();
	fruitMonitor();
	fruit.draw(); 
	mom.draw(); 
	momFruitCollision();
	baby.draw();
	momBabyCollision();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offSetX || e.layerX){
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY; 
		}
	} 
}