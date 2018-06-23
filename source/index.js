$(function(){
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
	})
	$("#main1_banner #list_1").hover(function(){
		$(".main1_list1").show();
	},function(){
		$(".main1_list1").hide();
		
	})
	$("#main1_banner #list_2").hover(function(){
		$(".main1_list2").show();
	},function(){
		$(".main1_list2").hide();
		
	});
	
	var num=0;
	var timer=null;
	
	timer = setInterval(function(){
		
		foo();
			
		},5000)

function foo(){
			num++;
			
		var left1=num*($("#main1_scrollbanner_warp img").width());
		if(num>=4){
			$("#main1_scrollbanner_warp")
			.animate({"left":-left1},800,function(){
				$("#main1_scrollbanner_warp").css("left",0)
			})
				num=0;
				
			}else{
			$("#main1_scrollbanner_warp")
			.animate({"left":-left1},800)
			}
		}
    $("#main1_scrollbanner_warp img").mouseover(function(){
			clearInterval(timer);
		})
		$("#main1_scrollbanner_warp img").mouseout(function(){
			timer = setInterval(function(){
		
		foo();
			
		},5000)
		})

   $("#new_2").hover(function(){
           $("#login_hide").show();
           $("#login_show").hide();
          
           
   })
$("#new_1").hover(function(){
           $("#login_show").show();
           $("#login_hide").hide();
           
   })
});
	
	

