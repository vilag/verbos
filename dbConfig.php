<?php 
 
// Database configuration 
$dbHost     = "srv366.hstgr.io"; 
$dbUsername = "u690371019_verbos"; 
$dbPassword = "iXfh^ZMhB4~b"; 
$dbName     = "u690371019_verbos"; 
 
// Create database connection 
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName); 
 
// Check connection 
if ($db->connect_error) { 
    die("Connection failed: " . $db->connect_error); 
} 
 
?>