"use strict";$(function(){$(".sao").click(function(){$(".zhang").css({color:"#000","font-weight":"500"}),$(this).css({color:"#e4393c","font-weight":"800"}),$(".login_hide1").hide(),$(".login_show1").show()}),$(".zhang").click(function(){$(".sao").css({color:"#000","font-weight":"500"}),$(this).css({color:"#e4393c","font-weight":"800"}),$(".login_show1").hide(),$(".login_hide1").show()}),function(){document.getElementById("btn_login");var n=document.getElementById("login_text"),o=document.getElementById("login_psw"),e=document.getElementById("login_text1"),t=document.getElementById("login_psw1"),l=/^\w{6,14}$/;n.oninput=function(){l.test(n.value)?(e.innerHTML="√",e.style.background="greenyellow",e.style.color="green"):(e.innerHTML="×",e.style.background="#fff8f0",e.style.color="indianred")},o.oninput=function(){l.test(o.value)?(t.innerHTML="√",t.style.background="greenyellow",t.style.color="green"):(t.innerHTML="×",t.style.background="#fff8f0",t.style.color="indianred")},$("#btn_login").click(function(){$.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:$("#login_text").val(),password:$("#login_psw").val()},function(n){n=JSON.parse(n),console.log(n),0==n?alert("用户名不存在"):2==n?alert("用户名或者密码错误"):window.location="../index.html"})})}()});