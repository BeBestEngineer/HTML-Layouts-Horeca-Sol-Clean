$(".main-nav-link").mPageScroll2id({
    offset : 120,
    scrollSpeed : 500
});

$.validate({

    lang: 'en',
    form : '#get-a-sample-form',
    
    scrollToTopOnError : false,    
    errorElementClass : 'get-a-sample-form-error',
    errorMessageClass : 'get-a-sample-form-error-message',
    borderColorOnError : '#000',
    validateOnBlur : false,   
        
    onSuccess: function ($form) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'scripts/send-form.php',
            data: {
                "name": $('#get-a-sample-form-name').val(),
                "email": $('#get-a-sample-form-email').val()
            },

            success: function (data) {
                if (data['status'] == 'success') {
                    $("#success").show().fadeIn(1000).delay(2000).fadeOut('slow'); //=== Show Success Message==
                    $($form).get(0).reset();
                } else {
                    $("#error").show().fadeIn(1000).delay(2000).fadeOut('slow'); //===Show Error Message====
                }
            },
            error: function (data) {
                $("#error").show().fadeIn(1000).delay(2000).fadeOut('slow'); //===Show Error Message====
            }

        });
        return false; // Will stop the submission of the form
    },
    
});
