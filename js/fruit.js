//弹窗
$(function(){

		$(".trf a ").bind("click",function () {
    			$('.layer').css("display","block");
    			$('.popbox').css("display","block");
    			$(this).find('a').css("background-position","left bottom");
		});
		
		$(".pop1img ").bind("click",function () {
    			$('.layer').css("display","none");
    			$('.popbox').css("display","none");
    			$(".tr a").css("background-position","right top");
		});
		
		$(".po1 ").bind("click",function () {
    			$('.layer').hide();
    			$('.popbox').hide();
    			$(".tr a").css("background-position","right top");
		});

	});
	

    $(function () {
        $.ajax({
            type: "get",
            url: "getGoodsList.php",
            success: function (data) {

                showgoodsList(data);
            },
            dataType: "json"
        });
    })

    function showgoodsList(datas) {
        for (let i = 0; i < datas.length; i++) {
            // 创建一个商品
            
            
            let str = `<div class="shopbiao1">
				<div class="t1">
					<a href="javascript:;"><img src="`+datas[i].goodsImg+`"/></a>
				</div>
				<div class="t2">
					<p>`+datas[i].goodsDesc+`</p><span>￥`+datas[i].goodsPrice+`</span>
				</div>
				<div class="t3 trf" >
					<span>`+datas[i].goodsCount+`个</span><a href="javascript:;"></a>
				</div>
			</div>`

            $(".shopbiao").append(str);
        }
    }





