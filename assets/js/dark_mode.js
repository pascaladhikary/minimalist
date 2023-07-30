$(document).ready(function(){
  $(".click").click(function(){
    $("body").toggleClass("dark-mode")
    $(".writing").toggleClass("dark-mode")
    $(".card").toggleClass("dark-mode")
    $("a").toggleClass("dark-mode")
    });
});
