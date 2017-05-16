function validateForm(){
	/* Escribe tú código aquí */

	/*Para recibir data desde los input */

	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var select = document.getElementById("form-control").selectedIndex; 
	var twitter = document.getElementById("input-social").value;

}



// VALIDAR NOMBRE


function nombre(){
	var nombre = document.getElementById("name").value;
	if(!(/^[A-Z][a-z]{3,19}$/).test(nombre)) {
	}
	var contName = document.getElementsByClassName("input-box")[0];
	var spanName = document.createElement("span");
	var textName = document.createTextNode("Debe llevar mayúsucula");
	spanName.appendChild(textName);
	contName.appendChild(spanName);

}
nombre();


// VALIDAR APELLIDO


function apellido(){
	var apellido = document.getElementById('lastname').value;
	if(!(/^[A-Z][a-z]{3,19}$/).test(apellido)) {
	}
	var contLastname = document.getElementsByClassName("input-box")[1];
	var spanLastname = document.createElement("span");
	var textLastname = document.createTextNode("Debe llevar mayúsucula");
	spanLastname.appendChild(textLastname);
	contLastname.appendChild(spanLastname);

}
apellido();

// VALIDAR EMAIL


function correo(){
	var expMail = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
	var email = document.getElementById("input-email").value;
	if (!expMail.test(email)){
	}
	var contEmail = document.getElementsByClassName("input-box")[2];
	var spanEmail = document.createElement("span");
	var textEmail = document.createTextNode("Ingrese formato name@email.com");
	spanEmail.appendChild(textEmail);
	contEmail.appendChild(spanEmail);

}
correo();

// VALIDAR PASS


function pwd (){
	var expPass= /^[a-zA-Z0-9]*$/;
	var pass = document.getElementById('input-password').value;
	if (expPass.test(pass) !== "password" || pass.length >= 6 || pass !== "password" || pass !== 123456 || pass !== 098754){
	}
	var contPass = document.getElementsByClassName("input-box")[3];
	var spanPass = document.createElement("span");
	var textPass = document.createTextNode("Debe tener al menos 6 caracteres");
	spanPass.appendChild(textPass);
	contPass.appendChild(spanPass);

}
pwd();



	/* VALIDAR SELECT

function opciones(){
	var select = document.getElementById("form-control").selectedIndex;
	for(var i = 0; i < select.length; i++){ 
		if(select[i].value == "0"){	
			var contSelect = document.getElementsByClassName("input-box")[3];
			var spanSelect = document.createElement("span");
			var textSelect = document.createTextNode("Debe tener al menos 6 caracteres");
			spanSelect.appendChild(textSelect);
			contSelect.appendChild(spanSelect);


		}
	}
}
opciones();

	/* COMO CREAR EL SPAN */
/*
	var contNombre = document.getElementByClass("input-box")[0]//primero debo buscar donde anidar mi span en html. Como no tiene id, lo almaceno en la clase que esta en el <div>. Poner posicion entre [] 
	var crearSpan = document.createElement("span")//creo el span en si mismo
	var crearTexto = document.createTextNode("Debe comenzar con mayúscula y caracteres de la A-Z")//creo el texto que va a llevar el span
	contNombre.appendChild(crearSpan);//le presento al padre "contNombre", donde esta anidado el hijo (crearSpan)
	*/



	/* Devolver campos vacios */
/*
	function vaciarInput(){
		document.getElementById("name").value = "";
		document.getElementById("lastname").value = "";
		document.getElementById("input-email").value = "";
		document.getElementById("input-password").value = "";
		document.getElementById("form-control").selectedIndex = ""; 
		document.getElementById("input-social").checked = "";

	}

	vaciarInput();
*/