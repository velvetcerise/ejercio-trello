//Función que creará primer Input
var make = function() {
  var inputDefault = document.createElement('input');
  inputDefault.placeholder = 'Añadir una lista';
//añadiendo clase para input default
  inputDefault.classList.add('default-input');
  var mainSection = document.getElementById('main-section');
  mainSection.appendChild(inputDefault);

  //Crear evento para crear formulario
  var itemForm = function() {
    inputDefault.style.display = 'none';
    var formContainer = document.createElement('div');
    var form = document.createElement('form');
    var formInput = document.createElement('input');
    var formBtn = document.createElement('button');
    var formDelete = document.createElement('span');

    //crear atributos
    //formContainer.style.backgroundColor = 'gray';
    //definiendo estilos en css, tomando en cuenta la clase siguiente
    formContainer.classList.add('form-container');
    formInput.placeholder = 'Añadir lista dos';
    formBtn.innerText = 'Guardar';
    //creando clase para definir estilos
    formBtn.classList.add('save-btn');
    formDelete.innerText = 'X';
    formDelete.classList.add('delete-btn');

    //agregando al HTML
    mainSection.appendChild(formContainer);
    formContainer.appendChild(form);
    form.appendChild(formInput);
    form.appendChild(formBtn);
    form.appendChild(formDelete);

    var title = function() {
      event.preventDefault();
      var titleValue = formInput.value;
      var titleHeading = document.createElement('h3');

      //atributos
      titleHeading.innerText = titleValue;

      //agregar a html
      formContainer.appendChild(titleHeading);
      // fijarse en el orden donde insertas los elementos en el html
      formContainer.insertBefore(titleHeading, form);
      clear();

      formInput.style.display = 'none';
      formBtn.style.display = 'none';
      formDelete.style.display = 'none';

      var tasklink = document.createElement('a');
      //añadiendo clase al link
      tasklink.classList.add('task-link')
      var taskP = document.createElement('p');

      //atributos
      taskP.innerText = 'Añadir una tarjeta...';
      tasklink.setAttribute('href', '#');

      //Agregar a HTML
      formContainer.appendChild(tasklink);
      tasklink.appendChild(taskP);

      //llamamos a la funcion que replica el formulario inicial.
      itemForm();

      var addTextArea = function() {
        tasklink.style.display = 'none';

        var formTextArea = document.createElement('form');
        var formText = document.createElement('textarea');
        var btnAdd = document.createElement('button');
        var dltTxtArea = document.createElement('span');

        btnAdd.innerText = 'Añadir';
        //reciclando clase de boton, añadiendosela a btnAdd
        //lo mismo con dltTxtArea
        btnAdd.classList.add('save-btn');
        dltTxtArea.classList.add('delete-btn');
        dltTxtArea.innerText = 'X';
        formText.autofocus = true;

        formContainer.appendChild(formTextArea);
        formTextArea.appendChild(formText);
        formTextArea.appendChild(btnAdd);
        formTextArea.appendChild(dltTxtArea);

        var addNote = function() {
          var noteValue = formText.value;
          var noteP = document.createElement('p');
          noteP.innerText = noteValue;
          formContainer.appendChild(noteP);
          formContainer.insertBefore(noteP, formTextArea);
          clearTextArea();
        }
        btnAdd.addEventListener('click', addNote);
        var clearTextArea = function() {
          formText.value = '';
        }
      }
      //llamar evento que realizara el link
      tasklink.addEventListener('click', addTextArea);

    }

    formBtn.addEventListener('click', title);
    //Limpiar imput
    var clear = function() {
      formInput.value = '';
    }

  }
  //Invocar a quien queremos aplicarle el evento (¿qué evento? y ¿qué función?)
  inputDefault.addEventListener('click', itemForm);

}
