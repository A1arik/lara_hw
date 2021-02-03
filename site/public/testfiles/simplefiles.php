
<form action="<?=$_SERVER["PHP_SELF"]?>" METHOD="post" enctype="multipart/form-data">
    <input type="file" name="fileToUpload">
    <input type="submit" name="submit">
</form>


<?php

// while (true);

var_dump($_FILES);
echo "<hr>";
var_dump($_POST);

// Так делать нельзя - дыра в безопастности, размере ...
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], "new");

// Тут проверяем все, что можем
/*
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
*/


/*
$lang = "en";
if (!file_exists('lang/' . $lang .'.json')) {
    $lang = "ru";
}
$translate = json_decode( file_get_contents('lang/' . $lang .'.json'), true );

var_dump($translate);

echo $translate["Hello"];

*/


/*

// Настройка сообщений для русского языка
$translate_ru = [
    "Hello"=> "Привет мир",
    "Name"=> "Введите свое имя"
];

// Для любого другого языка
$translate_de = [
    "Hello"=> "Guten tag",
    "Name"=> "Ure Name"
];

// Я вывожу сообщения - по ключу
echo $translate_ru["Hello"];

file_put_contents('lang/ru.json', json_encode($translate_ru) );
file_put_contents('lang/de.json', json_encode($translate_de) );


*/




/*
echo "Dir " . __DIR__ . "<br>";
echo "File " . __FILE__ . "<br>";
echo "Line " . __LINE__ . "<br>";
*/


// $userSendInfo = "<?php echo 'U code is hucking';";

// file_put_contents('huck.php', $userSendInfo);

