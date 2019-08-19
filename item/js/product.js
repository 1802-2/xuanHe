$(function(){
		
	
	let  attr=["all","latex","noopsyche","health","non-woven"];
	//初始化数据
	getdata(attr[0],function(res){
		
		var  num=0;//计算多少条数据；
		//清空数据容器
		$(".product-list ul").html("")
		
		$('.page-body-title h1').html(res.title)
		$('.page-body-title').css({"background":'url('+res.bg+') center no-repeat'})
		
		res.list.forEach(function(item){
				num++;
			addData(item)
			
		})
		$(".product-list").css({width:num/4*86+"vw"})

	//分页器
		page(num);
		
	});
	
	
	
	//点击切换数据
	$(".product-btnList").on("click","li",function(){
		var  num=0;//计算多少条数据；
		$('.product-list ul').css({"left":0});
		$(".product-list ul").html("")
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		getdata(attr[index],function(res){
			
			$('.page-body-title h1').html(res.title)
			$('.page-body-title').css({"background":"url("+res.bg+") center no-repeat"})
			res.list.forEach(function (item,index){
				num++;
				
				addData(item)
			})
			
			
			$(".product-list").css({width:num/4*86+"vw"})
			//分页器
			page(num);			
		});
		return false;
	})
})