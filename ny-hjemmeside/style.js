window.addEventListener("scroll", () => {
  let scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
    const navBar = document.getElementById("navbar");
    console.log(scrollTop);
  if (scrollTop < 100) {
    navBar.classList.remove("shrink");
  } else {
    navBar.classList.add("shrink");
  }
});

