$(document).ready(function(){

  var url = "http://localhost:8071/motion-control/update";

  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      $('.turn-left').addClass('selected', 1000);
      $.ajax(url, {dataType: "jsonp", data: {turn: -1}});
    };
    
    if (e.keyCode == 39) {
      $('.turn-right').addClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {turn: +1}});  
    };

    if (e.keyCode == 32) {
      $('.stop').addClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {turn: 0}});
    };

    if (e.keyCode == 38) {
      $('.move-forward').addClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {forward: +1}});
    };

    if (e.keyCode == 40) {
      $('.move-backward').addClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {forward: -1}});  
    };

    if (e.keyCode == 83) {
      console.log("strafe right!");
      $('.strafe-right').addClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {strafe: +1}});
    };

     if (e.keyCode == 65) {
      console.log("strafe left!"); 
      $('.strafe-left').addClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {strafe: -1}});
    };

  });

  $(document).keyup(function(e) {
    if (e.keyCode == 37) {
      console.log('keyUP');
      $('.turn-left').removeClass('selected')
      };

    if (e.keyCode == 39) {
      $('.turn-right').removeClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {turn: +1}});  
    };

    if (e.keyCode == 32) {
      $('.stop').removeClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {turn: 0}});
    };

    if (e.keyCode == 38) {
      $('.move-forward').removeClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {forward: +1}});
    };

    if (e.keyCode == 40) {
      $('.move-backward').removeClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {forward: -1}});  
    };

    if (e.keyCode == 83) {
      console.log("strafe right!");
      $('.strafe-right').removeClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {strafe: +1}});
    };

     if (e.keyCode == 65) {
      console.log("strafe left!"); 
      $('.strafe-left').removeClass('selected');
      $.ajax(url, {dataType: "jsonp", data: {strafe: -1}});
    };


    });
 

})