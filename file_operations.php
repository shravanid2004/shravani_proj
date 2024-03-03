<?php
$file = "my_file";


function usernameExists($username) {
    global $file;
    if (file_exists($file)) {
        $lines = file($file);
        foreach ($lines as $line) {
            $fields = explode(",", $line);
            if ($fields[0] == $username) {
                return true;
            }
        }
    }
    return false;
}


function insertRow($username, $password, $role) {
    global $file;
    $data = "$username,$password,$role\n";
    file_put_contents($file, $data, FILE_APPEND);
}


function changePassword($username, $newPassword) {
    global $file;
    $lines = file($file);
    $output = "";
    foreach ($lines as $line) {
        $fields = explode(",", $line);
        if ($fields[0] == $username) {
            $fields[1] = $newPassword;
            $line = implode(",", $fields);
        }
        $output .= $line;
    }
    file_put_contents($file, $output);
}
?>
