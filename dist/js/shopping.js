"use strict";

$(function () {
	//生成猜你喜欢的商品
	(function () {
		var gwc_list = document.getElementById("gwc_list");
		var strs1 = "";
		for (var con = 0; con < 3; con++) {
			strs1 += "\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><dl>\n\t\t\t\t\t\t<dt><img src=\"../imgs/cont1.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u5168\u81EA\u52A8\u96E8\u4F1E \u7537\u58EB\u5546\u52A1\u6298\u53E0\u4F1E\u5927\u53F7\u53CC\u4EBA\u4E09\u6298\u6210\u4EBA\u7537\u5973\u81EA\u5F00\u81EA\u6536</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE518.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><img src=\"../imgs/cont.jpg\"/></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><dl>\n\t\t\t\t\t\t<dt><img src=\"../imgs/cont2.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u6CF0\u8FEA\u91D1\u6BDB\u5BA0\u7269\u6E7F\u7CAE\u7F8E\u6BDB\u5065\u80A4\u72D7\u96F6\u98DF375g</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE51188.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t";
		}
		gwc_list.innerHTML = strs1;
	})();

	(function () {
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?", { userID: $.cookie("username") }, function (data) {
			console.log(data);
			var str = "";
			$.each(data, function (index, item) {
				str += "\n\t\t\t\t\t\t\t\n\t\t\t\t<div class=\"gwc_ct\">\n\t\t\t\t\t<input type=\"checkbox\" name=\"\" id=\"check2\" value=\"\" />\n\t\t\t\t\t\n\t\t\t\t\t\t<a href=\"details.html?id=" + item.goodsID + "\"><dl class=\"gwc_ct_list\">\n\t\t\t\t\t\t\t<dt><img src=\"" + item.goodsListImg + "\"/></dt>\n\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<span id=\"ming\">\u5546\u54C1\u7C7B\u578B: " + item.className + "</span>\n\t\t\t\t\t\t\t<p> " + item.goodsName + "</p>\n\t\t\t\t\t\t\t\t<p>\u652F\u63017\u5929\u65E0\u7406\u7531\u9000\u8D27</p>\n\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t<dd><p>\u989C\u8272\uFF1A\u6DF1\u84DD\u82721791\u5E38\u89C4</p>\n\t\t\t\t\t\t\t\t<p>\u5C3A\u7801\uFF1AL</p>\n</dd>\n\t\t\t\t\t\t</dl></a>\n\t\t\t\t    <p class=\"gwc_ct_d1\">\uFFE5<span class=\"gcd1\">" + item.price + ".00</span></p>\n\t\t\t\t    <div class=\"gwc_ctsl\">\n\t\t\t\t    \t<input type=\"button\" id=\"gwc_jian\" value=\"-\" />\n\t\t\t\t    \t<input type=\"text\" name=\"\" id=\"gwc_shu\" value=\"" + item.number + "\" disabled=\"disabled\"/>\n\t\t\t\t    \t<input type=\"button\" id=\"gwc_jia\" value=\"+\" />\n\t\t\t\t    </div>\n\t\t\t\t    <p class=\"gwc_ct_z1\">\uFFE5<span class=\"gcz1\">" + item.price + ".00</span></p>\n\t\t\t\t    <span class=\"gwc_sc1\" goodsID=\"" + item.goodsID + "\">\n\t\t\t\t    \t\u5220\u9664\n\t\t\t\t    </span>\n\t\t\t\t</div>\n\t\t\t\t";
			});
			$(".gwc_content1").html(str);

			//			点击删除商品
			$(".gwc_sc1").click(function () {

				var id = $(this).attr("goodsID");
				//console.log(id);
				$(this).parent().remove();
				$.get(" http://datainfo.duapp.com/shopdata/updatecar.php", { userID: $.cookie("username"), goodsID: id, number: 0 });
			});
		});
	})();

	//判断显示用户登录信息
	var strloga = "<a href='login.html'>你好，请登录</a>";
	var strlogb = "<a href='register.html'>注册</a>";
	if ($.cookie('username') != undefined) {
		var strlog1 = "<span>你好，</span>";
		var strlog2 = "<a href=''>退出登录</a>";

		$(".login_11").html(strlog1);
		$(".login_22").html(strlog2);
		$('.login_22').find("a").click(function () {
			$(this).html(strlogb);
			$(".login_11").html(strloga);
			$.cookie('username', null, { expires: -1, path: "/" });
		});
	}
});