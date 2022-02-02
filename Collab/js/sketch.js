// uitleg project collab: Bij mijn project voor interactive design kan je bij een 
//mouseClick een geheel eigen collab screensaver krijgen. Door de rotaties van alle 
//hexagons is het bijna onmogelijk om 2x dezelfde screenshot te nemen.
//Met dit project kan je in de toekomst ook opkomende drops of collabs laten zien door 
//de middelste hexagon te gebruiken en daar of de tijf of het logo van een bedrijf te 
//laten zien. Kleuren kunnen aangepast worden naar de huisstijl kleuren van dat 
//desbetreffende project.

let snelheid = 1;
let seed;

function preload() {
  hexagon = loadModel('object/hex.obj', true);
  }

function setup() {
  createCanvas(1135, 580, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  randomSeed(10000000);
  background(0);

  for (let i = 0; i < 5; i++) {
    for(let j = 0; j < 3; j++){
    if (i==2&& j==1){
      push();
      translate((-width/2) + (i * 243) + 100, (-height/2) + (j * 222) + 60);
      cool();
      pop();
    }
    else{  
      push();
      translate((-width/2) + (i * 243) + 100, (-height/2) + (j * 222) + 60);
      hexa();
      pop();
    }
   }
  }
}

function hexa (){
  scale(1.03);
  var plusOrMinus = random(1) < 0.5 ? -1 : 1;
  rotateZ(frameCount * random(0.5,1.3) *plusOrMinus);
  rotateY(frameCount * random(0.5,1.3) *plusOrMinus);
  rotateX(frameCount * random(0.5,1.3) *plusOrMinus);
  pointLight(0,0,-255,-200,0);
  directionalLight(0,91,125,200,0);
  directionalLight(255,126,185,-200,0);
  normalMaterial();
  ambientLight(150);
  ambientMaterial(150, 150, 150);
  model(hexagon);
}

function cool (){
  scale(1.03);
  var plusOrMinus = random(1) < 0.5 ? -1 : 1;
  pointLight(0,0,mouseX-255,mouseY-200,0);
  pointLight(256,256,256,-400,0,-400);
  directionalLight(0,91,125,200,0);
  directionalLight(255,126,185,-200,0);
  rotateX(-15);
  rotateY(7);
  normalMaterial();
  ambientLight(100);
  ambientMaterial(256);
  model(hexagon);
}

function mouseClicked(){
save('collab-screensaver-.png');
}