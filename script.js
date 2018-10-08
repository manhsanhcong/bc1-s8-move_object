/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;


  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(speed){
    this.left += speed;
    console.log('ok: ' + this.left);
  }
  this.moveLeft = function(speed){
    this.left -= speed;
    console.log('ok: ' + this.left);
  }
  this.moveTop = function(speed){
    this.top += speed;
    console.log('ok: ' + this.left);
  }
  this.moveBot = function(speed){
    this.top -= speed;
    console.log('ok: ' + this.left);
  }
}

var hero = new Hero('doremon1.png', 20, 30, 200,);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight(80);
    hero.moveBot(20);
    hero.moveLeft(30);
    hero.moveTop(60);

  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();