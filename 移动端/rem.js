(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if (clientWidth > 540) {
              clientWidth = 540;
          }
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }; //以iPhone6为基准  body 100px rem=size/100 红包页面以iphone6为基准

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);