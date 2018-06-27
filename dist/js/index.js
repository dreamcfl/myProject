"use strict";

$(function () {

	(function () {

		$.ajax({
			type: "get",
			url: "https://dc.3.cn/category/get?callback=?",
			dataType: "jsonp",
			scriptCharset: "gb2312",
			success: function success(res) {

				//console.log(res);

				var $ul = $('.lists');

				for (var i = 0; i < res.data.length; i++) {
					var menu = res.data[i];

					var $li = $('<li class="list"></li>');
					$ul.append($li);

					//创建二级目录

					var $secondMenuDiv = $('<div class="box"></div>');
					$li.append($secondMenuDiv);

					//二级目录 顶部
					var $topP = $('<p></p>');
					$secondMenuDiv.append($topP);
					for (var n = 0; n < menu.t.length; n++) {
						var tmpArray = menu.t[n].split('|'); //jiadian.jd.com/|家电馆||0
						var _$span = $('<a class="tips" href=""></a>');
						_$span.html(tmpArray[1]);
						$topP.append(_$span);
						var $TmpA = $('<span>&gt;</span>');
						_$span.append($TmpA);
					}

					//一级目录  家用电器  jiadian.jd.com|家用电器||0
					for (var j = 0; j < menu.s.length; j++) {
						if (j >= 1) {
							var $tmp = $('<span class="fgx">/</span>');
							$li.append($tmp);
						}
						var str = menu.s[j].n;
						var firstMenuName = str.split('|')[1];
						var $firstMenuSpan = $('<a class="menu" href=""></a>');
						$firstMenuSpan.html(firstMenuName);
						$li.append($firstMenuSpan);

						//二级目录的第 2,3,4,5,6行

						for (var m = 0; m < menu.s[j].s.length; m++) {
							var $secondP = $('<p></p>');
							$secondMenuDiv.append($secondP);

							//每行的标题
							var obj = menu.s[j].s[m];
							var title = obj.n.split('|')[1];
							var $span = $('<a class="title" href=""></a>');
							$span.html(title);
							$secondP.append($span);

							var $tmpA = $('<span>&gt;</span>');
							$span.append($tmpA);

							//二级目录 每行的内容
							var $tagsDiv = $('<a class="tags" href=""></a>');
							$secondP.append($tagsDiv);
							for (var k = 0; k < obj.s.length; k++) {
								var secondContentObj = obj.s[k];
								var _title = secondContentObj.n.split('|')[1];
								var _$span2 = $('<a class="tag" href=""></a>');
								_$span2.html(_title);
								$tagsDiv.append(_$span2);
							}
						}

						//二级目录 后面的图片
						var $imgBoxDiv = $('<div class="imgBox"></div>');
						$secondMenuDiv.append($imgBoxDiv);
						for (var h = 0; h < menu.b.length; h++) {
							var src = '//img10.360buyimg.com/' + menu.b[h].split('|')[2];
							var $img = $('<img/>');
							$img.attr('src', src);
							$imgBoxDiv.append($img);
						}
					}
				}
			}
		});
	})();

	(function () {
		$("#search_btn").click(function () {

			if ($("#seach_text").val() != "") {
				location.href = "html/list.html";
			}
		});
	})();

	//右内容更换出现效果
	$("#main1_banner li").hover(function () {
		var index = $(this).index();
		$(this).find("div").show();
		//$(".main1_list1").show();
	}, function () {
		var index = $(this).index();
		$(this).find("div").hide();

		//$(".main1_list1").hide();
	});
	//	$("#main1_banner #list_2").hover(function(){
	//		$(".main1_list2").show();
	//	},function(){
	//		$(".main1_list2").hide();
	//		
	//	});
	//banner轮播功能
	var num = 0;
	var timer = null;

	timer = setInterval(function () {

		foo();
	}, 5000);

	function foo() {
		num++;

		var left1 = $("#main1_scrollbanner_warp img").width();
		if (num == 5) {

			num = 1;
			$("#main1_scrollbanner_warp").css("left", 0);
		}
		if (num == -1) {
			num = 3;
			$("#main1_scrollbanner_warp").css("left", -left1 * (num + 1));
		}

		$("#main1_scrollbanner_warp").stop().animate({ "left": -left1 * num }, 800);
		if (num == 4) {
			$(".main1_scrollbanner_nav li").eq(0).addClass("select").siblings().removeClass("select");
		} else {
			$(".main1_scrollbanner_nav li").eq(num).addClass("select").siblings().removeClass("select");
		}
	}
	$("#main1_scrollbanner").mouseover(function () {
		clearInterval(timer);
		$(".btn").show();
	});
	$("#main1_scrollbanner").mouseout(function () {
		$(".btn").hide();
		timer = setInterval(function () {

			foo();
		}, 5000);
	});
	$(".pre").click(function () {
		num -= 2;
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

			var left2 = $(".main1_center2_scroll_box li").width();

			if (num2 == 4) {
				num2 = 1;
				$(".main1_center2_scroll_box").css("left", 0);
			}

			if (num2 == -1) {
				num2 = 2;
				$(".main1_center2_scroll_box").css("left", -left2 * (num2 + 1));
			}

			$(".main1_center2_scroll_box").stop().animate({ "left": -left2 * num2 }, 800);
			if (num2 == 3) {
				$(".main1_center2_scroll_nav li").eq(0).addClass("select").siblings().removeClass("select");
			} else {

				$(".main1_center2_scroll_nav li").eq(num2).addClass("select").siblings().removeClass("select");
			}
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
		$(".pre1").click(function () {
			num2 -= 2;
			foo2();
		});
		$(".next1").click(function () {
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

			var left3 = $(".main1_center2_scroll_box1 li").width();

			if (num3 == 4) {
				num3 = 1;

				$(".main1_center2_scroll_box1").css("left", 0);
			}if (num3 == -1) {
				num3 = 2;
				$(".main1_center2_scroll_box1").css("left", -left3 * (num3 + 1));
			}

			$(".main1_center2_scroll_box1").stop().animate({ "left": -left3 * num3 }, 800);
			if (num3 == 3) {
				$(".main1_center2_scroll_nav1 li").eq(0).addClass("select").siblings().removeClass("select");
			} else {

				$(".main1_center2_scroll_nav1 li").eq(num3).addClass("select").siblings().removeClass("select");
			}
		}
		$(".mcss2").mouseover(function () {
			clearInterval(timer3);
			$(".btn2").show();
		});
		$(".mcss2").mouseout(function () {
			$(".btn2").hide();
			timer3 = setInterval(function () {

				foo3();
			}, 4000);
		});
		$(".pre2").click(function () {
			num3 -= 2;
			foo3();
		});
		$(".next2").click(function () {
			foo3();
		});
	})();

	//第五个轮播	
	(function () {
		var num4 = 0;
		var timer4 = null;

		timer4 = setInterval(function () {
			foo4();
		}, 4500);

		function foo4() {
			num4++;

			var left4 = $(".main_scroll_wrap ul").width();

			if (num4 == 5) {
				num4 = 1;
				$(".main_scroll_wrap").css("left", 0);
			}if (num == -1) {
				num4 = 3;
				$(".main_scroll_wrap").css("left", -left4 * (num4 + 1));
			}
			$(".main_scroll_wrap").stop().animate({ "left": -left4 * num4 }, 800);

			if (num4 == 4) {
				$(".main1_scrollbanner_nav3 li").eq(0).addClass("select").siblings().removeClass("select");
			} else {
				$(".main1_scrollbanner_nav3 li").eq(num4).addClass("select").siblings().removeClass("select");
			}
		}
		$(".main5_scroll").mouseover(function () {
			clearInterval(timer4);
		});
		$(".main5_scroll").mouseout(function () {

			timer4 = setInterval(function () {

				foo4();
			}, 4500);
		});
	})();

	//生成商品列表
	(function () {
		var main6content = document.getElementById("main6_content");
		var strcon = "";
		for (var con = 0; con < 10; con++) {
			strcon += "\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><dl>\n\t\t\t\t\t\t<dt><img src=\"imgs/cont1.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u5168\u81EA\u52A8\u96E8\u4F1E \u7537\u58EB\u5546\u52A1\u6298\u53E0\u4F1E\u5927\u53F7\u53CC\u4EBA\u4E09\u6298\u6210\u4EBA\u7537\u5973\u81EA\u5F00\u81EA\u6536</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE518.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><img src=\"imgs/cont.jpg\"/></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><dl>\n\t\t\t\t\t\t<dt><img src=\"imgs/cont2.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u6CF0\u8FEA\u91D1\u6BDB\u5BA0\u7269\u6E7F\u7CAE\u7F8E\u6BDB\u5065\u80A4\u72D7\u96F6\u98DF375g</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE51188.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t";
		}
		main6content.innerHTML = strcon;
	})();

	(function () {

		$.get("http://datainfo.duapp.com/shopdata/getclass.php", function (data) {
			data = JSON.parse(data);
			console.log(data);
			var str = "";
			$.each(data, function (index, item) {
				str += "<a href=\"html/list.html?classID=" + item.classID + "\">" + item.className + "</a>";
			});
			$(".main7_content").html(str);
		});
	})();
});