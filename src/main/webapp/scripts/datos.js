/**Funcion para guardar los datos las votaciones autonomicas */
  function guardarDatosA(event) {
    event.preventDefault(); // evitar comportamiento por defecto del form
    const form = event.target;
    const radios = form.elements['voto'];
    let selectedValue;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    let dataListA = JSON.parse(localStorage.getItem('dataListA')) || [];
    dataListA.push(selectedValue);
    localStorage.setItem('dataListA', JSON.stringify(dataListA));
    console.log(`Guardado valor "${selectedValue}" en la lista de autonómicas`);
    
  }

const dataListA = JSON.parse(localStorage.getItem('dataListA')) || [];
  console.log(`Retrieved ${dataListA.length} items from local storage list`);
  console.log(dataListA);
  
/**Funcion que elimina todo los datos del localstorage */
function vaciarListas(){
	localStorage.removeItem('dataListA');
	localStorage.removeItem('dataListG');
}  
  
function mostrar(){
	for (let i=0; i<dataListA.length; i++)
		console.log(dataListA[i]);
		
	for (let i=0; i<dataListG.length; i++)
		console.log(dataListG[i]);
}

/**Funcion para guardar los datos las votaciones generales */
function guardarDatosG(event) {
    event.preventDefault(); // evitar comportamiento por defecto del form
    const form = event.target;
    const radios = form.elements['voto'];
    let selectedValue;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    let dataListG = JSON.parse(localStorage.getItem('dataListG')) || [];
    dataListG.push(selectedValue);
    localStorage.setItem('dataListG', JSON.stringify(dataListG));
    console.log(`Guardado valor "${selectedValue}" en la lista de generales`);
  }

const dataListG = JSON.parse(localStorage.getItem('dataListG')) || [];
  console.log(`Retrieved ${dataListG.length} items from local storage list`);
  console.log(dataListG);
  
  function mensaje(){
	  let mensaje=document.getElementById("aviso");
	  mensaje.innerHTML="Ha enviado el voto: ";
  }