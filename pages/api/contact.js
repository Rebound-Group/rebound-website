import fetch from 'isomorphic-unfetch';
import emailjs from '@emailjs/browser';

export default async (req, res) => {
  const { email, first_name, organisation } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
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