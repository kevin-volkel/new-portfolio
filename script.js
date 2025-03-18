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

document.getElementById("submit-btn").addEventListener("click", (event) => {
    event.preventDefault();

    const formName = document.getElementById("name").value;
    const formEmail = document.getElementById("email").value;
    const formMessage = document.getElementById("message").value;

    if (!formName || !formEmail || !formMessage) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    sendEmail(formName, formEmail, formMessage);
    alert("Your message has been sent successfully!");
});