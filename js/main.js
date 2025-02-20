document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  // dropdowns.addEventListener("click", () => {
  //     console.log("clicked");
  // })
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
      select.classList.toggle("select-clicked");
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        options.forEach((option) => {
          option.classList.remove("active");
        });
        option.classList.add("active");
      });
    });
  });

  const themeChanger = document.querySelector("#switch");
  const bg = document.querySelector("#page");
  const title = document.querySelector(".title");

  themeChanger.addEventListener("click", () => {
    // console.log("clicked");
    // console.log(bg);
    bg.classList.toggle("darkActive");
    title.classList.toggle("dark__font");
    // document.body.classList.toggle("dark--body");
  });
});
