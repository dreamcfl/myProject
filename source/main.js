
//公共内容

$(function(){
	
		//头部header滑动出现效果
	$("#header_left").hover(function(){
		$("#header_left_box").show();
	},function(){
		$("#header_left_box").hide();
	})
	$("#header_list1").hover(function(){
		$("#header_1").show();
	},function(){
		$("#header_1").hide();
	})
	$("#header_list2").hover(function(){
		$("#header_2").show();
	},function(){
		$("#header_2").hide();
	})
	$("#header_list3").hover(function(){
		$("#header_3").show();
	},function(){
		$("#header_3").hide();
	})
	$("#header_list4").hover(function(){
		$("#header_4").show();
	},function(){
		$("#header_4").hide();
	})
	$("#header_list5").hover(function(){
		$("#header_5").show();
	},function(){
		$("#header_5").hide();
	});
	
		
		//滑动出现
		(function(){
		$(window).scroll(function(){
					if($(this).scrollTop()>800){
						$(".top_xian").fadeIn();
					}else{
						$(".top_xian").fadeOut();
						
					}
	})
		})();
		
		
		
		
		
		
		
		
		//回到顶部
		(function(){
			$(".scroll_ding").click(function(){
				$("html,body").animate({scrollTop:0},1500);
			
			})
		
			
		})();
		
		//滑动出现
		
		(function(){
			$(".scroll_ce div").hover(function(){
				var index=$(this).index();
				$(".scroll_ce div")
				.eq(index).find("strong")
				.stop().animate({left:'-65px'},400).show();
			
			},function(){
				var index=$(this).index();
				$(".scroll_ce div")
				.eq(index).find("strong")
				.stop().animate({left:'0'},400).hide();
			})
		
			
		})();
		//回到顶部滑动出现
		(function(){
			$(".scroll_ding").hover(function(){
				var index=$(this).index();
				$(this).find("strong")
				.show()
				.stop().animate({left:'-65px'},400);
			
			},function(){
				$(this).find("strong")
				.stop().animate({left:'0'},400).hide();
			})
		
			
		})();
		//问题反馈出现
		(function(){
			$(".scroll_fan").hover(function(){
				var index=$(this).index();
				$(this).find("strong")
				.show()
				.stop().animate({left:'-65px'},400);
			
			},function(){
				$(this).find("strong")
				.stop().animate({left:'0'},400).hide();
			})
		
			
		})();
		
	//出现购物篮及隐藏
	(function(){
		
		$("#gunabi").click(function(){
			$(".gwc_xian").stop().animate({left:"35px"},800)
			
			
		})
		
		$(".scroll_ce2").click(function(){
			$(".gwc_xian").stop().animate({left:"-220px"},800)
			
			
		})
		
		
		
		
		
	})();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
