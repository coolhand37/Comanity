$(function () {
  console.log("hello there world")

  function myfocus (that) {
    $(this).val('');
  }

  $('input[name=full_name]').focus(myfocus).blur(function () {
    if ($(this).val() == '') $(this).val('FULL NAME');
  });
  $('input[name=email]').focus(myfocus).blur(function () {
    if ($(this).val() == '') $(this).val('EMAIL');
  });
  $('input[name=phone]').focus(myfocus).blur(function () {
    if ($(this).val() == '') $(this).val('PHONE (OPTIONAL)');
  });

  $(".collapsed-menu").click(function(){
    $(".collapsed-navbar").slideToggle();
  });

  $(".collapsed-navbar").click(function(){
    $(".collapsed-navbar").slideToggle();
  });


});