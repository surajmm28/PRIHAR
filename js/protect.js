/* Source protection — disables casual inspection attempts */
(function(){
  /* 1. Disable right-click context menu */
  document.addEventListener('contextmenu', function(e){ e.preventDefault(); });

  /* 2. Block common DevTools keyboard shortcuts */
  document.addEventListener('keydown', function(e){
    /* F12 */
    if(e.key === 'F12'){ e.preventDefault(); return false; }
    /* Ctrl/Cmd + U (view source) */
    if((e.ctrlKey || e.metaKey) && e.key === 'u'){ e.preventDefault(); return false; }
    /* Ctrl/Cmd + S (save page) */
    if((e.ctrlKey || e.metaKey) && e.key === 's'){ e.preventDefault(); return false; }
    /* Ctrl/Cmd + Shift + I (inspector) */
    if((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I'){ e.preventDefault(); return false; }
    /* Ctrl/Cmd + Shift + J (console) */
    if((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J'){ e.preventDefault(); return false; }
    /* Ctrl/Cmd + Shift + C (element picker) */
    if((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C'){ e.preventDefault(); return false; }
  });

  /* 3. DevTools size-detection — redirects when DevTools panel opens */
  var _threshold = 160;
  var _devopen = false;
  function _check(){
    var w = window.outerWidth - window.innerWidth;
    var h = window.outerHeight - window.innerHeight;
    if(w > _threshold || h > _threshold){
      if(!_devopen){
        _devopen = true;
        document.body.innerHTML = '';
        document.body.style.background = '#0B1E4A';
        document.title = '';
      }
    } else {
      _devopen = false;
    }
  }
  setInterval(_check, 800);
})();
