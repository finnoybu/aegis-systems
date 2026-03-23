${MAIN_JS}

// Deprecation banner for aegissystems.app (v0.1.1-locked)
(function() {
  var banner = document.createElement('div');
  banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#92400e;color:#fef3c7;text-align:center;padding:10px 16px;font-family:system-ui,sans-serif;font-size:14px;line-height:1.4;box-shadow:0 2px 8px rgba(0,0,0,0.3);';
  banner.innerHTML = 'You are viewing <strong>AEGIS Constitution v0.1.1</strong> (archived). The current version is available at <a href="https://aegis-constitution.com" style="color:#fde68a;text-decoration:underline;font-weight:600;">aegis-constitution.com</a>';
  document.body.insertBefore(banner, document.body.firstChild);
  document.body.style.paddingTop = (banner.offsetHeight) + 'px';
})();
