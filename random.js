$(function () {
    let run = 0;
    let timer;//定时器
    const arr = ["麻辣香锅", "重庆小面", "铁板炒饭", "鱼粉", "黄焖鸡", "拌面",
        "炸酱面", "石锅", "煎饼", "牛肉面", "麻辣烫", "冒菜", "快餐", "馄饨", "水饺",
        "粉丝", "盖浇饭", "炸鸡", "瓦罐汤", "焖饭", "浓汁烧"];

    function f() {
        let r = Math.floor(Math.random() * arr.length),
            food = arr[r];
        $("#what").html(food);
        let rTop = Math.floor(Math.random() * $(document).height() - 50),
            rLeft = Math.floor(Math.random() * ($(document).width() - 50)),
            rSize = Math.floor(Math.random() * (37 - 14) + 14);
        $("<span class='temp'></span>").html(food).hide().css({
            "top": rTop+"px",
            "left": rLeft+"px",
            "color": "rgba(0,0,0,." + Math.random() + ")",
            "fontSize": rSize + "px"
        }).appendTo("body").fadeIn("slow", function () {
            $(this).fadeOut("slow", function () {
                $(this).remove();
            })
        })
    }

    $("#start").click(function () {

        if(run!==3){
            $("#start").hide();//隐藏开始标签
            $("#stop").show();//展示停止标签
            $("#content").text("今天这顿吃：");//只替换文本内容
            timer = setInterval(f, 50);//定时器

            $("#stop").click(function () {
                $(this).hide();
                $("#start").show();
                clearInterval(timer);
            });
            run++;
            switch (run) {
                case 1:
                    $("#start").val("不满意？再来一次π_π");
                    break;
                case 2:
                    $("#start").val("我不服！再来╰（‵□′）╯ ");
                    break;
                case 3:
                    $("#start").val("再点就别吃了(；一_一)");
                    break;
            }
        }
    })
})

$(function(){
    document.onkeydown = function(e){
        const ev = document.all ? window.event : e;
        if(ev.keyCode==13) {
            $('#start').trigger("click");//处理事件
        }
    }
});