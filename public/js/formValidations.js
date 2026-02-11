$(document).ajaxComplete(function () {
  setTimeout(function () {
    //console.log('ajaxComplete');       
    let errormsg = $(".webform-submission-form [data-drupal-messages] > div > div[role=alert]:not(ul)").text().trim().toLowerCase();
    console.log(errormsg);
    if (!$(".webform-submission-form [data-drupal-messages] > div > div[role=alert] ul").length) {
      console.log("no ul");
      if (errormsg.includes('captcha is required')) {
        $(".webform-submission-form [data-drupal-messages] > div > div[role=alert]").empty();
        $(".webform-submission-form [data-drupal-messages] > div > div[role=alert]").append('<ul><li class="captcha-li-text">CAPTCHA is required</li></ul>');
      }
    }
    else {
      console.log("yes ul");
      $('.webform-submission-form li').each(function () {
        if ($(this).text().trim().toLowerCase().includes('captcha is required')) {
          $(this).addClass('captcha-li-text');
        }
      })
    }
  }, 300);
});

$(document).ajaxComplete(function () {
  setTimeout(function () {
    if ($(".common-contact-sect1 .contact-form .messages.messages--error.webform-confirmation").length) {
      console.log('contact form submitted');
      $(".common-contact-sect1 .contact-form").addClass("contact-form-submitted");
    }
  }, 400);
});
