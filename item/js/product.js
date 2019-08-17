$(function(){
		
	
	let productData=new Product ();//获取类；
	let attr=["all","latex","noopsyche","health","non-woven"];
	let num=0;//计算多少条数据；
	
	
	//初始化数据
	productData.getdata(attr[0],function(res){
		console.log(res)
		//清空数据容器
		$(".product-list ul").html("")
		
		
		$('.page-body-title h1').html(res.title)
		if(attr[0]!="all"){
		
			
			res.list.forEach((item,index)=>{
				num++;
				productData.addData(item)
			})
		}else{
			for(var key in res){
				
				$(".product-list").css({width:num*100+"vw"})
				if(key!="title"){
					res[key].list.forEach((item,index)=>{
						num++;
						productData.addData(item)
					})
				}
			}
		}
	
	//分页器
		productData.page(num);
		
		
	});
	
	
	
	//点击切换数据
	$(".product-btnList").on("click","li",function(){
		$('.product-list ul').css({"left":0});
		$(this).addClass("active").siblings().removeClass("active");
		let index=$(this).index();
		
		productData.getdata(attr[index],function(res){
			$(".product-list ul").html("")
			$('.page-body-title h1').html(res.title)
			
			
			
			
			let num=0;
			if(attr[index]!="all"){
				
				res.list.forEach((item,index)=>{
					num++;
					$(".product-list").css({width:num*100+"vw"})
					productData.addData(item)
				})
			}else{
				for(var key in res){
		
					$(".product-list").css({width:num*100+"vw"})
					
					if(key!="title"){
						res[key].list.forEach((item,index)=>{
							num++;
							productData.addData(item)
						})
					}
				}
			}
			//分页器
				productData.page(num);			
		});
	})
})