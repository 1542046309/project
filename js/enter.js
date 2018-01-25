
window.onload=function(){
	 var phoneck = false;
    $("#phonet").blur(function(){
        phone();
    })
    function phone(){
        var regPhone = /^1(3|4|5|7|8|9)\d{9}$/;  //一共十一位数，1开头，后面是十位数字
        if (!regPhone.test($("#phonet").val())) {
            $("#userMsg").html("手机格式不正确")
        }else{
            phoneck = true;
            $("#userMsg").html("")
        }
    }
	
	
	 var passw = false;
    $("#phonet1").blur(function(){
        phonepass();
    })
    function phonepass(){
        var regPhone = /^[\w]{6,20}$/;  //6-20位
        if (!regPhone.test($("#phonet1").val())) {
            $("#usermi").html("密码格式不正确")
        }else{
            passw = true;
            $("#usermi").html("")
        }
    }
	
}
