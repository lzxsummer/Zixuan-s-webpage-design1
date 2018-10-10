
//实现在js里替换h1的内容。

// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Cyberpunk 2018';

//在网页未打开前就执行判断，弹出对话框

// var a1 = 'a';
// if (a1 === 'b') {
// 	alert('fuck');
// } else {
// 	alert('cazzo');
// }

//实现乘法

function multiply(num1,num2) {
	var result = num1 * num2;
	return result;
}

//实现点击页面弹出框

// document.querySelector('html').onclick = function function_name(argument) {
// 	alert('shit!');
// }

//实现点击图片，图片转换

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'img/1-2.png'){
		myImage.setAttribute('src','img/1-1.png');
	} else {
        myImage.setAttribute('src','img/1-2.png');
	}
}

//合法的变量标识符示例：Number_hits，temp99，$credit 和 _name。


//实现简单的用户登记

// var myButton = document.querySelector('button');//抓取按钮的内容，存在变量myButton里
// var myHeading = document.querySelector('h1');//抓取标题的内容，存在变量myHeading里

// function setUserName(){
// 	var myName = prompt('Please enter your name.');//prompt函数：会和alert一样跳出对话框，但是prompt是要求用户输入数据
// 	localStorage.setItem('name',myName);
// 	myHeading.textContent = 'Evan is cool,' + myName;
// }

// if(!localStorage.getItem('name')){
// 	setUserName();
// } else {
// 	var storedName = localStorage.getItem('name');
// 	myHeading.textContent = 'Welcome back, '+ storedName; 
// }

// myButton.onclick = function() {
// 	setUserName();
// }

//实现图片渐隐转换效果
