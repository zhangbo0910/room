$(function () {
var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000
        },//可选选项，自动滑动
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    loop:"true"
    });
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);

    function myFun(result){
        var cityName = result.name;
        map.setCenter(cityName);
        alert("当前定位城市:"+cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);

});
