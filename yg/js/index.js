$(function() {
	
	
	
	
	var apiUrl = "http://120.55.86.40:82/yiyuanapi/";
	
	//noticebar
	var timer = null;
	var num = 0;
	$.ajax({
		type: "GET",
		url: apiUrl + "homepage/getLottery",
		data: {
			pageNum:1
		}
		async: true,
		dataType: "json",
		success: function(msg) {
			var data = msg.data;
			console.log(data)
			timer = setInterval(function() {
				num++;
				if(num > data.length - 1) {
					num = 0;
				}
				$("#index_notice").text(data[num].title);
			}, 1000);

		},
		error: function(e) {

		}
	});
	$("#index_notice").click(function() {
		clearInterval(timer);
	});
	
	//goodlist
	$.ajax({
		type:"get",
		url:apiUrl+"goods/getGoodsList",
		async:true,
		data:{
			pageNum:1
		},
		dataType:"json",
		success:function(msg){
			console.log(msg);
			var data = msg.data;
			for (var i = 0;i<data.length;i++) {
				$(".goods_name").eq(i).text(data[i].title);
			}
		},
		error:function(err){
			console.log(err)
		}
	});
	
	
	
	
})