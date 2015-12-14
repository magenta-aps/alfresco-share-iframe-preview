(function () {
  YAHOO.Bubbling.on('webPreviewSetupComplete', function (layer, args) {
    postWindowHeight(getIFrameHeight());
  }, this);

  function getIFrameHeight() {
    var body = document.body, html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight, html.offsetHeight);
  }

  function postWindowHeight(height) {
    window.parent.postMessage({iframeHeight: height}, '*');
  }

  function onElementHeightChange(elm, callback) {
    var lastHeight = getIFrameHeight(), newHeight;

    (function run() {
      newHeight = getIFrameHeight();
      if (lastHeight != newHeight)
        callback(newHeight);
      lastHeight = newHeight;

      if (elm.onElementHeightChangeTimer)
        clearTimeout(elm.onElementHeightChangeTimer);

      elm.onElementHeightChangeTimer = setTimeout(run, 300);
    })();
  }

  function onload() {
    // post initial height
    postWindowHeight(getIFrameHeight());
    // listen for height changes
    onElementHeightChange(document.body, postWindowHeight);
  }

  if (window.addEventListener) {
    window.addEventListener('load', onload);
  }
  else if (window.attachEvent) {
    window.attachEvent('onload', onload);
  }
  else {
    window.onload = onload;
  }
})();