function SendMail() {
    let emailsParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    
    const service_ID = "service_dboghv6";
    const temp_ID = "template_w2bh9eh";
    
    emailjs
        .send(service_ID, temp_ID, emailsParams)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent");
        })
        .catch((err) => console.log(err));
}