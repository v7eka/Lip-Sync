
var buffer = 'hello world ', ctx, interval, mouth = [], index = 0;
var canvas = document.getElementById("canvas");

function alphaOnly(e){
	var key = e.keyCode;
	return ((key >= 65 && key <=90) || key == 8 || key ==32);
}
function disable(){
	document.getElementById("text").disabled = true;
	document.getElementById("submit").disabled = true;
	parse();
}
function bufferFunc(text){
	buffer = text.value+' ' || 'hello world ';
}
function parse(){
	for(var i = 0; i < buffer.length; i ++){
		lipSync(buffer.charAt(i));
	}
	speak();
}
function lipSync(char){
	switch(char){
		case 'a': case 'e': case 'i': case 'u': mouth.push('svg/a e i u.svg'); break;
		case 'f': case 'v':	mouth.push('svg/f v.svg'); break;
		case 'e': case 'y': mouth.push('svg/e y.svg'); break;
		case 'k': case 'g': case 'h': mouth.push('svg/k g h.svg'); break;
		case 'm': case 'b': case 'p': case ' ': mouth.push('svg/m b p.svg'); break;
		case 'o': case 'u': case 'q': mouth.push('svg/o u q.svg'); break;
		case 'r': case 'l': case 'w': mouth.push('svg/r l w.svg'); break;
		case 's': case 'c': case'z': case 'd': case 'n': case 'g': case 'j': mouth.push('svg/s c z d n g j.svg'); break;
		case 't': mouth.push('svg/t.svg'); break;
		default : console.log('nope');
	}
}
function drawImage(url){
	var img = new Image;
	img.onload = function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
  		ctx.drawImage(img,0,0);
	};
	img.src = url;
}
function speak(){
	drawImage(mouth[index]);
	console.log(mouth[index]);
	if(index < mouth.length - 1){ 
		interval = setTimeout("speak()",1000);	
		index++; 
	}else clearTimeout(interval);
}
function draw(){
	var startImg = document.getElementById('start');
	if(ctx = canvas.getContext('2d')){
		ctx.drawImage(startImg,0,0);
	}
}
window.onload = draw();
