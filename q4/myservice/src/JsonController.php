<?php
namespace Src;

class JsonController {
    
    private $requestMethod;

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                $response = "Hello World";
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    public function jsonStringToObj($string) {

        return json_decode($string);
    }
}