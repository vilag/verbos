<?php

//Incluímos inicialmente la conexión a la base de datos
require "../config/Conexion.php";

Class Index
{
	public function __construct()
	{

	}

	public function verbo_aleatorio($number)
	{
		$sql="SELECT * FROM verbos WHERE idverbo='$number'";
		return ejecutarConsultaSimpleFila($sql);
		//return ejecutarConsulta($sql);			
	}

	public function buscar_usuario($input_email)
	{
		$sql="SELECT * FROM users WHERE email='$input_email'";
		return ejecutarConsultaSimpleFila($sql);
		//return ejecutarConsulta($sql);			
	}

	public function guardar_usuario($input_email,$input_pass,$input_pass_rep)
	{
		$sql="INSERT INTO users (oauth_provider,oauth_uid,first_name,last_name,email,tipo,password1) VALUES('google','000000000000000000000','user1','user1','$input_email','1','$input_pass');";
		//return ejecutarConsultaSimpleFila($sql);
		return ejecutarConsulta($sql);			
	}

	public function iniciar_sesion($input_login_correo,$input_login_pass)
	{
		$sql="SELECT count(id) as user_enc FROM users WHERE email='$input_login_correo' AND password1='$input_login_pass'";
		return ejecutarConsultaSimpleFila($sql);
		//return ejecutarConsulta($sql);			
	}


}
?>

