var verbo_infinitivo = "";
var verbo_pasado_simple = "";
var verbo_pasado_part = "";
var espanol = "";

function init(){
    inicial();
    var min = 1;
    var max = 223;
    var aleatorio = Math.random() * (max - min) + min;
    var number = Math.round(aleatorio);

    console.log(number);
    
    $.post("ajax/index.php?op=verbo_aleatorio",{number:number},function(data, status)
	{
        data = JSON.parse(data);

        var tipo = data.tipo;
        if (tipo==0) {
           $("#tipo_verbo").text("Irregular"); 
        }
        if (tipo==1) {
            $("#tipo_verbo").text("Regular"); 
         }

        var txt_data = data.espanol;
        var txt_esp = txt_data.trim();
        var txt_low = txt_esp.toLowerCase()
        espanol = txt_low;
        console.log(espanol);

        var txt_data2 = data.pasado_simple;
        var txt_esp2 = txt_data2.trim();
        var txt_low2 = txt_esp2.toLowerCase()
        verbo_pasado_simple = txt_low2;
        console.log(verbo_pasado_simple);

        var txt_data3 = data.pasado_participio;
        var txt_esp3 = txt_data3.trim();
        var txt_low3 = txt_esp3.toLowerCase()
        verbo_pasado_part = txt_low3;
        console.log(verbo_pasado_part);

        verbo_infinitivo = data.infinitivo;
        //verbo_pasado_simple = data.pasado_simple;
        //verbo_pasado_part = data.pasado_participio;
        

        //alert(data.infinitivo);
        $("#verbo_data").text(data.infinitivo);
        // $("#idverbo").val(number);
        var idpracticar = $("#idpracticar").val();
        if (idpracticar==1) {
           $("#text_captura").text("Escribe la palabra en español");
        }
        if (idpracticar==2) {
            $("#text_captura").text("Escribe la palabra en pasado simple");
        }
        if (idpracticar==3) {
            $("#text_captura").text("Escribe la palabra en pasado participio");
        }


    });

}

function revisar(){
    var idpracticar = $("#idpracticar").val();
    var verb_resp = $("#verb_resp").val();
    var procesado = verb_resp.trim()
    var text = procesado.toLowerCase()

    if (idpracticar==1) {
        var array_esp = espanol.split(" ");
        console.log(array_esp);
        var result = array_esp.includes(text)
        console.log(result);

        if (result == true) {
            //alert("Correcto");
            $("#verbo_data2").text(espanol);
            document.getElementById("eti_correcto").style.display = "block";
            document.getElementById("eti_incorrecto").style.display = "none";
        }else{
            //alert("Incorrecto");
            $("#verbo_data2").text(espanol);
            document.getElementById("eti_correcto").style.display = "none";
            document.getElementById("eti_incorrecto").style.display = "block";
        }
    }

    if (idpracticar==2) {
        var array_pas_s = verbo_pasado_simple.split(" ");
        console.log(array_pas_s);
        var result2 = array_pas_s.includes(text)
        console.log(result2);

        if (result2 == true) {
            $("#verbo_data2").text(verbo_pasado_simple);
            document.getElementById("eti_correcto").style.display = "block";
            document.getElementById("eti_incorrecto").style.display = "none";
        }else{
           // alert("Incorrecto");
            $("#verbo_data2").text(verbo_pasado_simple);
            document.getElementById("eti_correcto").style.display = "none";
            document.getElementById("eti_incorrecto").style.display = "block";
        }
    }

    if (idpracticar==3) {
        var array_pas_p = verbo_pasado_part.split(" ");
        console.log(array_pas_p);
        var result3 = array_pas_p.includes(text)
        console.log(result3);

        if (result3 == true) {
           // alert("Correcto");
            $("#verbo_data2").text(verbo_pasado_part);
            document.getElementById("eti_correcto").style.display = "block";
            document.getElementById("eti_incorrecto").style.display = "none";
        }else{
            //alert("Incorrecto");
            $("#verbo_data2").text(verbo_pasado_part);
            document.getElementById("eti_correcto").style.display = "none";
            document.getElementById("eti_incorrecto").style.display = "block";
        }
    }
    
}

