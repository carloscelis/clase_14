/* Comentario de bloque*/
function nombra (argumentos){
	var	resultado = operaciones;
	return resultado;
}
/*Este método devuelve el iva 
@param { Integer } Valor de factura
@return { float } Es el iva calculado*/

function calculo_iva (costo){
// "!" niega, entonces dice que si el costo no existe, mande mensaje, en cazo de que exista, seguir con la operación
	if (!costo) return " El costo es obligatorio"
	var iva = 0.16,
// "Number",convierte un string a número manteniendolo entero o decimal, si es string devuelve NAN(Non a Number) "
//parseInt(parsea a enteros)
		costo=Number(costo),
		total= iva*costo,
		total_pagar = costo+total;
// Si el total a pagar es... sino... se ejecutan las variable
		if (total_pagar >= 1000) {
			var descuento = 100;
		} else{
			var descuento= 0;
			}
// Esta variable es el resumen del if,else (pregunta)
		// var descuento=total_pagar?100:0;
// Dentro del return se pone el mensaje y acción que saldrá en el Alert,fin de la función en curso
	return "El total a pagar es" + (total_pagar - descuento);
}
// pregunta principal
var costo = prompt("¿De que cantidad necesitas saber tu iva?");
// manda a llamar directamente el segundo return (el mensaje) 
alert(calculo_iva(costo));

// Tarea:hazlo con iva de 1.16 en vez de 0.16
// Estudiar Switch
