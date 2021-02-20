<?php

require("vendor/autoload.php");

use ritvick\myservice\src\Controller\JsonController;

echo "client start";

$obj = new JsonController();

$input = file_get_contents('php://input');
$firstClassObj = $obj->jsonStringToObj($input);

echo "client stop";