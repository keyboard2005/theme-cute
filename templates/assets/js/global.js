window.addEventListener('load', () => {
    var befortop = 0;
    window.addEventListener("scroll", function () {
        var aftertop = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
        if (aftertop - befortop > 0) {
            document.querySelector('#header').classList.add('header-hide');
        } else {
            document.querySelector('#header').classList.remove('header-hide');
        }
        befortop = aftertop;
    }, false);
})