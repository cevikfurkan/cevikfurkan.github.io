// stick değişkenleri
var stickLeft = document.getElementById('stickLeft');
var stickRight = document.getElementById('stickRight');
// ball değişkenleri
var ball = document.getElementById('ball');

// puan değişkenleri
var scoreLeft = 0;
var scoreRight = 0;

stickLeft.style.top = window.innerHeight/2 + 'px';
stickRight.style.top = window.innerHeight/2 + 'px';
ball.style.top = window.innerHeight/2 + 'px';
ball.style.left = (window.innerWidth/2) - (16/2) + 'px';

var ballTop = 0;
var ballLeft = 0; 
var gameSpeed = 20;

function pxAdd(numb){
	return numb + 'px';
}

// oyuncuların yönlendireceği çubuklar
document.onkeydown = function(e){
	switch(e.keyCode){
		// sol çubuk
		case 87:
			if(parseInt(stickLeft.style.top) <= 0){
				stickLeft.style.top = stickLeft.style.top;
			}else{
				stickLeft.style.top = pxAdd(parseInt(stickLeft.style.top) - 30);
			}
			break;
		case 83:
			if(parseInt(stickLeft.style.top) + 85 >= window.innerHeight){
				stickLeft.style.top = stickLeft.style.top;
			}else{
				stickLeft.style.top = pxAdd(parseInt(stickLeft.style.top) + 30);
			}
			break;
		// sağ çubuk
		case 38:
			if(parseInt(stickRight.style.top) <= 0){
				stickRight.style.top = stickRight.style.top;
			}else{
				stickRight.style.top = pxAdd(parseInt(stickRight.style.top) - 30);
			}
			break;
		case 40:
			if(parseInt(stickRight.style.top) + 85 >= window.innerHeight){
				stickRight.style.top = stickRight.style.top;
			}else{
				stickRight.style.top = pxAdd(parseInt(stickRight.style.top) + 30);
			}
			break;
		default: 
	}
}
gameChain();

// oyunun sürekli devam etmesi için gerekli yapı
function gameLoop(){
	// topun alacağı değerler
	ball.style.top = pxAdd(parseInt(ball.style.top) + ballTop);
 	ball.style.left = pxAdd(parseInt(ball.style.left) + ballLeft);

 	// top üst ve alt bloklara çarparsa, X ekseninde geri seksin
	if(parseInt(ball.style.top) <= 0 || parseInt(ball.style.top) + 16 >= window.innerHeight){
		ballTop *= -1;
	}

	// top sağ ve sol çubuklara çarparsa, Y ekseninde geri seksin
	if(parseInt(ball.style.left) <= 0 + 16 && parseInt(ball.style.top)  >= parseInt(stickLeft.style.top) && parseInt(ball.style.top) <= parseInt(stickLeft.style.top) + 85){
		ballLeft *= -1;
	}else if(parseInt(ball.style.left) + 16 >= window.innerWidth - 12 && parseInt(ball.style.top) >= parseInt(stickRight.style.top) && parseInt(ball.style.top) <= parseInt(stickRight.style.top) + 85){
		ballLeft *= -1;		
	}

	if(parseInt(ball.style.left) <= 0){
		if(++scoreRight === 5){
			alert('2. oyuncu kazandı.');
			scoreRight = 0;
			scoreLeft = 0;
			document.getElementById('scoreLeft').innerHTML = scoreLeft;
		}
		document.getElementById('scoreRight').innerHTML = scoreRight;
		gameChain();
	}

	if(parseInt(ball.style.left) + 16 >= window.innerWidth){
		if(++scoreLeft === 5){
			alert('1. oyuncu kazandı.');
			scoreRight = 0;
			scoreLeft = 0;
			document.getElementById('scoreRight').innerHTML = scoreRight;
		}
		document.getElementById('scoreLeft').innerHTML = scoreLeft;
		gameChain();
	}
}

function gameChain(){
	ball.style.top =  window.innerHeight/2 + 'px';
	ball.style.left = (window.innerWidth/2) - (16/2) + 'px';
 	
	var rnd = Math.random()*3+2;

	if(Math.random()*1 > 0.5){
		rnd *= -1;		
	}

	ballLeft = rnd;
	ballTop = rnd;
}

setInterval(gameLoop, gameSpeed);