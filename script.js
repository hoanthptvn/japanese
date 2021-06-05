$(function () {
  var inputRadio = $("input[name='radio_issue4']");
  var iptOther = $(".ipt_other");
  var rdoOther = $(".rdo_other");
  $(".inner").slideUp();
  inputRadio.on("click", function () {
    if ($(this).hasClass("rdo_other")) {
      $(".inner").slideDown();
      iptOther.prop("disabled", false).focus();
    } else {
      iptOther.prop("disabled", true);
      iptOther.val("");
      $(".inner").slideUp();
    }
  });
  iptOther.on("click", function () {
    rdoOther.prop("checked", true);
  })
})