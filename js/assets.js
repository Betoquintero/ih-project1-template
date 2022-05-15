const task1 = new Image();
task1.src = './img/task1.png';

const task2 = new Image();
task2.src = './img/task2.png';

const task3 = new Image();
task3.src = './img/task3.png';

const obstacle1 = new Image();
obstacle1.src = './img/burgershop.png';

const obstacle2 = new Image();
obstacle2.src = './img/hospital.png';

const obstacle3 = new Image();
obstacle3.src = './img/centro-comercial.png';

const winSound = new Audio();
winSound.src = './sounds/winMusic.mp3';

const themeSound = new Audio ();
themeSound.src = './sounds/theme.mp3'

const battleSound = new Audio ();
battleSound.src = './sounds/wild-battle.mp3'

const pickupSound = new Audio ();
pickupSound.src = './sounds/pickup.mp3'

const playerDownImage = new Image();
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image();
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image();
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image();
playerRightImage.src = './img/playerRight.png'




//array de alerts que son objetos con opciones que son objetos y cada opcion tiene el text y soy la correcta
//funcion que va en game "showAlert" ==> me bloquea movimiento y hago create element que sera un div, hago un math.random del array de alerts. 
//se hace un forEach "opcion" que genere un (button) y forEach "button" le ponemos un onclick. y el onclick recibe como parametro el parametro "si soy correcto"
// en el onclick. llamo a la funcion que sea "checkAnswer", recibe que soy correcto if (correcto puedo seguir)

