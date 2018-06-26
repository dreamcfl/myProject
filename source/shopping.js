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
		
	
	//点击加减
	(function(){
		var gwc_jian =document.getElementById("gwc_jian");
		 var gwc_jia =document.getElementById("gwc_jia");
		 var gwc_shu=document.getElementById("gwc_shu");
		 var xzsl1=document.getElementById("xzsl1");
		 var gcd1=document.getElementsByClassName("gcd1")[0];
		 var gcz1=document.getElementsByClassName("gcz1")[0];
		 var gwc_ct_d1=document.getElementsByClassName("gwc_ct_d1")[0];
		 var gwc_ct_z1=document.getElementsByClassName("gwc_ct_z1")[0];
		 var shu=1;
		 
		 
		 gwc_shu.value="1";
		 gwc_jia.onclick=function(){
		 	shu++;
		 	 gwc_shu.value= shu ;
		 	 xzsl1.innerHTML=shu;
		 	 gcz1.innerHTML=(shu*gcd1.innerHTML).toFixed(2);
		 }
		gwc_jian.onclick=function(){
			shu--;
			if(shu<=1){
				gwc_shu.value="1";
				 xzsl1.innerHTML="1";
				  gcz1.innerHTML=gcd1.innerHTML;
				shu=1
			}else{
				gwc_shu.value= shu ;
				 xzsl1.innerHTML=shu;
				  gcz1.innerHTML=(shu*gcd1.innerHTML).toFixed(2);
			}
		 	 
		}
		$("#checkall").click(function(){
			if($("#checkall:checked")){
				$("#check1").prop("checked",$(this).prop("checked"));
				$("#check2").prop("checked",$(this).prop("checked"));
			}
		})
		$("#btn_js").click(function(){
			
			location.reload();
		})
		
	})()
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
