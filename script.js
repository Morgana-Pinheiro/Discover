function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains (light)) {
  // html.classList.remove(light)
  //} else {
  //  html.classList.add(light)
  //}
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/pessoal/eu.jpg")
  } else {
    img.setAttribute("src", "/pessoal/eu-virado.jpg")
  }
}
