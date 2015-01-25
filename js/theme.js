	$(document).ready(function(){
		var head=$("#head").height();
		var navf=$("#navf");
		$(window).scroll(function(){
			if($(window).scrollTop()>head){
				navf.addClass("scrollnav");
			}else{
				navf.removeClass("scrollnav");
			}
		});

	$("#nav ul li").mouseover(function(){
		//this是當年屬性//find是查找哪一個元素
		$(this).find(".menu").show();//顯示
		$(this).find("a.mainnva").addClass("bg");//當找到a標籤就增加
	}).mouseout(function(){
		$(this).find(".menu").hide();
		$(this).find("a.mainnva").removeClass("bg");//移除
	});	

	$("#fans ul li").mouseover(function(){
		//this是當年屬性//find是查找哪一個元素
		$(this).find(".iconmain").show();//顯示
		//$(this).find("a.mainnva").addClass("bg");//當找到a標籤就增加
	}).mouseout(function(){
		$(this).find(".iconmain").hide();
		//$(this).find("a.mainnva").removeClass("bg");//移除
	});		

	$(function(){
		 $("#btn").hide();
		showScroll();
		function showScroll(){
			$(window).scroll( function() { 
				var scrollValue=$(window).scrollTop();
				scrollValue > 100 ? $("#btn").fadeIn():$("#btn").fadeOut();
			} );	
			$("#btn").click(function(){
				$("html,body").animate({scrollTop:0},200);	
			});	
		}
	})

	var index=0;//初始化序列號
	var play=null;
	$(".button li").mouseover(function(){
		clearInterval(play);//清除定時器
		index=$(this).index();//獲取到序列號
		$(this).addClass("hover").siblings().removeClass("hover");//siblings()查找li同等級其他li元素
		$("#imgs a").eq(index).show().siblings("a").hide();//eq()查找跟他序列號相同的號碼
	}).mouseout(function(){
		autoPlay();
	});

	function autoPlay(){
		//設置定時器
		play=setInterval(function(){
			index++;
			if(index>4){
				index=-1;
			}else{
				$(".button li").eq(index).addClass("hover").siblings().removeClass("hover");
				$("#imgs a").eq(index).show().siblings("a").hide();
			}
		},3000);//setInterval定時器

	}
	autoPlay();
	var len=$("#imgs a").length;
	//左按扭
	$(".butl").click(function(){
		index -= 1;
		if(index == -1) {index = len - 1;};
		$("#imgs a").eq(index).fadeIn().siblings().hide();
		$(".button li").eq(index).addClass("hover").siblings().removeClass("hover");
	});
	
	//右按扭
	$(".butr").click(function(){
		index += 1;
		if(index == len) {index = 0;};
		$("#imgs a").eq(index).fadeIn().siblings().hide();
		$(".button li").eq(index).addClass("hover").siblings().removeClass("hover");

	});

});