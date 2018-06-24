"use strict";

$(function () {
	//头部header滑动出现效果
	$("#header_left").hover(function () {
		$("#header_left_box").show();
	}, function () {
		$("#header_left_box").hide();
	});
	$("#header_list1").hover(function () {
		$("#header_1").show();
	}, function () {
		$("#header_1").hide();
	});
	$("#header_list2").hover(function () {
		$("#header_2").show();
	}, function () {
		$("#header_2").hide();
	});
	$("#header_list3").hover(function () {
		$("#header_3").show();
	}, function () {
		$("#header_3").hide();
	});
	$("#header_list4").hover(function () {
		$("#header_4").show();
	}, function () {
		$("#header_4").hide();
	});
	$("#header_list5").hover(function () {
		$("#header_5").show();
	}, function () {
		$("#header_5").hide();
	});
	$("#main1_banner #list_1").hover(function () {
		$(".main1_list1").show();
	}, function () {
		$(".main1_list1").hide();
	});
	$("#main1_banner #list_2").hover(function () {
		$(".main1_list2").show();
	}, function () {
		$(".main1_list2").hide();
	});
	//banner轮播功能
	var num = 0;
	var timer = null;

	timer = setInterval(function () {

		foo();
	}, 5000);

	function foo() {
		num++;

		var left1 = num * $("#main1_scrollbanner_warp img").width();

		if (num >= 4) {
			$("#main1_scrollbanner_warp").animate({ "left": -left1 }, 800, function () {
				$("#main1_scrollbanner_warp").css("left", 0);
			});
			num = 0;
		} else {
			$("#main1_scrollbanner_warp").stop().animate({ "left": -left1 }, 800);
		}
		$(".main1_scrollbanner_nav li").eq(num).addClass("select").siblings().removeClass("select");
	}
	$("#main1_scrollbanner").mouseover(function () {
		clearInterval(timer);
		$(".btn1").show();
	});
	$("#main1_scrollbanner").mouseout(function () {
		$(".btn1").hide();
		timer = setInterval(function () {

			foo();
		}, 5000);
	});
	$(".pre").click(function () {
		num -= 1;
		foo();
	});
	$(".next").click(function () {
		foo();
	});

	//滑动换内容
	$("#new_2").hover(function () {
		$("#login_hide").show();
		$("#login_show").hide();
		$("#main1_login_center a").css("border-bottom", "none");
		$(this).css("border-bottom", "2px solid red");
	});
	$("#new_1").hover(function () {
		$("#login_show").show();
		$("#login_hide").hide();
		$("#main1_login_center a").css("border-bottom", "none");
		$(this).css("border-bottom", "2px solid red");
	});
	//第二个小轮播透明度
	var timer1 = 0;
	var num1 = 0;
	timer1 = setInterval(function () {
		foo1();
	}, 4000);

	function foo1() {
		if (num1 == 0) {
			$("#main1_center1_right ul").find("li").stop().animate({ opacity: 1 }, 1000);
			$("#main1_center1_right ul").find("li").eq(0).stop().animate({ opacity: 0 }, 1000);
			num1 = 1;
		} else {
			$("#main1_center1_right ul").find("li").css("opacity", 1);
			$("#main1_center1_right ul").find("li").eq(1).stop().animate({ opacity: 0 }, 1000);
			num1 = 0;
		}
	}
	$("#main1_center1_right ul").mouseover(function () {
		clearInterval(timer1);
	});
	$("#main1_center1_right ul").mouseout(function () {
		timer1 = setInterval(function () {

			foo1();
		}, 4000);
	});

	(function () {
		function ftimer() {

			var Odate = new Date(); //获取当前时间
			var Odate1 = new Date("2018-7-7 9:00:00"); //获取一个未来时间  获取方式和规范

			var t2 = Odate1 - Odate; ///得到时间差
			var t1 = t2 / 1000; ///将毫秒转化为秒
			//				var Oday =  Math.floor(t1/3600/24);//天数
			var Ohours = Math.floor(t1 / 3600 / 24); //小时
			var Omiunties = Math.floor(t1 / 60 % 60); //分钟
			var Oseconds = Math.floor(t1 % 60); //秒
			//console.log(Omiunties);
			//				if(Oday<10){
			//					Oday = "0"+Oday;     //将他们转化为字符串
			//				}else{
			//					Oday = ""+Oday;
			//				}
			if (Ohours < 10) {
				Ohours = "0" + Ohours;
			} else {
				Ohours = "" + Ohours;
			}
			if (Omiunties < 10) {
				Omiunties = "0" + Omiunties;
			} else {
				Omiunties = "" + Omiunties;
			}
			if (Oseconds < 10) {
				Oseconds = "0" + Oseconds;
			} else {
				Oseconds = "" + Oseconds;
			}
			var newdate = Ohours + Omiunties + Oseconds;
			var seckill_box1 = document.getElementById("seckill_box1");
			var seckill_box2 = document.getElementById("seckill_box2");
			var seckill_box3 = document.getElementById("seckill_box3");
			seckill_box1.innerHTML = newdate[0] + newdate[1];
			seckill_box2.innerHTML = newdate[2] + newdate[3];
			seckill_box3.innerHTML = newdate[4] + newdate[5];

			if (timer <= 0) {
				clearInterval(tstant);
			}
		}

		ftimer();

		var tstant = setInterval(ftimer, 1000);
	})();
	//		滑动换页效果2
	$(".bb1").hover(function () {
		$(".mcbb1").show();
		$(".mcbb2").hide();
		$(".bb11").css("background", "#fff");
		$(this).css("background", "#eb3436");
	});

	$(".bb2").hover(function () {
		$(".mcbb2").show();
		$(".mcbb1").hide();
		$(".bb11").css("background", "#fff");
		$(this).css("background", "#eb3436");
	});

	$(".mcb li a").hover(function () {
		$(".mcb li a").attr("class", "");
		$(this).attr("class", "red");
	});

	//第三个轮播图	
	(function () {
		var num2 = 0;
		var timer2 = null;

		timer2 = setInterval(function () {

			foo2();
		}, 3000);

		function foo2() {
			num2++;

			var left2 = num2 * $(".main1_center2_scroll_box li").width();

			if (num2 >= 3) {
				$(".main1_center2_scroll_box").animate({ "left": -left2 }, 800, function () {
					$(".main1_center2_scroll_box").css("left", 0);
				});
				num2 = 0;
			} else {
				$(".main1_center2_scroll_box").stop().animate({ "left": -left2 }, 800);
			}

			$(".main1_center2_scroll_nav li").eq(num2).addClass("select").siblings().removeClass("select");
		}
		$(".mcss1").mouseover(function () {
			clearInterval(timer2);
			$(".btn1").show();
		});
		$(".mcss1").mouseout(function () {
			$(".btn1").hide();
			timer2 = setInterval(function () {

				foo2();
			}, 3000);
		});
		$(".pre").click(function () {
			num2 -= 1;
			foo2();
		});
		$(".next").click(function () {
			foo2();
		});
	})();
	//滑动换页3
	$(".cc1").hover(function () {
		$(".mcr1").show();
		$(".mcr2").hide();
		$(".cc11").css("background", "#fff");
		$(this).css("background", "#eb3436");
	});

	$(".cc2").hover(function () {
		$(".mcr2").show();
		$(".mcr1").hide();
		$(".cc11").css("background", "#fff");
		$(this).css("background", "#eb3436");
	});
	//第四个轮播	
	(function () {
		var num3 = 0;
		var timer3 = null;

		timer3 = setInterval(function () {
			foo3();
		}, 4000);

		function foo3() {
			num3++;

			var left3 = num3 * $(".main1_center2_scroll_box1 li").width();

			if (num3 >= 3) {

				$(".main1_center2_scroll_box1").animate({ "left": -left3 }, 800, function () {
					$(".main1_center2_scroll_box1").css("left", 0);
				});
				num3 = 0;
			} else {
				$(".main1_center2_scroll_box1").stop().animate({ "left": -left3 }, 800);
			}

			$(".main1_center2_scroll_nav1 li").eq(num3).addClass("select").siblings().removeClass("select");
		}
		$(".mcss2").mouseover(function () {
			clearInterval(timer3);
			$(".btn1").show();
		});
		$(".mcss2").mouseout(function () {
			$(".btn1").hide();
			timer3 = setInterval(function () {

				foo3();
			}, 4000);
		});
		$(".pre").click(function () {
			num3 -= 1;
			foo3();
		});
		$(".next").click(function () {
			foo3();
		});
	})();
});