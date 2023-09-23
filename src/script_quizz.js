const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgary-btn');
const goHomeBtn = document.querySelector('.goHome-btn');


startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1){
    questionCount++;
    showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
    }
    else{
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

//getting questions and options from array
function showQuestions(quiz){
    const questionText = document.querySelector('.question-text'); // 49:00 
    questionText.textContent = `${questions[quiz].numb}. ${questions[quiz].question}`;

    let optionTag = `<div class="option"><span>${questions[quiz].options[0].text}</span></div>
    <div class="option"><span>${questions[quiz].options[1].text}</span></div>
    <div class="option"><span>${questions[quiz].options[2].text}</span></div>`;


    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

let userAnswers = []; // Array para almacenar las respuestas del usuario

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let questionIndex = questionCount; // Índice de la pregunta actual
    let correctAnswer = questions[questionIndex].options.find(option => option.text === userAnswer).answer;
    let allOptions = optionList.children.length;
    let isCorrect = userAnswer === correctAnswer;

    // Quitar la clase "correct" de cualquier opción que ya la tenga
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.remove('correct');
    }

    // Agregar la clase "correct" a la nueva opción seleccionada
    answer.classList.add('correct');

    // Almacenar la RESPUESTA del usuario en el array userAnswers
    userAnswers[questionIndex] = correctAnswer; // Almacena la respuesta correcta correspondiente

    // Deshabilitar todas las opciones después de seleccionar una respuesta
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
    function showUserAnswers() {
    console.log("Respuestas del usuario:", userAnswers);
}

// Llamar a la función para mostrar las respuestas almacenadas
showUserAnswers();
}

function questionCounter(quiz){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${quiz} of ${questions.length} Questions`;
}

function showResultBox(){
    enviarDatos();
    quizBox.classList.remove('active');
    resultBox.classList.add('active');
}
function enviarDatos(){
    calcularPorcentaje();
    const Data = {
        programacion: progScore,
        web: webScore,
        baseDatos: baseDatoScore,
        hardware: hardScore,
        redes: redScore
      };
    
      fetch('/src/insert.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Data)
      })
        .then(response => {
          if (response.ok) {
            // La solicitud se realizó correctamente
            console.log('Porcentajes enviados correctamente');
          } else {
            // Manejar el caso de una respuesta no exitosa
            console.error('Error en la solicitud:', response.status);
          }
        })
        .catch(error => {
          // Capturar cualquier error en la solicitud
          console.error('Error en la solicitud:', error);
        });
    updateScore();
}
let progScore = 0;
let webScore = 0;
let baseDatoScore = 0;
let redScore = 0;
let hardScore = 0;
function calcularPorcentaje() {
    progScore = 0;
    webScore = 0;
    baseDatoScore = 0;
    redScore = 0;
    hardScore = 0;
    const answerScoreMap = {
        "pA": 2, "pB": 1,
        "bdA": 2, "bdB": 1,
        "wA": 2, "wB": 1,
        "hA": 2, "hB": 1,
        "rA": 2, "rB": 1
    };

    for (var i = 0; i < userAnswers.length; i++) {
        const answer = userAnswers[i];
        if (answerScoreMap.hasOwnProperty(answer)) {
            const scoreIncrement = answerScoreMap[answer];
            switch (answer.charAt(0)) {
                case "p": progScore += scoreIncrement; break;
                case "b": baseDatoScore += scoreIncrement; break;
                case "w": webScore += scoreIncrement; break;
                case "h": hardScore += scoreIncrement; break;
                case "r": redScore += scoreIncrement; break;
            }
        }
    }
    progScore = (progScore / 10) * 100;
     webScore= (webScore / 10) * 100;
     baseDatoScore = (baseDatoScore / 10) * 100;
     hardScore = (hardScore / 10) * 100;
     redScore = (redScore / 10) * 100;
     console.log("prog: " + progScore);
     console.log("web: " + webScore);
     console.log("base: " + baseDatoScore);
     console.log("hard: " + hardScore);
     console.log("red: " + redScore);
}
let Category = '';
let Score = 0;
function updateScore() {
    const scores = {
        programacion: progScore,
        web: webScore,
        baseDatos: baseDatoScore,
        hardware: hardScore,
        redes: redScore
    };

    // Find the category with the highest score
 highestCategory = Category;
highestScore = Score;
    for (const category in scores) {
        if (scores[category] > highestScore) {
            highestScore = scores[category];
            highestCategory = category;
        }
    }
    const h2Element = document.getElementById('vocacion');
    const porcentajeSpan = document.getElementById('porcentaje');
    porcentajeSpan.innerText= `${highestScore}%`;
    // Set the data-target and text content based on the highest category
    switch (highestCategory) {
        case 'programacion':
            h2Element.innerText = `Programacion`;
            break;
        case 'web':
            h2Element.innerText = `Web`;
            break;
        case 'baseDatos':
            h2Element.innerHTML = `Database`;
            break;
        case 'hardware':
            h2Element.innerHTML = `Hardware`;
            break;
        case 'redes':
            h2Element.innerHTML = `Redes`;
            break;
        default:
            break;
    }
    console.log(highestScore);
    console.log(highestCategory)
}
// barra de porcentaje 
const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for (var i = 1; i <= 100; i++) {
    rating.innerHTML += "<div class='block'></div>";
    block[i - 1].style.transform = "rotate(" + (3.6 * i) + "deg)";
    block[i - 1].style.animationDelay = `${i / 40}s`;
}

const counter = document.querySelector('.counter');
counter.innerHTML = 0;

const target = Score;  // Cambia el target al valor deseado


