const header = document.querySelector(".header")

window.addEventListener("scroll", addShadowOnScrollHeader)

function addShadowOnScrollHeader() {
  const scrollSize = window.pageYOffset
  const pixels = 0
  if (scrollSize > pixels) {
    header.style.boxShadow = "2px 2px 10px #020202"
  } else {
    header.style.boxShadow = "none"
  }
}
