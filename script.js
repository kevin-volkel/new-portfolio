emailjs.init({
    publicKey: "_le5ITPTwtaiLi-l-",
});

const sendEmail = (formName, formEmail, formMessage) => {
    const serviceID = "service_8s6921i";
    const templateID = "template_xnf4y5h";

    if (!serviceID || !templateID) {
        console.error("Service ID or Template ID is missing in the environment variables.");
        return;
    }

    let templateParams = {
        email: formEmail,
        name: formName,
        message: formMessage,
    }

    emailjs.send(serviceID, templateID, templateParams)
}

// Attach to the form submit event so the form never reloads the page when JS is active
const emailForm = document.querySelector('.email-form');
if (emailForm) {
    emailForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formName = document.getElementById("name").value.trim();
        const formEmail = document.getElementById("email").value.trim();
        const formMessage = document.getElementById("message").value.trim();

        if (!formName || !formEmail || !formMessage) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        // If emailjs is not loaded (e.g., blocked on deployed site), fail gracefully
        if (typeof emailjs === 'undefined' || !emailjs.send) {
            console.warn('emailjs not available; form submit intercepted but email not sent.');
            alert('Unable to send message right now. Please try again later.');
            return;
        }

        sendEmail(formName, formEmail, formMessage);
        alert("Your message has been sent successfully!");
        emailForm.reset();
    });
} else {
    console.warn('Email form element not found.');
}