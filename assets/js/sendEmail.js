function sendMail(contactForm) {
    var service_id = "default_service";
    var template_id = "smresume";
    emailjs.send("gmail", "smresume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
        
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    contactForm.reset();
    return false;  // To block from loading a new page
}
