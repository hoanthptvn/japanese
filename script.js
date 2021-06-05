if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // set the body class
  document.getElementsByTagName("body")[0].className += "mobile";
}
