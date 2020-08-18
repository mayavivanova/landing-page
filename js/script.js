document.querySelectorAll(".nav-item").forEach((item) => {
  item.onclick = (event) => {
    removeActive(document.querySelector(".active"));
    addActive(event.target);
  };
});

const removeActive = (el) => el.classList.remove("active");
const addActive = (el) => el.classList.add("active");
