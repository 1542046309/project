	$(document).ready(function(){	

		$(".li3").bind("mouseenter",function () {
    			$('.wei').show();
				$('.li3').css("background","white");
		});

		$(".li3").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.wei').hide();
				$('.li3').css("background","#eee");
			},2);
		});

		$(".wei").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".wei").mouseleave(function(){
			$('.wei').hide();
			$('.li3').css("background","#eee");
		})

	});




	$(document).ready(function(){	

		$(".li4").bind("mouseenter",function () {
    			$('.notice').show();
				$('.li4').css("background","white");
		});

		$(".li4").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.notice').hide();
				$('.li4').css("background","#eee");
			},2);
		});

		$(".notice").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".notice").mouseleave(function(){
			$('.notice').hide();
			$('.li4').css("background","#eee");
		})

	});
	
	
	$(document).ready(function(){	
		
		var iTimer = null;
		$(".oneli").bind("mouseenter",function () {
				
    			$('#strll').show();
				$('.oneli').css("background","white");
		});

		$(".oneli").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('#strll').hide();
				$('.oneli').css("background","#eee");
			},2);
		});

		$("#strll").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$("#strll").mouseleave(function(){
			$('#strll').hide();
			$('.oneli').css("background","#eee");
		})

	});
	


$(function () {
        $(".chang").click(function () {
            $(".icon-jiantouxia,.icon-jiantouyou").toggleClass("p");
        });
    }
);



$(function () {
        $("a[href=#]").click(function () {
            $(this).next().toggle(200);
        });
    }
);

//回到顶部
    $(".top3").click(function(){
    $('body,html').animate({scrollTop:0},200);

    return false;
  });
  

//弹窗
$(function(){	

		$(".size2 ").bind("click",function () {
    			$('.layer').css("display","block");
    			$('.popbox').css("display","block");
    			$(this).find('p').css("background-position","left bottom");
		});
		
		$(".pop1img ").bind("click",function () {
    			$('.layer').css("display","none");
    			$('.popbox').css("display","none");
    			$(".size2 p").css("background-position","right top");
		});
		
		$(".po1 ").bind("click",function () {
    			$('.layer').hide();
    			$('.popbox').hide();
    			$(".size2 p").css("background-position","right top");
		});

	});
