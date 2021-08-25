$(function () {
    let i = 0;
    $("#start").click(function (){
        i++;
        if(i>3){
            alert("别吃了！饿死算了！")
        }
    })
})