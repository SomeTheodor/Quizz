//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues=0;
var lang;
var score=0;

var HTMLquestions=[
        {
          question: "¿Qué tipo de lenguaje es HTML?",
          choices: [
            "Lenguaje de Secuencias de Comandos",
            "Lenguaje de Marcado",
            "Lenguaje de Programación",
            "Protocolo de Red",
          ],
          answer: 1,
        },
        {
          question: "HTML utiliza:",
          choices: [
            "Etiquetas definidas por el usuario",
            "Etiquetas predefinidas",
            "Etiquetas fijas definidas por el lenguaje",
            "Etiquetas solo para enlaces",
          ],
          answer: 2,
        },
        {
          question: "¿En qué año se propuso por primera vez HTML?",
          choices: ["1990", "1980", "2000", "1995"],
          answer: 0,
        },
        {
          question: "Además de la etiqueta 'b', ¿qué otra etiqueta hace que el texto esté en negrita?",
          choices: ["'fat'", "'strong'", "'black'", "'emp'"],
          answer: 1,
        },
        {
          question: "¿Cómo se puede hacer una lista con viñetas numeradas?",
          choices: ["'dl'", "'ol'", "'list'", "'ul'"],
          answer: 1,
        },
        {
          question: "¿Qué etiqueta se utiliza para mostrar una imagen en una página HTML?",
          choices: ["'picture'", "'image'", "'pic'", "'img'"],
          answer: 3,
        },
        {
          question: "Las páginas web HTML pueden ser leídas e interpretadas por:",
          choices: ["Compilador", "Servidor", "Navegador Web", "Intérprete"],
          answer: 2,
        },
        {
          question: "¿Cuál de las siguientes opciones no es un navegador?",
          choices: ["Microsoft Bing", "Netscape Navigator", "Mozilla Firefox", "Opera"],
          answer: 0,
        },
        {
          question: "¿En qué tipo de corchetes están rodeadas las etiquetas HTML?",
          choices: ["Corchetes Curvos", "Corchetes Redondos", "Corchetes Cuadrados", "Corchetes Angulares"],
          answer: 3,
        },
        {
          question: "Las etiquetas y texto que no se muestran directamente en la página se escriben en la sección:",
          choices: ["'head'", "'title'", "'body'", "'html'"],
          answer: 0,
        },
      ];

var CSSquestions=[
    {
        question: "Si queremos definir estilos para un elemento único, ¿qué selector CSS utilizaremos?",
        choices: ["Id", "text", "class", "name"],
        answer: 0,
      },
      {
        question: "Si no queremos permitir un div flotante en el lado izquierdo de un elemento, ¿qué propiedad CSS utilizaremos?",
        choices: ["margin", "clear", "float", "padding"],
        answer: 2,
      },
      {
        question: "Supongamos que queremos organizar cinco DIVs de manera que DIV4 se coloque encima de DIV1. Ahora, ¿qué propiedad CSS utilizaremos para controlar el orden de apilamiento?",
        choices: ["d-inex", "s-inex", "x-inex", "z-inex"],
        answer: 3,
      },
      {
        question: "¿Podemos alinear un elemento de bloque configurando los márgenes izquierdo y derecho?",
        choices: ["Sí, podemos", "No es posible", "Depende del navegador", "Depende del sistema operativo"],
        answer: 1,
      },
      {
        question: "Si queremos que un bloque de texto se ajuste alrededor de una imagen, ¿qué propiedad CSS utilizaremos?",
        choices: ["wrap","push","float","align"],
        answer: 2,
      },
      {
        question: "Si queremos mostrar una flecha como cursor, ¿qué valor utilizaremos?",
        choices: ["pointer","default","arrow","arr"],
        answer: 1,
      },
      {
        question: "Si queremos usar un borde punteado verde con buen aspecto alrededor de una imagen, ¿qué propiedad CSS utilizaremos?",
        choices: ["border-color","border-decoration","border-style","border-line"],
        answer: 2,
      },
      {
        question: "¿Cuál de las siguientes propiedades utilizaremos para mostrar un borde alrededor de una celda sin ningún contenido?",
        choices: ["empty-cell","blank-cell","noncontent-cell","void-cell"],
        answer: 0,
      },
      {
        question: "¿Cuál debería ser el ancho de una tabla para que se ajuste al ancho actual de la ventana del navegador?",
        choices: ["640 pixels","100%","full-screen","1024px"],
        answer: 1,
      },
      {
        question: "¿Cómo podemos escribir comentarios junto con el código CSS?",
        choices: ["/* un comentario */", "// un comentario //", "/ un comentario /", "<' un comentario '>"],
        answer: 0,
      },
    ];

