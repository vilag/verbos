<?php
session_start(); 
require_once "../modelos/Index.php";

$index=new Index();


switch ($_GET["op"]){
	
	case 'verbo_aleatorio':
        $number = $_POST['number'];       
        $rspta=$index->verbo_aleatorio($number);
         echo json_encode($rspta);        
    break;

    case 'buscar_usuario':
        $input_email = $_POST['input_email'];       
        $rspta=$index->buscar_usuario($input_email);
         echo json_encode($rspta);        
    break;

	case 'guardar_usuario':
        $input_email = $_POST['input_email'];
        $input_pass = $_POST['input_pass'];
        $input_pass_rep = $_POST['input_pass_rep'];      
        $rspta=$index->guardar_usuario($input_email,$input_pass,$input_pass_rep);
         echo json_encode($rspta);        
    break;	

    case 'iniciar_sesion':
        $input_login_correo = $_POST['input_login_correo'];
        $input_login_pass = $_POST['input_login_pass'];      
        $rspta=$index->iniciar_sesion($input_login_correo,$input_login_pass);
         echo json_encode($rspta);        
    break;
	
}
?>