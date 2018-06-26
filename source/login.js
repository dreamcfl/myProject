;
$(function(){
	
	
	//更换登录方式
	(function(){
		
		$(".sao").click(function(){
		$(".zhang").css({"color":"#000","font-weight":"500"});
		$(this).css({"color":"#e4393c","font-weight":"800"});
		$(".login_hide1").hide();
		$(".login_show1").show();
	})
	
	$(".zhang").click(function(){
		
		$(".sao").css({"color":"#000","font-weight":"500"});
		$(this).css({"color":"#e4393c","font-weight":"800"});
		
		$(".login_show1").hide();
		$(".login_hide1").show();
		
	})
		
	})();
	
	//登录判断
	(function(){
		var btn_login =document.getElementById("btn_login");
		var login_text=document.getElementById("login_text");
		var login_psw=document.getElementById("login_psw");
		var login_text1=document.getElementById("login_text1");
		var login_psw1=document.getElementById("login_psw1");
		
		var lgstr=/^\w{6,14}$/;
		
		login_text.oninput=function(){
			if(lgstr.test(login_text.value)){
				login_text1.innerHTML="√";
				login_text1.style.background="greenyellow";
				login_text1.style.color="green"
			}else{
				
				login_text1.innerHTML="×";
				login_text1.style.background="#fff8f0";
				login_text1.style.color="indianred";
			}
		}
		login_psw.oninput=function(){
			if(lgstr.test(login_psw.value)){
				login_psw1.innerHTML="√";
				login_psw1.style.background="greenyellow";
				login_psw1.style.color="green";
			}else{
				
				login_psw1.innerHTML="×";
				login_psw1.style.background="#fff8f0";
				login_psw1.style.color="indianred";
			}
		}
		btn_login.onclick=function(){
			if(login_psw1.innerHTML=="√" && login_text1.innerHTML=="√"){
				window.location="../index.html";
			}
			
		}
		
	})();
	
	
	
});
