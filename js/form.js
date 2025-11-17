const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop actual submit

  // Simple UI confirmation
  alert("Message Sent! (UI Demo Only)");

  // Reset form fields
  form.reset();
});
