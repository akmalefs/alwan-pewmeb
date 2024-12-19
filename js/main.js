document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  Swal.fire({
    title: "Pendaftaran Berhasil",
    text: "Silahkan tunggu prosesnyaa!",
    icon: "success"
  });
});
