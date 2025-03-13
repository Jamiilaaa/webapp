function canvia_seccio(num_boto) {
    const menu = document.getElementById("menu");
    const num_botons = menu.children.length;    // el nombre de botons dins de l'element "menu"
    for (let i = 1; i < num_botons; i++) {
        let boto = document.getElementById("boto_" + i);
        let seccio = document.getElementById("seccio_" + i);
        if (i == num_boto) {
            boto.style.color = "#950E17";    // es destaca la secció activa amb el canvi de colors del botó corresponent
            boto.style.backgroundColor = "#FCDEE0";
            seccio.style.display = "flex";    // es fa visible la secció activa
        }
        else {
            boto.style.color = "white";    // colors dels botons de seccions inactives
            boto.style.backgroundColor = "#950E17";
            seccio.style.display = "none";    // s'oculten les seccions inactives
        }
    }
}
let validado =  false ;     //variable que permite saber si hay algún usuario validado 
el nombre , contraseña ; 
let scriptURL =  "https://script.google.com/.../exec"     // se debe sustituir la cadena de texto por la URL del script

function inicio_sessio ( )  { 
    nombre = documento. getElementById ( "nombre_usuario" ) . value ;     // la propiedad "value" de un cuadro de texto corresponde al texto escrito por el usuario 
    contraseña = documento. getElementById ( "contraseña" ) . value ; 
    let consulta = scriptURL +  "?query=select&where=usuario&is="  + nombre +  "&and=contraseña&equal="  + contraseña ; 
    fetch ( consulta ) 
        . then ( ( respuesta )  =>  {    // registros que contienen el nombre de usuario y contraseña escritos por el usuario 
            return respuesta. json ( ) ;     // conversión a lista 
        } ) 
        . then ( ( respuesta )  =>  { 
            if ( respuesta. length  ==  0 )  {     // lista vacía 
                window. alert ( "El nombre de usuario o la contraseña no son correctos." ) ; 
            } 
            else  {     // lista con (al menos) un registro 
                window. alert ( "se ha iniciado correctamente la sesión." ; ' ; ; " 
                inicia_sessio " } } ) ; }    
            
            
