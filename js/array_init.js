$(document).ready(function() {
  console.info('Initializing array');

  var stage = $('#structure-stage'),
      arr = [4, 23, 9, 72, 3];

  var array = S.components.array2(arr);
  var scope = new S.Scope(array);
  window.array = scope.interface.handle();
  scope.queue.open();

  array.view.scaleTo({
    width: stage.width(),
    height: stage.height() / 6
  });

  stage.append(array.view.render());
});
