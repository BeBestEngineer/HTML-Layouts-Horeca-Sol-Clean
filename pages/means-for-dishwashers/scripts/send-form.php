<?php
//    echo ($_POST['name']);
//    echo ($_POST['email']);

    $name = $_POST['name'];
    $email = $_POST['email'];

    $response_after_send_message = array ();

    $text_of_letter = "Прошу отправить на мою почту - ".$email." информацию, о том как я могу аолцчить образец Вашей продукции. <br> С уважением, ".$name;

    if ( mail("385898sw@gmail.com", "Horeca SolClean", $text_of_letter ) ) {
        $response_after_send_message['status'] = 'success';
    } else {
        $response_after_send_message['status'] = 'error';
    }

    echo json_encode( $response_after_send_message );
?>