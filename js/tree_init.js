$(document).ready(function() {
  console.info('Initializing tree');

  var stage = $('#structure-stage'),
    node = function(value) {
      return {
        value: value,
        left: null,
        right: null
      };
    },
    root = node(7);
  root.left = node(12);
  root.right = node(3);
  root.left.right = node(6);

  var tree = S.components.tree(root);
  var scope = new S.Scope(tree);
  window.tree = scope.interface.handle();
  scope.queue.open();

  tree.view.scaleTo({
    width: stage.width(),
    height: stage.height()
  });

  stage.append(tree.view.render());
});