function recargar(){
    init();
    $("#verbo_data2").text("");
    $("#verb_resp").val("");
    document.getElementById("eti_correcto").style.display = "none";
    document.getElementById("eti_incorrecto").style.display = "none";
}

function ajustar_eti(){
    var idpracticar = $("#idpracticar").val();
     if (idpracticar==1) {
        $("#text_captura").text("Escribe la palabra en español");
     }
     if (idpracticar==2) {
         $("#text_captura").text("Escribe la palabra en pasado simple");
     }
     if (idpracticar==3) {
         $("#text_captura").text("Escribe la palabra en pasado participio");
     }
}

function inicial(){
    setTimeout(function(){
        $("#eti_verbos").removeClass("tracking-out-contract").addClass("tracking-in-expand");
        document.getElementById("eti_verbos").style.visibility = "visible";       
    }, 500);
    setTimeout(function(){
        $("#eti_verbos2").removeClass("fade-out").addClass("fade-in");
        document.getElementById("eti_verbos2").style.visibility = "visible"; 
    }, 1000);


    setTimeout(function(){
        $("#eti_verbos").removeClass("tracking-in-expand").addClass("tracking-out-contract");
       // document.getElementById("eti_verbos").style.display = "none"; 
    }, 3000);
    setTimeout(function(){
        $("#eti_verbos2").removeClass("fade-in").addClass("fade-out");
    }, 3500);
    setTimeout(function(){
        $("#div_fondo1").addClass("fade-out");
        $("#div_fondo2").addClass("fade-in");
    }, 3700);
    setTimeout(function(){
        document.getElementById("div_fondo2").style.display="block";
    }, 4000);
}

function registrar_cuenta(){
    document.getElementById("div_login").style.display="none";
    document.getElementById("div_reg").style.display="block";
    document.getElementById("img_back").style.visibility="visible";
}
function iniciar_sesion_div(){
    document.getElementById("div_login").style.display="block";
    document.getElementById("div_reg").style.display="none";
    document.getElementById("img_back").style.visibility="hidden";
}

function guardar_usuario(){
    
    var input_pass = $("#input_pass").val();
    var input_pass_rep = $("#input_pass_rep").val();
    var capt_email = $("#input_email").val();
    var input_email = capt_email.trim();
    var result = input_email.indexOf("@");

   if (result>=0) {
        $.post("ajax/index.php?op=buscar_usuario",{input_email:input_email},function(data, status)
        {
                data = JSON.parse(data);
                //var result = data.email;
                //alert(data);
                if (data==null) {
                    if (input_pass===input_pass_rep) {
                        $.post("ajax/index.php?op=guardar_usuario",{input_email:input_email,input_pass:input_pass,input_pass_rep:input_pass_rep},function(data, status)
                        {
                            data = JSON.parse(data);
                            alert("Usuario guardado");
                            document.getElementById("div_fondo1").style.display = "none";
                            document.getElementById("div_fondo2").style.display = "none";
                            document.getElementById("nav_verbos").style.display = "block";
                            document.getElementById("container_practice").style.display = "block";
                        });
                        
                    }else{
                        document.getElementById("eti_no_coin").style.display = "block"; 
                    }
                }else{
                    alert("Éste usuario ya existe");
                }
        });
   }else{
        alert("Por favor capture un correo electrónico.");
   }

       
}

function ocultar_et(){
    document.getElementById("eti_no_coin").style.display = "none";
}

function iniciar_sesion(){
    var input_login_correo = $("#input_login_correo").val();
    var input_login_pass = $("#input_login_pass").val();
    // alert(input_login_correo);
    // alert(input_login_pass);

    $.post("ajax/index.php?op=iniciar_sesion",{input_login_correo:input_login_correo,input_login_pass:input_login_pass},function(data, status)
    {
        data = JSON.parse(data);
        console.log(data.user_enc);

        if (data.user_enc>0) {

            document.getElementById("div_fondo1").style.display = "none";
            document.getElementById("div_fondo2").style.display = "none";
            document.getElementById("nav_verbos").style.display = "block";
            document.getElementById("container_practice").style.display = "block";
            
        }else{
            alert("Correo o contraseña incorrectas");
        }
                          
    });
}

init();