"use strict";

$(function () {
	//放大镜
	(function () {
		var zoomBox = document.getElementById("zoomBox");
		var midImg = document.getElementById("midImg");
		var zoom = document.getElementById("zoom");
		var bigImg = document.getElementById("bigImg");
		var bImg = bigImg.children[0];
		midImg.onmouseover = function () {
			zoom.style.display = "block";
			bigImg.style.display = "block";
		};
		midImg.onmouseout = function () {
			zoom.style.display = "none";
			bigImg.style.display = "none";
		};
		midImg.onmousemove = function (e) {
			var evt = e || event;
			var x = evt.pageX;
			var y = evt.pageY;
			zoom.style.left = x - zoomBox.offsetLeft - zoom.offsetWidth / 2 + "px";
			zoom.style.top = y - zoomBox.offsetTop - zoom.offsetHeight / 2 + "px";

			var Lx = x - zoomBox.offsetLeft - zoom.offsetWidth / 2;
			var Ly = y - zoomBox.offsetTop - zoom.offsetHeight / 2;
			if (Lx <= 0) {
				zoom.style.left = "0px";
			} else if (Lx >= midImg.offsetWidth - zoom.offsetWidth) {
				zoom.style.left = midImg.offsetWidth - zoom.offsetWidth + "px";
			}
			if (Ly <= 0) {
				zoom.style.top = "0px";
			} else if (Ly >= midImg.offsetHeight - zoom.offsetHeight) {
				zoom.style.top = midImg.offsetHeight - zoom.offsetHeight + "px";
			}
			bImg.style.left = -zoom.offsetLeft / midImg.offsetWidth * bImg.offsetWidth + "px";
			bImg.style.top = -zoom.offsetTop / midImg.offsetHeight * bImg.offsetHeight + "px";
		};
	})();

	//生成数据
	(function () {
		var li_cai = document.getElementsByClassName("li_cai")[0];
		var strli = "";
		for (var i = 0; i < 3; i++) {
			strli += "\n\t\t\t\t\n\t\t\t    <li><a href=\"\"><img src=\"../imgs/tuij7.jpg\"/><p>\uFFE5188.00</p></a></li>\n\t\t\t\t<li><a href=\"\"><img src=\"../imgs/tuijian.jpg\"/><p>\uFFE588.00</p></li>\n\t\t\t\t<li><a href=\"\"><img src=\"../imgs/tuij7.jpg\"/><p>\uFFE5188.00</p></a></li>\n\t\t\t\t<li><a href=\"\"><img src=\"../imgs/tuij.png\"/><p>\uFFE5108.00</p></a></li>\n\t\t\t\t";
		}
		li_cai.innerHTML = strli;
	})();

	//加减
	(function () {

		var gwc_jian = document.getElementById("gwc_jian");
		var gwc_jia = document.getElementById("gwc_jia");
		var gwc_shu = document.getElementById("gwc_shu");
		var jrgwz = document.getElementById("jrgwz");
		var shu = 1;

		gwc_shu.value = "1";
		gwc_jia.onclick = function () {
			shu++;
			gwc_shu.value = shu;
		};
		gwc_jian.onclick = function () {
			shu--;
			if (shu <= 1) {
				gwc_shu.value = "1";

				shu = 1;
			} else {
				gwc_shu.value = shu;
			}
		};
		var zonghe = $("#che_num").text();
		$("#jrgwz").click(function () {
			zonghe = parseInt($("#gwc_shu").val()) + parseInt(zonghe);
			console.log(zonghe);
			$("#che_num").text(zonghe);
			$("#xian_top_a").text(zonghe);
			$("#gwz_dz").text($("#gwc_shu").val());
		});
	})();
});