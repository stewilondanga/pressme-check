var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var setActiveOnMouseDown = function(e) {
  this.classList.add('active');
}

var removeActiveOnMouseUp = function(e) {
  var labels = document.getElementsByTagName('label');

  for (var i = 0; i < labels.length; i++) {
    labels[i].classList.remove('active');
  }
}

window.onload = function() {
  var labels = document.getElementsByTagName('label');

  for (var i = 0; i < labels.length; i++) {
    labels[i].onmousedown = setActiveOnMouseDown;
  }

  document.body.onmouseup = removeActiveOnMouseUp;
}
