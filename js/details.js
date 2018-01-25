window.onload = function () {
    var oEnlargeBox= document.getElementById('enlarge-box');
    var oSmallBox  = document.getElementById('small-box');
    var aSmallImg  = Array.from(oSmallBox.children);
    var oMiddleImg = document.getElementById('middle-img');
    var oLargeBox  = document.getElementById('large-box');
    var oLargeImg  = document.getElementById('large-img');
    var oMiddleBox = document.getElementById('middle-box');
    var oShadow    = document.getElementById('shadow');

    // 选项开效果
    aSmallImg.forEach((v) => {
        v.addEventListener('mouseenter', (() => {
            aSmallImg.forEach((m) => {
                m.className = '';
            });
            v.className = 'active';
            oMiddleImg.src = v.src;
            oLargeImg.src  = v.src;
        }).bind(v));
    });

    // 放大镜效果
    var iMaxL = oMiddleBox.offsetWidth  - oShadow.offsetWidth;
    var iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;
    oMiddleBox.addEventListener('mousemove', (ev) => {
        var e = ev || window.event;

        var
            iL = e.pageX- oEnlargeBox.offsetLeft - oShadow.offsetWidth / 2;
            iT = e.pageY - oEnlargeBox.offsetTop  - oShadow.offsetHeight / 2;


        iL = Math.max(iL , 0);
        iT = Math.max(iT , 0);
        iL = Math.min(iL , iMaxL);
        iT = Math.min(iT, iMaxT);


        // 大图移动的距离和遮罩层移动的距离的比例关系
        // iShadowCurL / iShadowMaxL = iImgCurL / iImgMaxL

        var iBigImgL = iL * (oLargeImg.offsetWidth - oLargeBox.offsetWidth) / iMaxL;
        var iBigImgT = iT * (oLargeImg.offsetHeight - oLargeBox.offsetHeight) / iMaxT;


        oShadow.style.left = iL + 'px';
        oShadow.style.top  = iT + 'px';

        oLargeImg.style.left = -iBigImgL + 'px';
        oLargeImg.style.top  = -iBigImgT + 'px';
    });
    oMiddleBox.addEventListener('mouseenter', () => {
        oLargeBox.style.display = 'block';
    });
    oMiddleBox.addEventListener('mouseleave', () => {
        oShadow.style.left = '-1000px';
        oLargeBox.style.display = 'none';
    });
};

$(function(){	

		$(".strh").bind("mouseenter",function () {
    			$('.strh2').show();
		});

		$(".strh").bind("mouseleave",function () {
			iTimer = setTimeout(function(){
				$('.strh2').hide();
			},2000);
				
		});

			$("#strh2").bind("mouseenter",function () {
    		clearTimeout(iTimer);
		});	

		$(".deleimg").click(function(){
			$('.strh2').hide();
			
		})

	});
	

$(function(){	

		$(".gu").bind("click",function () {
    			$('.small3').show();
    			$('.small2').hide();
    			$(".gu").css({"background":"#fff","border-top":"2px solid #64A131"});
    			$(".jian").css({"background":"#F1F1F1","border-top":"none"});
		});

		

		$(".jian").click(function(){
			$('.small3').hide();
			$('.small2').show();
    		$(".jian").css({"background":"#fff","border-top":"2px solid #64A131"});
    		$(".gu").css({"background":"#F1F1F1","border-top":"none"});
		})
		

	});
	

//实现商品的添加和减少的功能;
$(document).ready(function(){
//获得文本框对象
    var t = $("#shoppingNum");
//初始化数量为1,并失效减
    $('#reduce').attr('disabled',true);
    //数量增加操作
    $("#add").click(function(){
        // 给获取的val加上绝对值，避免出现负数
        t.val(Math.abs(parseInt(t.val()))+1);
        if (parseInt(t.val())!=1){
            $('#reduce').attr('disabled',false);
        };
    })
    //数量减少操作
    $("#reduce").click(function(){
        t.val(Math.abs(parseInt(t.val()))-1);
        if (parseInt(t.val())==1){
            $('#reduce').attr('disabled',true);
        };
    })
});

window.onscroll = function(){
		var yyy = document.getElementById("yyy");
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		document.title = _scroll;
		if(_scroll >= 860){
			yyy.style.position = "fixed";
			yyy.style.top = 0;
		} else {
			yyy.style.position = "absolute";
			yyy.style.top = "860px";
		}
	};

