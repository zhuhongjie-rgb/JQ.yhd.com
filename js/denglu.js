//    更多帮助
// 鼠标移动到每个li上 让对应的ul显示出来
$('.nav>li').on('mouseover', function () {
    // 当鼠标进入li 让这个li里面的ul的所有动画都停止
    $(this).children('ul').stop()
    $(this).children('ul').slideDown();

    $(this).children('ul').stop().slideDown();
    $(this).children('ul').stop().slideDown();
})

$('.nav>li').on('mouseout', function () {

    $(this).children('ul').stop()
    $(this).children('ul').slideUp();

    $(this).children('ul').stop().slideUp();
    $(this).children('ul').stop().slideUp();
})
//更多合作平台
$('.title').on('click', function () {
    // 1.1下的面板进行折叠和展开的切换
    $(this).next().stop().slideToggle()
    // 1.2箭头的方向的切换
    $(this).find('img').toggleClass('arrow')
})