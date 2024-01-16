const form = document.querySelector("form");
const fullName=document.getElementById("name")
const contact=document.getElementById("contact1")
const phone=document.getElementById("tell")
const mail=document.getElementById("email")
const message=document.getElementById("message")


function sendEmail() {
    const bodymessage=`Full Name: ${fullName.value}<br>
    E-mail: ${mail.value}<br> Phone Number: ${phone.value}<br> Contact: ${contact.value} <br> Message : ${message.value}`;
  Email.send({
    SecureToken :"9d64bb8b-7851-4eaa-bf69-20ef82523cbe",
    // Host: "smtp.elasticemail.com",
    // Username: "vaibhavkothari50@gmail.com",
    // Password: "6081649879F60E912143740C4379F59D6D3A",
    To: "vaibhavkothari50@gmail.com",
    From: "vaibhavkothari50@gmail.com",
    Subject: "Response From website",
    Body: bodymessage,
  }).then(
    message=>{
        if (message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }

    }
    // message => alert(message)
  );
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
  form.reset();
  return false;
});
