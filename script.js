// script.js
console.log("✅ script.js cargado");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM listo");

  function showError(inputEl, message) {
    const existing = document.getElementById(inputEl.id + '-error');
    if (existing) existing.remove();

    const span = document.createElement('span');
    span.className = 'input-error';
    span.id = inputEl.id + '-error';
    span.textContent = message;
    inputEl.insertAdjacentElement('afterend', span);
    inputEl.classList.add('input-invalid');
  }

  function clearErrors(form) {
    form.querySelectorAll('.input-error').forEach(e => e.remove());
    form.querySelectorAll('.input-invalid').forEach(i => i.classList.remove('input-invalid'));
  }

  // Validación login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      clearErrors(loginForm);

      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();
      let ok = true;

      if (!email) {
        showError(document.getElementById("login-email"), "Ingresa un correo.");
        ok = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError(document.getElementById("login-email"), "Correo no válido.");
        ok = false;
      }

      if (!password) {
        showError(document.getElementById("login-password"), "Ingresa la contraseña.");
        ok = false;
      } else if (password.length < 6) {
        showError(document.getElementById("login-password"), "Mínimo 6 caracteres.");
        ok = false;
      }

      if (!ok) return;
      window.location.href = "index.html";
    });
  }

  // Validación registro
  const registroForm = document.getElementById("registroForm");
if (registroForm) {
  registroForm.addEventListener("submit", function(e) {
    e.preventDefault();
    clearErrors(registroForm);

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let ok = true;

    if (!username) {
      showError(document.getElementById("username"), "Ingresa un usuario.");
      ok = false;
    } else if (username.length < 3) {
      showError(document.getElementById("username"), "Mínimo 3 caracteres.");
      ok = false;
    }

    if (!email) {
      showError(document.getElementById("email"), "Ingresa un correo.");
      ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError(document.getElementById("email"), "Correo no válido.");
      ok = false;
    }

    if (!password) {
      showError(document.getElementById("password"), "Ingresa la contraseña.");
      ok = false;
    } else if (password.length < 6) {
      showError(document.getElementById("password"), "Mínimo 6 caracteres.");
      ok = false;
    }

    if (!ok) return;
    window.location.href = "login.html";
  });
}
});
