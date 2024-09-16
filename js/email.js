
emailjs.init({
    publicKey: 'wL27h9DexEYkPca4v',
  });



function sendEmailJS() {
    console.log("Hello, !");



    const serviceID = 'default_service';
    const templateID = 'template_l5cn2h9';

    emailjs.sendForm(serviceID, templateID, document.getElementById('contact_form'))
        .then(() => {
        // alert('Sent!');
        }, (err) => {
        alert(JSON.stringify(err));
        });
};

// emailjs.sendForm('contact_service', 'contact_form', this);