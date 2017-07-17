/**
 * Created by qing on 2017/7/12.
 */
window.onload = function(){
    //导航单击事件
    var oList = document.getElementById("dh");
    var oLi = oList.getElementsByTagName("li");
    var oLiLenght = oLi.length;
    var oShow = document.getElementsByClassName("show");
    var oBj = document.getElementById("bj");
    for(var i=0;i<oLi.length;i++){  //循环历遍onclick事件
        oLi[i].index=i; //oLi[0].index=0 index是自定义属性
        oLi[i].onclick=function(){
            var o = this.index;
            for(var i=0;i<oLiLenght;i++){  //循环历遍去掉li样式和把div隐藏
                oLi[i].className='';
                oShow[i].style.display = 'none';
            }
            this.className='dh_now';  //当前按钮添加样式
            oShow[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
        };
    }





//show1动画
// var oCleList = document.getElementById("circle");
// var oCle = oCleList.getElementsByTagName("div");
// console.log(oCle);
// for (var j=0;j<oCle.length;j++){
//     oCle[j].index=j;
//     oCle[j].onclick = function () {
//         oCle[this.index].className += ' animated pulse';
//         console.log(oCle[this.index]);
//     };
// }

//show2动画
var oSUl = document.getElementById("sUl");
var oSLi = oSUl.getElementsByTagName("li");
for (var j=0;j<oSLi.length;j++){
    oSLi[j].index=j;
    oSLi[j].onmouseover = function () {
        oSLi[this.index].className = 'animated pulse';
    };
    oSLi[j].onmouseout = function () {
        oSLi[this.index].className = '';
    };
}


//show3单击事件
    var oNavList = document.getElementById("show3_nav");
    var oNav = oNavList.getElementsByTagName("nav");
    var oS3Art = document.getElementById("s3_art");
    var oS3AtrShow = oS3Art.getElementsByTagName("div");
    for(var p=0;p<oNav.length;p++){
        oNav[p].index=p;
        oNav[p].onclick=function(){
            var o = this.index;
            for(var p=0;p<oS3AtrShow.length;p++){
                oS3AtrShow[p].className='';
                oNav[p].style.color = '#404040';
            }
            oS3AtrShow[this.index].className +=' s3_art';
            this.style.color = 'white';
        };
    }



};