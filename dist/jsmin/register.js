"use strict";$(function(){!function(){var t=document.getElementById("hm_txt"),e=document.getElementById("hm_txt1"),n=document.getElementsByClassName("rcb_center")[0],l=document.getElementById("btn_xyb"),c=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,s=/^\d{6}$/,u=/^\w{5,14}$/;t.onblur=function(){c.test(t.value)||(e.innerHTML="请输入正确的手机号码！")},n.onclick=function(){c.test(t.value)&&(n.innerHTML='<div><span>请120内输入</span><input type="text" placeholder="6位验证码" id="input_zc"></div>\n\t    \t\t',n.onclick=null)};var m=document.getElementsByClassName("txzh")[0],o=document.getElementsByClassName("yzsjh")[0],a=document.getElementsByClassName("gw")[0],d=document.getElementById("btn_xyb2"),i=document.getElementById("hm_txt2"),y=document.getElementById("hm_txt3"),r=document.getElementById("lu_class1"),_=document.getElementById("lu_class2"),g=document.getElementById("lu_class3");i.onblur=function(){u.test(i.value)||(hm_txt21.innerHTML="请输入正确的账户名格式！")},y.onblur=function(){u.test(y.value)||(hm_txt31.innerHTML="请输入6~16位的密码格式！")},l.onclick=function(){s.test(document.getElementById("input_zc").value)&&(o.style.display="none",m.style.display="block",r.className="",_.className="lu_1")},d.onclick=function(){u.test(i.value)&&u.test(y.value)&&(m.style.display="none",a.style.display="block",_.className="",g.className="lu_1")},document.onselectstart=function(){return!1}}()});