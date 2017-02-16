<?php
    $name = $_POST['name'];
    $email = $_POST['email'];

    $response_after_send_message = array ();

    $text_of_letter = "Прошу отправить на мою почту - ".$email." информацию, о том как я могу получить образец Вашей продукции. С уважением, ".$name;

    if ( mail("LIMANOVSKY@mail.ru, webforward@list.ru", "Horeca SolClean", $text_of_letter ) ) {
        $response_after_send_message['status'] = 'success';
    } else {
        $response_after_send_message['status'] = 'error';
    }

    echo json_encode( $response_after_send_message );
?>