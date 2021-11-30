<?php
 header("Access-Control-Allow-Origin: *");
    $arr = ['Головна', 'Каталог', 'Галерея'];
    $str = json_encode($arr);
    echo($str);
