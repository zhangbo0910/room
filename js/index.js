$(function () {
$.ajax({
    url:"./json/index.json",
    success:function(a) {
        console.log(a);
        var interText = doT.template($("#list").text());
        $(".list").html(interText(a));
    },
    error:function(err){
        throw err;
    }
});
$(".btn a").eq(0).on("click",function () {
    $(this).addClass("active").siblings().removeClass("active");
        $(".es").hide();
        $(".er").show();
});
$(".btn a").eq(1).on("click",function () {
    $(this).addClass("active").siblings().removeClass("active");
        $(".es").show();
        $(".er").hide();

});
$(".biao").on("click",function () {
    $(".guanggao").hide();
})

});