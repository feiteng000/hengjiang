window.onload = function(){
	var oList = document.getElementById("dh");
	var oLi = oList.getElementsByTagName("li");
	var oLiLenght = oLi.length;
	var oShow = document.getElementsByClassName("show");
	var oShowLenght = oShow.length;

	for(var i=0;i<oLi.length;i++){  //循环历遍onclick事件
        oLi[i].index=i; //input[0].index=0 index是自定义属性
        oLi[i].onclick=function(){
        for(var i=0;i<oLiLenght;i++){  //循环历遍去掉button样式和把div隐藏
            oLi[i].className='';
            oShow[i].style.display='none';
            };
        this.className='active';  //当前按钮添加样式
        oShow[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
           };
        };

}
