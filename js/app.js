//Función que creará primer Input
var make = function () {
var  inputDefault = document.createElement('input');
inputDefault.placeholder = 'Añadir una lista';
var mainSection = document.getElementById('main-section');
mainSection.appendChild(inputDefault);

//Crear evento para crear formulario
var itemForm = function () {
    inputDefault.style.display = 'none';
var formContainer = document.createElement('div');
var form = document.createElement('form');
var formInput = document.createElement('input');
var formBtn = document.createElement('button');
var formDelete = document.createElement('span');

//crear atributos
formContainer.style.backgroundColor =  'gray';
formContainer.classList.add('form-container');
formInput.placeholder = 'Añadir lista dos';
formBtn.innerText = 'Guardar';
formDelete.innerText = 'X';

//agregando al HTML
mainSection.appendChild(formContainer);
formContainer.appendChild(form);
form.appendChild(formInput);
form.appendChild(formBtn);
form.appendChild(formDelete);

var title = function (){
  event.preventDefault();
var titleValue = formInput.value;
var titleHeading = document.createElement('h3');

//atributos
titleHeading.innerText = titleValue;

//agregar a html
formContainer.appendChild(titleHeading);
// fijarse en el orden donde insertas los elementos en el html
formContainer.insertBefore(titleHeading,form);
clear();

formInput.style.display = 'none';
formBtn.style.display = 'none';
formDelete.style.display = 'none';

var tasklink = document.createElement('a');
var taskP = document.createElement('p');

//atributos
taskP.innerText = 'Añadir una tarjeta...';
tasklink.setAttribute('href','#');

//Agregar a HTML
formContainer.appendChild(tasklink);
tasklink.appendChild(taskP);

}

formBtn.addEventListener('click', title);
//Limpiar imput
var clear= function(){
  formInput.value = '';
}

}
//Invocar a quien queremos aplicarle el evento (¿qué evento? y ¿qué función?)
inputDefault.addEventListener('click', itemForm);


}
