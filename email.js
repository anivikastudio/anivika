window.addEventListener('load', () => {
    if (typeof emailjs !== 'undefined') {
      emailjs.init("jtd1P03pa89WWNuPV");
      
      const form = document.getElementById("contact-form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        emailjs.sendForm("service_zip39n7", "template_sgpvddb", this)
          .then(() => {
            alert("Email sent successfully!");
            form.reset();
          })
          .catch((error) => {
            alert("Failed to send email, please try again.");
            console.error("EmailJS error:", error);
          });
      });
    } else {
      console.error("EmailJS library is not loaded.");
    }
  });
  