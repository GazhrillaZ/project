$(function() {
	var idx = 0;
	var num = 0;
	var m = 0;
	var listNum = $(".index_banner>ol>li");
	var timer = setInterval(function() {
		idx++;
		num++;
		m++;
		if(num > listNum.length - 1) {
			num = 0;
		}
		$(".index_banner>ol>li").eq(num).addClass("bannerBtn_active").siblings().removeClass("bannerBtn_active");
		if(m < listNum.length) {
			$(".index_banner>ul").animate({
				"left": -100 * m + "%"
			}, 1500);
		} else {
			m = 0;
			$(".index_banner>ul").css("left", 0)
		}

	}, 2000);

	$("#menulist>li").click(function() {
		$(this).addClass("menu_active").siblings().removeClass("menu_active");
	});
})