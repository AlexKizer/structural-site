$(document).ready(function() {
  console.info('Initializing structural-app');
  window.App = (function() {
    var App = {};

    App.drawIcons = function() {
      $('.btn svg').width($('.btn svg').parent().width());
      var bstIcon = Snap('.tree-svg'),
        arrayIcon = Snap('.array-svg'),
        //stackQueueIcon = Snap('.btn-ds.img.three'),
        width = $('.tree-svg').width(),
        height = $('.tree-svg').height();
      console.log('width is %s', width);
      App.drawIcons.drawBST(bstIcon, width, height);
      App.drawIcons.drawArray(arrayIcon, width, height);
    }

    App.drawIcons.drawBST = function(svg, width, height) {
      svg.clear();

      var shadow = svg.filter(Snap.filter.shadow(1, 1, 1)),
        lineR = svg.line(width / 2, 60, width * .66, height * .33 + 40).attr('stroke', '#fff').attr('stroke-width', '2'),//.attr('filter', shadow),
        lineL = svg.line(width / 2, 60, width * .33, height * .33 + 40).attr('stroke', '#fff').attr('stroke-width', '2'),//.attr('filter', shadow),
        nodeRoot = svg.circle(width / 2, 60, 10, 10).attr('fill', '#fff'),//.attr('filter', shadow),
        nodeR = svg.circle(width * .66, height * .33 + 40, 10, 10).attr('fill', '#fff'),//.attr('filter', shadow),
        nodeL = svg.circle(width * .33, height * .33 + 40, 10, 10).attr('fill', '#fff');//.attr('filter', shadow);

    }

    App.drawIcons.drawArray = function(svg, width, height) {
      svg.clear();

      var margin = width * .1,
        w = width * .23,
        m = width * .05,
        h = height * .2,
        top = height/2 - h/2,
        one = svg.rect(margin, top, w, h).attr('fill', '#fff'),
        two = svg.rect(margin + w + m, top, w, h).attr('fill', '#fff'),
        three = svg.rect(margin + w + m + w + m, top, w, h).attr('fill', '#fff'),
        l1 = svg.line(margin, top + h * .8, w + margin, top + h * .8).attr('stroke', '#0000ee'),
        l2 = svg.line(w + margin + m, top + h * .8, w + margin + m + w, top + h * .8).attr('stroke', '#0000ee'),
        l3 = svg.line(w + margin + m + w + m, top + h * .8, w + margin + m + w + m + w, top + h * .8).attr('stroke', '#0000ee');
    }

    App.drawLogoBackground = function() {

    }

    App.initStage = function() {
      $('.stage').height($(window).height() / 3);
    }

    return App;
  })();

  $(window).resize(function() {
    if($('.btn svg'))
      App.drawIcons();
  });

  if($('.btn svg'))
    App.drawIcons();
});