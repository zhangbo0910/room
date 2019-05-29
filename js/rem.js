window.onload=function () {
    function rem() {
        var s_w=320;
        var c_w=document.documentElement.clientWidth||document.body.clientWidth;
        document.getElementsByTagName("html")[0].style.fontSize=(c_w/s_w)*100+"px";
    }
    rem();
    window.onresize=rem;
};
