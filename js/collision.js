/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-26 18:21:12
 * @version $Id$
 */
 //判断每个果实和大鱼的距离
 function momFruitCollision(){
 	if(!data.gameOver){
 		for(var i=0;i<fruit.num;i++){
	 		if(fruit.alive[i]){
	 			var l=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y); //注意是个平方值
	 			if(l<900){
	 				fruit.dead(i);
	 				data.fruitNum++;
	 				//大鱼身体变化
	 				mom.momBodyCount++;
	 				if(mom.momBodyCount>7){
	 					mom.momBodyCount=7;
	 				}

	 				//如果迟到蓝色果实
	 				if(fruit.fruitType[i]=="blue"){
						data.double=2;
	 				}

	 				wave.born(fruit.x[i],fruit.y[i]);
	 			}
	 		}
	 	}
	 } 
 }
 //大鱼小鱼的碰撞
 function momBabyCollision(){
 	if(!data.gameOver){
 		if(data.fruitNum>0){
	 		var l=calLength2(mom.x, mom.y,baby.x,baby.y);
		 	if(l<900){
		 		baby.babyBobyCount=0; 
		 		mom.momBodyCount=0;
		 		//计算分数
		 		data.addSore();
		 		halo.born(baby.x,baby.y);
		 	}
		 } 
 	} 
 }

