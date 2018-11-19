$(document).ready(function(){
	

	
/*#####
#######
#######首页焦点图
######*/	
	var trnowindex=0;
	$("#trmeau li").eq(0).animate({opacity:"1"});//初始化显示
      $("#trmeau li").eq(0).siblings().animate({opacity:"0.4"}); 
	$("#trmeau li").mouseover(
		 function(){//手动方法
		  $(this).stop().animate({opacity:"1"});
		  $(this).siblings().stop().animate({opacity:"0.4"});
		  trnowindex= $("#trmeau li").index(this);
		   $("#trimg ul li").eq(trnowindex).siblings().animate({width:"0px"},"500");
		  $("#trimg ul li").eq(trnowindex).animate({width:$("#trimg ul li").find("img").width()},"500");
		 
		})
	 $("#trmeau li").mouseout(function(){try{aslidemeth=setInterval(function(){aslidemeth},3000)}catch(err){}});
	 
	 
	//自动切换
	var setSlideauto=function(){
		var maxslideindex=$("#trimg li").size();
		 $("#trmeau li").eq(trnowindex).animate({opacity:"1"});
		 $("#trmeau li").eq(trnowindex).siblings().animate({opacity:"0.4"});
		 $("#trimg ul li").eq(trnowindex).siblings().animate({width:"0px"},"500");
		 $("#trimg ul li").eq(trnowindex).animate({width:$("#trimg ul li").find("img").width()},"500");
		 trnowindex++;
		 trnowindex=trnowindex>=maxslideindex?0:trnowindex;
		}
	var aslidemeth=setInterval(setSlideauto,5000);//初始化定时器
	
	


});