var JSquestions=[
    {
        question: "¿Cuál de las siguientes afirmaciones es cierta acerca de las convenciones de nombramiento de variables en JavaScript?",
        choices: [
          "Los nombres de variables en JavaScript deben comenzar con una letra o el carácter de subrayado (_).",
          "Los nombres de variables en JavaScript distinguen entre mayúsculas y minúsculas.",
          "Ambas son correctas.",
          "Ninguna de las anteriores.",
        ],
        answer: 2,
      },
      {
        question: "¿Cuál de las siguientes choices es un objeto de Java Script en el lado del servidor?",
        choices: ["Function","File","FilleUpload","Data"],
        answer: 2,
      },
      {
        question: "JavaScript se puede utilizar para almacenar el contenido de un formulario en un archivo de base de datos en el servidor.",
        choices: ["Falso","Verdadero"],
        answer: 1,
      },
      {
        question: "¿Cómo almacena JavaScript las fechas en objetos de tipo Fecha?",
        choices: [
          "El número de días desde el 1 de enero de 1900.",
          "El número de segundos desde el 1 de enero de 1970.",
          "El número de milisegundos desde el 1 de enero de 1970.",
          "El número de picosegundos desde el 1 de enero de 1970.",
        ],
        answer: 2,
      },
      {
        question: "JavaScript no admite el ámbito de bloque al estilo C.",
        choices: ["Falso","Verdadero"],
        answer: 2,
      },
      {
        question: "JavaScript ignora los espacios adicionales en la sintaxis.",
        choices: ["Verdadero","Falso"],
        answer: 2,
      },
      {
        question: "¿Cuál de las siguientes propiedades es una propiedad contaminada de un objeto de ventana en JavaScript?",
        choices: ["Pathname","Protocol","Defaultststus","Host"],
        answer: 2,
      },
      {
        question: "¿Qué atributo debe modificarse para que los elementos sean invisibles?",
        choices: ["visibilty","visible","invisible", "Ninguna de las anteriores"],
        answer: 0,
      },
      {
        question: "JavaScript es un lenguaje orientado a objetos.",
        choices: ["Falso", "Verdadero"],
        answer: 2,
      },
      {
        question: "¿Cuál es el nombre alternativo para JavaScript?",
        choices: ["LimeScript", "ECMScript", "Ambos son correctos", "ECMAScript"],
        answer: 3,
      },
    ];
var PYquestions=[
    {
        question: "¿Cuál es la salida del siguiente programa: print('Hello World'[::-1])?",
        choices: ["dlroW olleH", "Hello Worl", "d", "Error"],
        answer: 0,
      },
      {
        question: "Dada una función que no devuelve ningún valor, ¿qué valor se muestra cuando se ejecuta en la consola?",
        choices: ["int", "bool", "void", "Ninguno"],
        answer: 3,
      },
      {
        question: "¿Qué módulo en Python admite expresiones regulares?",
        choices: ["re", "regex", "pyregex", "Ninguno de los anteriores"],
        answer: 0,
      },
      {
        question: "¿Cuál es la salida del siguiente programa: (pregunta complicada) print (0.1 + 0.2 == 0.3)?",
        choices: ["Verdadero", "Falso", "Dependiente de la máquina", "Error"],
        answer: 1,
      },
      {
        question: "¿Cuál de las siguientes opciones no es un número complejo?",
        choices: ["k = 2 + 3j", "k = complex(2, 3)", "k = 2 + 3l", "k = 2 + 3J"],
        answer: 2,
      },
      {
        question: "¿A qué evalúa ~~~~~~5?",
        choices: ["+5", "-11", "+11", "-5"],
        answer: 0,
      },
      {
        question: "Dada una cadena s = 'Bienvenido', ¿cuál de los siguientes códigos es incorrecto?",
        choices: ["print s[0]", "print s.lower()", "s[1] = 'r'", "print s.strip()"],
        answer: 2,
      },
      {
        question: "________ es una versión simple pero incompleta de una función.",
        choices: ["Stub", "Function", "Una función desarrollada utilizando el enfoque de abajo hacia arriba", "Una función desarrollada utilizando el enfoque de arriba hacia abajo"],
        answer: 0,
      },
      {
        question: "Para iniciar Python desde la línea de comandos, utiliza el comando ______",
        choices: ["execute python","go python","python","run python"],
        answer: 2,
      },
      {
        question: "¿Cuál de las siguientes afirmaciones es correcta acerca de Python?",
        choices: ["Admite la recolección automática de basura.", "Se puede integrar fácilmente con C, C++, COM, ActiveX, CORBA y Java", "Ambas son correctas", "Ninguna de las anteriores"],
        answer: 2,
      },
    ];
