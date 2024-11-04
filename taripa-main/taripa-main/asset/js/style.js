// login
// Ambil elemen form, input username, password, dan errorMessage
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

// Tambahkan event listener untuk submit
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Cegah form dari submit default

  // Ambil nilai dari inputan username dan password
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validasi username dan password
  if (username === "admin" && password === "12345") {
    // Jika valid, redirect ke dashboard (misalnya dashboard.html)
    window.location.href = "dashboard.html";
  } else {
    // Jika salah, tampilkan pesan error
    errorMessage.style.display = "block";
  }
});

// dahboard

// submit order
(function () {
  "use strict";

  // Ambil form dan tombol submit
  const form = document.getElementById("myForm");
  const submitBtn = document.getElementById("submitBtn");
  const successMessage = document.getElementById("successMessage");

  // Event listener untuk form submit
  form.addEventListener(
    "submit",
    function (event) {
      // Cegah form dari submit dan modal dari menutup
      event.preventDefault();

      // Cek validasi form
      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        // Jika valid, sembunyikan tombol submit
        submitBtn.classList.add("d-none");

        // Tampilkan pesan sukses
        successMessage.classList.remove("d-none");
      }

      // Tambahkan kelas validasi Bootstrap
      form.classList.add("was-validated");
    },
    false
  );
})();
