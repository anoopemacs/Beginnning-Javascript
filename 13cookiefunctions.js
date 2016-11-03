function setCookie(name, value, path, expires) {
  value = escape(value);
  if (!expires) {
    // if no expiration date given
    var now = new Date();
    now.setMonth(now.getMonth() + 6);
    expires = now.toUTCString();
  }
  if (path) {
    path = ";Path=" + path;
  }
  document.cookie = name + "=" + value + ";expires=" + expires + path;
}

function getCookieValue(name) {
  var ret;
  var cookieValue = document.cookie;
  var cookieStartsAt = cookieValue.indexOf(" " + name + "=");
  if (cookieStartsAt == -1) {
    cookieStartsAt = cookieValue.indexOf(name + "=");
  }
  if (cookieStartsAt == -1) {
    ret = null;
  } else {
    cookieStartsAt = cookieValue.indexOf("=", cookieStartsAt) + 1;
    cookieEndsAt = cookieValue.indexOf(";", cookieStartsAt);
    ret = cookieValue.substring(cookieStartsAt, cookieEndsAt);
    ret = escape(ret);
  }
  return ret;
}
