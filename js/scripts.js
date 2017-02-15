$(document).ready(function() {
  $("h1#js").click(function() {
    $("p#js").toggle();
  });
  $("h1#operator").click(function() {
    $("p#operator").toggle();
  });
  $("p#operator").click(function() {
    $(this).prepend("<h3>Another definition</h3>");
  });
});
