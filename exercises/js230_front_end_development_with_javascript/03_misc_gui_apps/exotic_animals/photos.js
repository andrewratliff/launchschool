document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section");

  section.addEventListener("mouseover", event => {
    let timeoutId;

    if (event.target.nodeName === "IMG") {
      const figcaption = event.target.nextElementSibling;

      timeoutId = setTimeout(function() {
        figcaption.style.display = "block";
      }, 2000);

      event.target.addEventListener("mouseleave", () => {
        clearTimeout(timeoutId);
        figcaption.style.display = "none";
      });
    }
  })
});
