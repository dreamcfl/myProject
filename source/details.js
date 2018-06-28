$(function(){
	
	
	
	//生成数据
		(function(){
			var li_cai=document.getElementsByClassName("li_cai")[0];
			var strli ="";
			for(var i=0; i<3;i++){
				strli+=`
				
			    <li><a href=""><img src="../imgs/tuij7.jpg"/><p>￥188.00</p></a></li>
				<li><a href=""><img src="../imgs/tuijian.jpg"/><p>￥88.00</p></li>
				<li><a href=""><img src="../imgs/tuij7.jpg"/><p>￥188.00</p></a></li>
				<li><a href=""><img src="../imgs/tuij.png"/><p>￥108.00</p></a></li>
				`
				
			}
			li_cai.innerHTML=strli;
			
			
			
		})();
	
	
	
	//查看接口数据详情
		var goodsid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
						console.log(data);
						var str = `<img src="${data[0].goodsListImg}">
						`
						var str1=`${data[0].goodsName}`
						var str2=`￥<span>${data[0].price}</span>`
						var str3=`添加购物车`
						
						
						
						$(".midImg1").html(str);
						$("#bigImg").html(str);
						
						$("#name_de").html(str1);
						$("#jiage").html(str2);
						$("#jrgwz").html(str3);
			//放大镜			
						
						var zoomBox =document.getElementById("zoomBox");
			var midImg =document.getElementById("midImg");
			var zoom =document.getElementById("zoom");
			var bigImg =document.getElementById("bigImg");
			var bImg =bigImg.children[0];
			
			midImg.onmouseover=function(){
				zoom.style.display="block";
				bigImg.style.display="block";
			}
			midImg.onmouseout=function(){
				zoom.style.display="none";
				bigImg.style.display="none";
			}
			midImg.onmousemove=function(e){
				var evt = e ||event;
				var x =evt.pageX;
				var y =evt.pageY;
				zoom.style.left=x-zoomBox.offsetLeft-zoom.offsetWidth/2+"px";
				zoom.style.top=y-zoomBox.offsetTop-zoom.offsetHeight/2+"px";
				
				
				var Lx=x-zoomBox.offsetLeft-zoom.offsetWidth/2;
				var Ly=y-zoomBox.offsetTop-zoom.offsetHeight/2;
				if(Lx<=0){
					zoom.style.left="0px";
				}else if(Lx>=midImg.offsetWidth-zoom.offsetWidth){
			zoom.style.left	=midImg.offsetWidth-zoom.offsetWidth+"px";	
				}
			if(Ly<=0){
					zoom.style.top="0px";
				}else if(Ly>=midImg.offsetHeight-zoom.offsetHeight){
			zoom.style.top	=midImg.offsetHeight-zoom.offsetHeight+"px";	
				}
				
				
				bImg.style.left=-zoom.offsetLeft/midImg.offsetWidth*bImg.offsetWidth+"px";
				bImg.style.top=-zoom.offsetTop/midImg.offsetHeight*bImg.offsetHeight+"px";
			};
						
						
						$("#jrgwz").click(function(){
							$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID},function(data){
								console.log(data);
								if(data==0){
									alert("添加失败");
								}
								if(data == 1){
									alert("添加成功");
									location.reload();
								}
							})
						})
					});
	
	//购物车变化
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str="";
					var zongsl=0;
					var zongjg=0;
					$.each(data,function(index,item){
							str += `
				<a href="details.html?id=${item.goodsID}"><dl class="gwc_ct_list">
							<dt><img src="${item.goodsListImg}"/></dt>
							<dd><p>${item.goodsName} </p>
								<p><span>￥<strong>${item.price}</strong></span>×<strong id="gwz_dz">1</strong></p>
							</dd>
							
						</dl></a>
				`
		zongsl+=Number(item.number);
		zongjg+=Number(item.number)*Number(item.price);
						})
					var zongjg=zongjg.toFixed(2);
					$("#che_num").html(zongsl);
					$("#xian_top_a").html(zongsl);
					$("#xian_top_b1").html(zongjg);
						$(".gwc_center").html(str);
					
	
	});
	//判断显示用户登录信息
	  var strloga="<a href='login.html'>你好，请登录</a>";
	  var strlogb="<a href='register.html'>注册</a>";
	if($.cookie('username')!=undefined){
		var strlog1="<span>你好，</span>";
		var strlog2="<a href=''>退出登录</a>";
		
		$(".login_11").html(strlog1);
		$(".login_22").html(strlog2);
		$('.login_22').find("a").click(function(){
			$(this).html(strlogb);
			$(".login_11").html(strloga);
			$.cookie('username',null,{expires:-1,path:"/"});
		})
	}
	
	
	
	
	
	
})
