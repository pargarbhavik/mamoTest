(function ($, Drupal, once) {
  Drupal.behaviors.addTargetBlankToWebform = {
    attach: function (context, settings) {
      $(once('addTargetBlank', '.common-winsights-d-sect2 .contact-form form', context)).attr('target', '_blank');
   }
  };
})(jQuery, Drupal, once);

$(".common-winsights-d-sect2 .contact-form form .common-form-submit-solid-btn").click(function (event) {
      setTimeout(function() {
        $(".common-winsights-d-sect2 .contact-form form")[0].reset();;
        event.preventDefault();  
      }, 300);
});
/*
contact for google captcha append to button
$(".common-contact-sect1 .contact-form input.webform-button--submit.btn-row.button.button--primary.js-form-submit.form-submit").click(function (event1) {
      setTimeout(function() {
        $(".page-node-type-contact-us .layout-container > div").appendTo(".captcha");
        event1.preventDefault();  
      }, 300);
});
*/