var Cquestions=[
    {
        question: "El lenguaje C fue desarrollado en el año ____",
        choices: ["1970", "1975", "1980", "1985"],
        answer: 1,
      },
      {
        question: "¿Cuál de los siguientes no es una palabra clave reservada en el lenguaje C?",
        choices: ["auto", "main", "case", "register"],
        answer: 2,
      },
      {
        question: "Un nombre de variable en C puede comenzar con un ____",
        choices: ["Número", "Signo más", "Guion bajo", "Asterisco"],
        answer: 2,
      },
      {
        question: "El prototipo de una función significa _____",
        choices: ["Nombre de la función", "Salida de la función", "Declaración de la función", "Entrada de la función"],
        answer: 2,
      },
      {
        question: "¿Cómo se llama el bucle que se ejecuta al menos una vez?",
        choices: ["for", "if", "do-while", "while"],
        answer: 2,
      },
      {
        question: "Un puntero lejano (far pointer) puede acceder a _____",
        choices: ["Una única ubicación de memoria", "Ninguna ubicación de memoria", "Todas las ubicaciones de memoria", "La primera y última dirección de memoria"],
        answer: 2,
      },
      {
        question: "Un puntero que apunta a una ubicación de memoria de una variable incluso después de la eliminación de la variable se conoce como _____",
        choices: ["Puntero lejano (far pointer)", "Puntero inestable (dangling pointer)", "Puntero nulo (null pointer)", "Puntero vacío (void pointer)"],
        answer: 1,
      },
      {
        question: "Un puntero no inicializado en C se llama ___",
        choices: ["Constructor", "Puntero inestable (dangling pointer)", "Puntero salvaje (wild pointer)", "Destructor"],
        answer: 2,
      },
      {
        question: "Un puntero que apunta a NADA se llama ____",
        choices: ["Puntero VACÍO (VOID Pointer)", "Puntero INESTABLE (DANGLING Pointer)", "Puntero NULO (NULL Pointer)", "Puntero SALVAJE (WILD Pointer)"],
        answer: 2,
      },
      {
        question: "¿Quién es conocido como el padre del lenguaje C?",
        choices: ["Digvijay", "James A. Sosling", "Dr. E. F. Codd", "Dennis Ritchie"],
        answer: 3,
      },
    ];


//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";


document.querySelector(".choose-lang").addEventListener("click",function(){

    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    
//    window.location.href="#score";

});


document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){  
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
    }else{
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";

    }
    
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
        
    };/*For loop Closed*/
    console.log();
});

document.querySelector(".view-results").addEventListener("click",function(){
    document.querySelector(".final-result").style.display="block";
    document.querySelector(".solved-ques-no").innerHTML="Resolviste "+(countQues+1)+" preguntas de "+document.getElementById("language").value;
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    document.querySelector(".right-wrong").innerHTML=correct+" estaban Bien y "+((countQues+1)-correct)+" estaban Mal";
    document.getElementById("display-final-score").innerHTML="Tu puntaje final es: "+score;
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Observacion: Sobresaliente! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Observacion: Muy Bien, continua mejorando.";
    
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Observacion: aceptable, sigue aprendiendo.";
    }else{
        document.querySelector(".remark").innerHTML="Observacion: Mala, intentalo otra vez.";
    }
    
//    window.location.href="#display-final-score";

});

document.querySelector(".view-results").addEventListener("click",function(){
    lang=document.getElementById("language").value;
let cssScore, cScore;
let jsScore, pyScore, htmlScore;
    switch(lang){
        case "HTML": htmlScore = score;
        break;
        case "JS": jsScore = score;
        break;
        case "C": cScore = score;
        break;
        case "CSS": cssScore = score;
        break;
        case "PY": pyScore = score;
        break;
    } 
    let Data = {
        js: jsScore,
        html: htmlScore,
        python: pyScore,
        c: cScore,
        css: cssScore
      };
    console.log(Data);
      fetch('/src/insertQuiz.php', {
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

});

document.getElementById("restart").addEventListener("click",function(){
    location.reload();

});

/*Smooth Scroll*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
/*Smooth Scroll End*/
