"use strict";

$(function () {
	//生成展示的商品
	(function () {
		var gwc_list = document.getElementById("gwc_list");
		var strs1 = "";
		for (var con = 0; con < 3; con++) {
			strs1 += "\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><dl>\n\t\t\t\t\t\t<dt><img src=\"../imgs/cont1.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u5168\u81EA\u52A8\u96E8\u4F1E \u7537\u58EB\u5546\u52A1\u6298\u53E0\u4F1E\u5927\u53F7\u53CC\u4EBA\u4E09\u6298\u6210\u4EBA\u7537\u5973\u81EA\u5F00\u81EA\u6536</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE518.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><img src=\"../imgs/cont.jpg\"/></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"main6_content_box\">\n\t\t\t\t\t<a href=\"\"><dl>\n\t\t\t\t\t\t<dt><img src=\"../imgs/cont2.jpg\"/></dt>\n\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t<p>\u6CF0\u8FEA\u91D1\u6BDB\u5BA0\u7269\u6E7F\u7CAE\u7F8E\u6BDB\u5065\u80A4\u72D7\u96F6\u98DF375g</p>\n\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\uFFE51188.00\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</dd>\n\t\t\t\t\t</dl></a>\n\t\t\t\t</div>\n\t\t\t\t";
		}
		gwc_list.innerHTML = strs1;
	})();
});