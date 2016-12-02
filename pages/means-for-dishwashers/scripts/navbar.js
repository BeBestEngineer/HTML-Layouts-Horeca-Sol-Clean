$(".main-nav-link").mPageScroll2id({
    offset : 120,
    scrollSpeed : 500
});

$.validate({
    lang: 'en',
    form : '#get-a-sample-form',
    
    scrollToTopOnError : false,
    borderColorOnError : '#a35555',
        
    onSuccess : function($form) {       
        
        $.ajax({
          type: 'POST',
          dataType: 'json',
          url:  'scripts/send-form.php',
          data: { 
              "name": $('#get-a-sample-form-name').val(),
              "email": $('#get-a-sample-form-email').val()
          }
                
          success: function(data) {
           
          },
    
          error: function(data) {
            
          },
    
        });
        
      return false; // Will stop the submission of the form
    },
    
});
