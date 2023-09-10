import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  const { email, first_name, organisation } = req.body;

  console.log({ email, first_name, organisation });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;

    console.log(AUDIENCE_ID)

    const data = {
      email_address: email,
      merge_fields: {
        FNAME: first_name || " ",
        ORG: organisation || " ",
      },
      status: 'subscribed',
    };

    console.log(data)

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
    console.log(response.headers)
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