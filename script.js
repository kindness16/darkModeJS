const check = document.getElementById("toggle");
check.addEventListener("click", (e) => {
  const ischeck = e.target.checked;
  if (ischeck) {
    document.body.classList.add("theme");
    document.body.style.transition = '0.9s'  
  } else {
    document.body.classList.remove("theme");
  }
});
