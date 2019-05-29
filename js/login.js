$(function () {
   $("#btn").on("click",function () {
       var re = /^[a-zA-z]\w{3,15}$/;
       var patrn=/^(\w){6,20}$/;
       if(re.test($(".user").val())){
           $(".user").css("border ","1px solid green");
               $(".user").siblings("p").css({
                   "display": "none",
                   "color":"black"
               });
       }else{
           $(".user").css("border"," 1px solid red");
           $(".user").siblings("p").css({
               "display":"block",
               "color":"red"
           });
           return false;
       }
     if (patrn.test($(".pass").val())){
         $(".pass").css("border ","1px solid green");
         $(".pass").siblings("p").css({
             "display": "none",
             "color":"black"
         });
     }else {
         $(".pass").css("border","1px solid red");
         $(".pass").siblings("p").css({
             "display":"block",
             "color":"red"
         });
         return false;
     }
     if ($(".pass").val()===$(".password").val() && patrn.test($(".password").val())){
         $(".password").css("border ","1px solid green");
         $(".password").siblings("p").css({
             "display": "none",
             "color":"black"
         });
     } else {
         $(".password").css("border","1px solid red");
         $(".password").siblings("p").css({
             "display":"block",
             "color":"red"
         });
         return false;
     }
     $.ajax({
           url:"https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5",
           dataType:"json",
           data:{
               phone:$(".user").val(),
               passwd:$(".password").val()
           },
           type:"POST",
           success:function (a) {
               console.log(a);
               if (a.code===200) {
                   alert("注册成功");
                   setTimeout(function () {
                       window.location.href="./register.html"
                   },1000)
               }else {
                   alert("该账号已被注册")
               }
           },
           err:function (e) {
               throw e;
           }
       })
});
    $("div>input").on("focus",function () {
        $(this).siblings("p").show();
    });
});