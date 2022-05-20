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

const playerDownImage1 = new Image();
playerDownImage1.src = './img/animation/playerDown1.png'

const playerDownImage2 = new Image();
playerDownImage2.src = './img/animation/playerDown2.png'

const playerDownImage3 = new Image();
playerDownImage3.src = './img/animation/playerDown3.png'

const playerDownImage4 = new Image();
playerDownImage4.src = './img/animation/playerDown4.png'

const playerUpImage1 = new Image();
playerUpImage1.src = './img/animation/playerUp1.png'

const playerUpImage2 = new Image();
playerUpImage2.src = './img/animation/playerUp2.png'

const playerUpImage3 = new Image();
playerUpImage3.src = './img/animation/playerUp3.png'

const playerUpImage4 = new Image();
playerUpImage4.src = './img/animation/playerUp4.png'

const playerLeftImage1 = new Image();
playerLeftImage1.src = './img/animation/playerLeft1.png'

const playerLeftImage2 = new Image();
playerLeftImage2.src = './img/animation/playerLeft2.png'

const playerLeftImage3 = new Image();
playerLeftImage3.src = './img/animation/playerLeft3.png'

const playerLeftImage4 = new Image();
playerLeftImage4.src = './img/animation/playerLeft4.png'

const playerRightImage1 = new Image();
playerRightImage1.src = './img/animation/playerRight1.png'

const playerRightImage2 = new Image();
playerRightImage2.src = './img/animation/playerRight2.png'

const playerRightImage3 = new Image();
playerRightImage3.src = './img/animation/playerRight3.png'

const playerRightImage4 = new Image();
playerRightImage4.src = './img/animation/playerRight4.png'

const walkStepsDown = [playerDownImage1,playerDownImage1, playerDownImage1, playerDownImage1, playerDownImage2, playerDownImage2, playerDownImage2, playerDownImage2, playerDownImage2, playerDownImage3, playerDownImage3, playerDownImage3, playerDownImage3, playerDownImage4, playerDownImage4, playerDownImage4, playerDownImage4]

const walkStepsUp = [playerUpImage1, playerUpImage1, playerUpImage1, playerUpImage1, playerUpImage2, playerUpImage2, playerUpImage2, playerUpImage2, playerUpImage3, playerUpImage3, playerUpImage3, playerUpImage3, playerUpImage4, playerUpImage4, playerUpImage4, playerUpImage4 ]

const walkStepsLeft = [playerLeftImage1, playerLeftImage1, playerLeftImage1, playerLeftImage1, playerLeftImage2, playerLeftImage2, playerLeftImage2, playerLeftImage2, playerLeftImage3, playerLeftImage3, playerLeftImage3, playerLeftImage3, playerLeftImage4, playerLeftImage4, playerLeftImage4, playerLeftImage4]

const walkStepsRight = [playerRightImage1, playerRightImage1, playerRightImage1, playerRightImage1, playerRightImage2, playerRightImage2, playerRightImage2, playerRightImage2, playerRightImage3, playerRightImage3, playerRightImage3, playerRightImage3, playerRightImage4, playerRightImage4, playerRightImage4, playerRightImage4]




//array de alerts que son objetos con opciones que son objetos y cada opcion tiene el text y soy la correcta
//funcion que va en game "showAlert" ==> me bloquea movimiento y hago create element que sera un div, hago un math.random del array de alerts. 
//se hace un forEach "opcion" que genere un (button) y forEach "button" le ponemos un onclick. y el onclick recibe como parametro el parametro "si soy correcto"
// en el onclick. llamo a la funcion que sea "checkAnswer", recibe que soy correcto if (correcto puedo seguir)

