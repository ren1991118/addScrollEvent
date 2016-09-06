
//js  鼠标滚轮分装函数
function addScrollEvent (obj,handle){
	//obj 将来调用函数的时候，传递进来的标签名（需要把滚轮事件绑定到此标签上）
	var isFF = navigator.userAgent.indexOf("Firefox");
		if (isFF != -1) {
			obj.addEventListener("DOMMouseScroll",scrollFun,false);
		} else{
			obj.onmousewheel = scrollFun;
		}
		
	function scrollFun (event){
		var ev = event || window.event;
		var down;
		if (isFF != -1) {
			down = ev.detail > 0;
		} else{
			down = ev.wheelDelta < 0;
		}
		handle(down);
	}
}

//调用方法
addScrollEvent(obj,callback);