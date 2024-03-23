let section4Btns = document.querySelectorAll(".fourth-sec-btns");

section4Btns.forEach((btn) => {
  btn.addEventListener("click", (item) => {
    section4Btns.forEach((item) => {
      item.classList.remove("activeLi3");
    });
    btn.classList.add("activeLi3");
  });
});
