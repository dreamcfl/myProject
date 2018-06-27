$(function(){
	//生成展示的商品
	(function(){
			var gwc_list =document.getElementById("gwc_list");
			var strs1="";
			for(var con=0;con<2;con++){
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
					<a href=""><img src="../imgs/cont.jpg"/ id="img_box"></a>
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
		
	
	
	
})
