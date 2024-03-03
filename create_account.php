<?php
include 'file_operations.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["username"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        
      
        if (usernameExists($username)) {
            echo "Username already exists. Please choose another username.";
        } else {
            
            insertRow($username, $password, 'role'); 
          
            header("Location: form.html");
            exit();
        }
    } else {
  
        echo "Username is required.";
    }
} else {
   
    header("Location: index.php");
    exit();
}
?>
