$(function(){
	//生成展示的商品
	(function(){
			var gwc_list =document.getElementById("gwc_list");
			var strs1="";
			for(var con=0;con<2;con++){
				strs1+=`
				<div class="main6_content_box">
					<a href="details.html"><dl>
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
					<a href="details.html"><img src="../imgs/cont.jpg"/ id="img_box"></a>
				</div>
				<div class="main6_content_box">
					<a href="details.html"><dl>
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
		
		//		接口数据生成
		
	(function(){
		
		var classid = location.search.split("=")[1];
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
						console.log(data);
						var str = "";
						var strlist="";
						$.each(data,function(index,item){
							str += `<div>
							<a href="details.html?id=${item.goodsID}">
							<img src="${item.goodsListImg}">
							<p>${item.goodsName}</p>
							<p><span>￥${item.price}</span><strong>查看商品详情</strong></p>
							
							</div>`;
							strlist=item.className;
						})
						$(".shangpinzhanshi1").html(str);
						$("#shang_list").html(strlist);
					});
					
		
		
		
		
	})();
	//购物车变化
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str="";
					var zongsl=0;
					var zongjg=0;
					var listname1="";
					$.each(data,function(index,item){
							str += `
							
				<a href="details.html?id=${item.goodsID}"><dl class="gwc_ct_list">
							<dt><img src="${item.goodsListImg}"/></dt>
							<dd><p>${item.goodsName} </p>
								<p><span>￥<strong>${item.price}</strong></span>×<strong id="gwz_dz">1</strong></p>
							</dd>
							
						</dl></a>
				`
					listname1+=item.classID;
							zongsl+=Number(item.number);
		zongjg+=Number(item.number)*Number(item.price);
						})
					var zongjg=zongjg.toFixed(2);
					$("#che_num").html(zongsl);
					$("#xian_top_a").html(zongsl);
					$("#zongshu_top").html(zongsl);
					$("#xian_top_b1").html(zongjg);
					
						$(".gwc_center").html(str);
					console.log(listname1)
//	$("#search_list").html(listname1);
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
