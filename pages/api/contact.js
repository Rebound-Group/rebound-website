import fetch from 'isomorphic-unfetch';
import emailjs from '@emailjs/browser';

export default async (req, res) => {
  const { email, first_name, organisation } = req.body;

  console.log({ email, first_name, organisation });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.ELASTIC_MAIL_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    console.log(AUDIENCE_ID)

    // const template = `<p>new email<p>`

    // const data = {
    //   apikey: API_KEY,
    //   subject: "New Reach Out form submission",
    //   from: "wadenairn@gmail.com",
    //   fromName: "Rebound Global",
    //   msgTo: "wadenairn@gmail.com",
    //   bodyText: template,
    //   isTransactional: true
    // };

    var params = {
      service_id: 'service_06dmbor',
      template_id: 'template_yv94508',
      user_id: 'o7F9SKvtxjQ8eM5SV',
      template_params: {
        'subject': "Test 2",
        'first_name': "Wade",
        'last_name': "Nairn",
        'email': "wade@NAI.DIGITAL",
        'organisation': "Nai",
        'role': "CEO",
        'message': "HI 2",
        }
  };

  let headers = {
    'Content-type': 'application/json'
};

let options = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(params)
};

    // emailjs.sendForm('service_06dmbor', 'template_yv94508', {
    //   subject: "Test 2",
    //   first_name: "Wade",
    //   last_name: "Nairn",
    //   email: "wade@NAI.DIGITAL",
    //   organisation: "Nai",
    //   role: "CEO",
    //   message: "HI 2",
    //   }, 'o7F9SKvtxjQ8eM5SV')
    //   .then((result) => {
    //       console.log("EMAIL SEND", result.text);
    //   }, (error) => {
    //       console.log("EMAIL SEND ERROR", error.text);
    //   });

    // console.log(data)

    // const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    // .then((httpResponse) => {
    //     if (httpResponse.ok) {
    //         console.log('Your mail is sent!');
    //     } else {
    //         return httpResponse.text()
    //           .then(text => Promise.reject(text));
    //     }
    // })
    // .catch((error) => {
    //     console.log('Oops... ' + error);
    // });

    // const response = await fetch(
    //   `https://api.emailjs.com/api/v1.0/email/send`,

    //   {
    //     body: JSON.stringify(data),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //   }
    // );
    // console.log(response)
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`,
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};