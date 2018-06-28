$(function(){
     //生成猜你喜欢的商品
	(function(){
			var gwc_list =document.getElementById("gwc_list");
			var strs1="";
			for(var con=0;con<3;con++){
				strs1+=`
				<div class="main6_content_box">
					<a href=""><dl>
						<dt><img src="../imgs/cont1.jpg"/></dt>
						<dd>
							<p>全自动雨伞 男士商务折叠伞大号双人三折成人男女自开自收</p>
							<span>
								￥18.00
							</span>
						</dd>
					</dl></a>
				</div>
				<div class="main6_content_box">
					<a href=""><img src="../imgs/cont.jpg"/></a>
				</div>
				<div class="main6_content_box">
					<a href=""><dl>
						<dt><img src="../imgs/cont2.jpg"/></dt>
						<dd>
							<p>泰迪金毛宠物湿粮美毛健肤狗零食375g</p>
							<span>
								￥1188.00
							</span>
						</dd>
					</dl></a>
				</div>
				`;
			
			}
			gwc_list.innerHTML=strs1;
		})();
		

	(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str="";
					$.each(data,function(index,item){
							str += `
							
				<div class="gwc_ct">
					<input type="checkbox" name="" id="check2" value="" />
					
						<a href="details.html?id=${item.goodsID}"><dl class="gwc_ct_list">
							<dt><img src="${item.goodsListImg}"/></dt>
							<dd>
							<span id="ming">商品类型: ${item.className}</span>
							<p> ${item.goodsName}</p>
								<p>支持7天无理由退货</p>
							</dd>
							<dd><p>颜色：深蓝色1791常规</p>
								<p>尺码：L</p>
</dd>
						</dl></a>
				    <p class="gwc_ct_d1">￥<span class="gcd1">${item.price}.00</span></p>
				    <div class="gwc_ctsl">
				    	<input type="button" id="gwc_jian" value="-" />
				    	<input type="text" name="" id="gwc_shu" value="${item.number}" disabled="disabled"/>
				    	<input type="button" id="gwc_jia" value="+" />
				    </div>
				    <p class="gwc_ct_z1">￥<span class="gcz1">${item.price}.00</span></p>
				    <span class="gwc_sc1" goodsID="${item.goodsID}">
				    	删除
				    </span>
				</div>
				`
						})
						$(".gwc_content1").html(str);
					
					
					
//			点击删除商品
	$(".gwc_sc1").click(function(){
		
		var id=$(this).attr("goodsID");
		//console.log(id);
						$(this).parent().remove();
						$.get(" http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:id,number:0})
				});
					
				
					
					
					
				})
	
	})();
	
	
	
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
