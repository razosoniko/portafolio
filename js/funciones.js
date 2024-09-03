function agregardatos(nombre,apellido,email,telefono){

	cadena="nombre="+ nombre +
		   "&apellido="+ apellido +
		   "&email="+ email +
		   "&telefono="+ telefono;

		   $.ajax({

		   	type:"POST",
		   	url:"php/agregarDatos.php",
		   	data:cadena,
		   	success:function(r){

			   		if(r==1){
			   			$('#tabla').load('componentes/tabla.php')
			   			alertify.success("Agregado con exito");
			   		}else{
			   			alertify.error("Fallo en el servidor");
			   		}
		   		}
		   });

}

function preguntarSiNo(id){

	alertify.confirm('Eliminar Registro', 
					 '¿Estas seguro de eliminar el registro?', 
		function(){eliminarDatos(id)}, 
		function(){ alertify.error('Cancelar')});

}

function eliminarDatos(id){

	cadena="id=" + id;

		   $.ajax({

		   	type:"POST",
		   	url:"php/eliminarDatos.php",
		   	data:cadena,
		   	success:function(r){

			   		if(r==1){
			   			$('#tabla').load('componentes/tabla.php')
			   			alertify.success("Eliminado con exito");
			   		}else{
			   			alertify.error("Fallo en el servidor");
			   		}
		   		}
		   });
}


function agregarform(datos){

	alert(datos);
}