$(function () {
    //菜单
    var sch=true;
    $(".down>li>span").on("click",function () {
        if (sch){
            $(this).siblings(".show").show();
            $(this).css("color","#ff8a00");
            $(this).siblings("i").css({
                "transform":"rotate(180deg)",
                "border-top": "0.06rem solid #ff8a00"});
            sch=false;
        } else {
            $(this).siblings(".show").hide();
            $(this).css("color","#666666");
            $(this).siblings("i").css({
                "transform":"rotate(0deg)",
                "border-top": "0.06rem solid #ccc"});
            sch=true;
        }
    });
 //区域
//价格
//房型
//更多

$.ajax({
    url:"./json/list.json",
    success:function(a) {
        console.log(a);
        var interText = doT.template($("#list").text());
        $(".list").html(interText(a));
    },
    error:function(err){
        throw err;
    }
});
});