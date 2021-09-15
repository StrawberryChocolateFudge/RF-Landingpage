const contact_form = document.getElementById("contact-form") as HTMLFormElement;

contact_form.onsubmit = async function (e: Event) {
  e.preventDefault();
  const display = document.getElementById("message-display");
  display.innerHTML = "Message sent!";
  await send();
};

async function send() {
  const name = document.getElementById("name-input") as HTMLInputElement;
  const email = document.getElementById("email-input") as HTMLInputElement;
  const subject = document.getElementById("subject-input") as HTMLInputElement;
  const phone = document.getElementById("phone-input") as HTMLInputElement;
  const message = document.getElementById("message-input") as HTMLInputElement;
  const data = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    phone: phone.value,
    message: message.value,
  };

  await fetch("https://ricardian-fabric-backend.vercel.app/api/contact", {
    method: "post",
    body: JSON.stringify(data),
  });
}
