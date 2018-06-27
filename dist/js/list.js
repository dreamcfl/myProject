"use strict";

$(function () {
	//生成展示的商品
	(function () {
		var gwc_list = document.getElementById("gwc_list");
		var strs1 = "";
		for (var con = 0; con < 2; con++) {
			strs1 += "\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"details.html\"><dl>\n\t\t\t\t\t\t<dt><img src=\"../imgs/cont1.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u5168\u81EA\u52A8\u96E8\u4F1E \u7537\u58EB\u5546\u52A1\u6298\u53E0\u4F1E\u5927\u53F7\u53CC\u4EBA\u4E09\u6298\u6210\u4EBA\u7537\u5973\u81EA\u5F00\u81EA\u6536</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE518.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"details.html\"><img src=\"../imgs/cont.jpg\"/ id=\"img_box\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"details.html\"><dl>\n\t\t\t\t\t\t<dt><img src=\"../imgs/cont2.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u6CF0\u8FEA\u91D1\u6BDB\u5BA0\u7269\u6E7F\u7CAE\u7F8E\u6BDB\u5065\u80A4\u72D7\u96F6\u98DF375g</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE51188.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t";
		}
		gwc_list.innerHTML = strs1;
	})();

	(function () {

		var classid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", { classID: classid }, function (data) {
			console.log(data);
			var str = "";
			$.each(data, function (index, item) {
				str += "<div>\n\t\t\t\t\t\t\t<a href=\"details.html?id=" + item.goodsID + "\">\n\t\t\t\t\t\t\t<img src=\"" + item.goodsListImg + "\">\n\t\t\t\t\t\t\t<p>" + item.goodsName + "</p>\n\t\t\t\t\t\t\t<p><span>\uFFE5" + item.price + "</span></p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>";
			});
			$(".shangpinzhanshi1").html(str);
		});
	})();
});