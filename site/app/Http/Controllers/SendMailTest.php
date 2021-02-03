<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendMailTest extends Controller
{
    public function testTg(){
        $token = "1561012899:AAGMoPvTJC6PTOYpQdjCTFU-phA3-kQmJTM";
        $chatid = "581007391";
        return $this->sendTgMessage($chatid, "tg://resolve?domain=toyota_nikolaev", $token);
    }

    function sendTgMessage($chatID, $messaggio, $token) {
        echo "sending message to " . $chatID . "\n";

        $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
        $url = $url . "&text=" . urlencode($messaggio);
        $ch = curl_init();
        $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
        );
        curl_setopt_array($ch, $optArray);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }


    public function testMail(){
        $toEmail = "keeper@ninydev.com";
        $toName = "Oleksandr Nykytin";
        $subject = "Test Mail";
        $data = array(
          'name' => 'Laravel local host server',
          'body' => 'Hello World'
        );

        Mail::send('emails.test', $data,
            function ($message) use ($toName, $toEmail, $subject) {
            $message
                ->to($toEmail, $toName)
                ->subject($subject);
            }
        );

        return "Test Done";
    }
}
