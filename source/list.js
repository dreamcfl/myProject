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
						$.each(data,function(index,item){
							str += `<div>
							<a href="details.html?id=${item.goodsID}">
							<img src="${item.goodsListImg}">
							<p>${item.goodsName}</p>
							<p><span>￥${item.price}</span></p>
							
							</div>`
						})
						$(".shangpinzhanshi1").html(str);
					});
					
		
		
		
		
	})();
	
	
})
