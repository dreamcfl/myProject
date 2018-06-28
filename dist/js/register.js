"use strict";

$(function () {

	//手机号验证
	(function () {
		var hm_txt = document.getElementById("hm_txt");
		var hm_txt1 = document.getElementById("hm_txt1");
		var rcb_center = document.getElementsByClassName("rcb_center")[0];
		var btn_xyb = document.getElementById("btn_xyb");
		var yzstr = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var yzstr1 = /^\d{6}$/;
		var yzstr2 = /^\w{5,14}$/;
		hm_txt.onblur = function () {

			if (yzstr.test(hm_txt.value)) {} else {
				hm_txt1.innerHTML = "请输入正确的手机号码！";
			}
		};
		rcb_center.onclick = function () {

			if (yzstr.test(hm_txt.value)) {

				rcb_center.innerHTML = "<div><span>\u8BF7120\u5185\u8F93\u5165</span><input type=\"text\" placeholder=\"6\u4F4D\u9A8C\u8BC1\u7801\" id=\"input_zc\"></div>\n\t    \t\t";
				rcb_center.onclick = null;
			}
		};

		var txzh = document.getElementsByClassName("txzh")[0];
		var yzsjh = document.getElementsByClassName("yzsjh")[0];
		var gw = document.getElementsByClassName("gw")[0];
		var btn_xyb2 = document.getElementById("btn_xyb2");
		var hm_txt2 = document.getElementById("hm_txt2");
		var hm_txt3 = document.getElementById("hm_txt3");
		var lu_class1 = document.getElementById("lu_class1");
		var lu_class2 = document.getElementById("lu_class2");
		var lu_class3 = document.getElementById("lu_class3");
		//	    	hm_txt2.onblur=function(){
		//	    	
		//	    	if(yzstr2.test(hm_txt2.value)){
		//	    		
		//	    	}else{
		//	    		hm_txt21.innerHTML="请输入正确的账户名格式！"
		//	    	}
		//	    	
		//	    }
		//	    	hm_txt3.onblur=function(){
		//	    	
		//	    	if(yzstr2.test(hm_txt3.value)){
		//	    		
		//	    	}else{
		//	    		hm_txt31.innerHTML="请输入6~16位的密码格式！"
		//	    	}
		//	    	
		//	    }
		$("#btn_xyb2").click(function () {
			$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { status: "register", userID: $("#hm_txt2").val(), password: $("#hm_txt3").val() }, function (data) {
				data = JSON.parse(data);
				console.log(data);
				if (data == 0) {
					alert("用户名重名");
				} else if (data == 1) {
					txzh.style.display = "none";
					gw.style.display = "block";
					lu_class2.className = "";
					lu_class3.className = "lu_1";
				} else {
					alert("注册失败，请重试");
				}
			});
		});

		btn_xyb.onclick = function () {
			if (yzstr1.test(document.getElementById("input_zc").value)) {
				yzsjh.style.display = "none";
				txzh.style.display = "block";
				lu_class1.className = "";
				lu_class2.className = "lu_1";
			}
		};
		//	    	  btn_xyb2.onclick=function(){
		//	    	  	if(yzstr2.test(hm_txt2.value) && yzstr2.test(hm_txt3.value)){
		//	    	  		txzh.style.display="none";
		//	    	  		gw.style.display="block";
		//	    	  		lu_class2.className="";
		//	    		    lu_class3.className="lu_1";
		//	    	  	}
		//	    	  }


		document.onselectstart = function () {
			return false;
		};
	})();
});