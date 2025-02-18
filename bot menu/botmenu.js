
 let lastScrollTop = 0;
    const floatingIcon = document.getElementById("floatingIcon");

    window.addEventListener("scroll", function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scroll down -> Hide button
        floatingIcon.classList.add("hidden");
      } else {
        // Scroll up -> Show button
        floatingIcon.classList.remove("hidden");
      
}

      lastScrollTop = scrollTop;
    });