"use strict";$(function(){!function(){var t=document.getElementById("hm_txt"),e=document.getElementById("hm_txt1"),n=document.getElementsByClassName("rcb_center")[0],l=document.getElementById("btn_xyb"),s=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,c=/^\d{6}$/;t.onblur=function(){s.test(t.value)||(e.innerHTML="请输入正确的手机号码！")},n.onclick=function(){s.test(t.value)&&(n.innerHTML='<div><span>请120内输入</span><input type="text" placeholder="6位验证码" id="input_zc"></div>\n\t    \t\t',n.onclick=null)};var a=document.getElementsByClassName("txzh")[0],m=document.getElementsByClassName("yzsjh")[0],u=document.getElementsByClassName("gw")[0],o=(document.getElementById("btn_xyb2"),document.getElementById("hm_txt2"),document.getElementById("hm_txt3"),document.getElementById("lu_class1")),d=document.getElementById("lu_class2"),i=document.getElementById("lu_class3");$("#btn_xyb2").click(function(){$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:$("#hm_txt2").val(),password:$("#hm_txt3").val()},function(t){t=JSON.parse(t),console.log(t),0==t?alert("用户名重名"):1==t?(a.style.display="none",u.style.display="block",d.className="",i.className="lu_1"):alert("注册失败，请重试")})}),l.onclick=function(){c.test(document.getElementById("input_zc").value)&&(m.style.display="none",a.style.display="block",o.className="",d.className="lu_1")},document.onselectstart=function(){return!1}}()});