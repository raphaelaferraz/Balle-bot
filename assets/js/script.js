function menuShow() {
  const input = document.querySelector("#cabecalho_lista");
  if(input.classList.contains("open")) {
    input.classList.remove("open");
  } else {
    input.classList.add("open");
  }
}