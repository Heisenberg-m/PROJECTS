// Send email on form submission
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const subject = document.querySelector("#subject").value;
  const description = document.querySelector("#description").value;

  const mailToLink = `mailto:insertyourmail@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(description)}`;

  window.location.href = mailToLink;
});
