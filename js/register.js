$(function () {
    $("#btn").on("click",function () {
        $(".denglu").show();
    });
    $(".guan").on("click",function () {
        $(".denglu").hide();
    });
    $("#btns").on("click",function () {
        $.ajax({
            url:"https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5",
            dataType:"json",
            data:{
                phone:$(".user").val(),
                passwd:$(".pass").val()
            },
            type:"POST",
            success:function (a) {
                console.log(a);
                if (a.code===200) {
                    alert("登陆成功");
                    setTimeout(function () {
                        window.location.href="./index.html"
                    },1000)
                }else {
                    alert("用户或密码错误");
                }
            },
            err:function (e) {
                throw e;
            }
        })

    });
});
