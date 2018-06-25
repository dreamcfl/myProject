$(function(){
	
	//手机号验证
	(function(){
		var hm_txt=document.getElementById("hm_txt");
		var hm_txt1=document.getElementById("hm_txt1");
	    var rcb_center=document.getElementsByClassName("rcb_center")[0];
	    var btn_xyb=document.getElementById("btn_xyb");
	    var yzstr=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	   var yzstr1=/^\d{6}$/
	    hm_txt.onblur=function(){
	    	
	    	if(yzstr.test(hm_txt.value)){
	    		
	    	}else{
	    		hm_txt1.innerHTML="请输入正确的手机号码！"
	    	}
	    	
	    }
	    rcb_center.onclick=function(){
	    	
	    	if(yzstr.test(hm_txt.value)){
	    		
	    		rcb_center.innerHTML=`<div><input type="text" placeholder="请输入手机验证码" id="input_zc"></div>
	    		`
	    		rcb_center.onclick=null;
	    	}
	    	
	    	
	    };
	    
	   
	    	
	    	  btn_xyb.onclick=function(){
	    	if(yzstr1.test(document.getElementById("input_zc").value)){
	    		
	    	}
	    }
	  
	    
	    document.onselectstart=function(){
	    	return false;
	    }
	
	})();
	
	
	
})
