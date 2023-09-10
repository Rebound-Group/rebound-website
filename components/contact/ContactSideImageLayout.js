import {useState, useRef} from 'react'
import { render } from 'storyblok-rich-text-react-renderer';
import ContactThankYou from './ContactThankYou';

const ContactSideImageLayout = ({ blok }) => {

  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const roleInputRef = useRef(null);
  const organisationInputRef = useRef(null);
  const subjectInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const signupInputRef = useRef(null);

  console.log(signupInputRef)
  function closeModal() {
    setShowModal(false);
  }

  const thank_you_modal = blok.thank_you_modal[0]

  const handleSubmit = async () => {
    var params = {
      service_id: 'service_06dmbor',
      template_id: 'template_yv94508',
      user_id: 'o7F9SKvtxjQ8eM5SV',
      template_params: {
        'subject': subjectInputRef.current.value,
        'first_name': firstNameInputRef.current.value,
        'last_name': lastNameInputRef.current.value,
        'email': emailInputRef.current.value,
        'organisation': organisationInputRef.current.value,
        'role': roleInputRef.current.value,
        'message': messageInputRef.current.value,
        'subject': subjectInputRef.current.value,
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

const res = fetch('https://api.emailjs.com/api/v1.0/email/send', options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            console.log('Your mail is sent!');
        } else {
            return httpResponse.text()
              .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
        console.log('Oops... ' + error);
    });

    if(signupInputRef.current.checked){
      const res2 = await fetch('/api/subscribe-user', {
        body: JSON.stringify({
          email: emailInputRef.current.value,
          first_name: firstNameInputRef.current.value,
          organisation: organisationInputRef.current.value,
        }),

        headers: {
          'Content-Type': 'application/json',
        },

        method: 'POST',
      });
    }
  
    if(res) setHasSubmitted(true)
    setHasSubmitted(true)
    setShowModal(true)
  }

  return (
    <>
    <div className="flex mt-12">
      <img className="xs:hidden md:block" src={blok.image.filename}/>
      <div className="flex flex-col xs:mt-12 md:mt-24 w-full">
        <section className="xs:p-4 md:p-8">{render(blok.title)}</section>
        <form className="xs:p-4 md:p-8 xs:w-full sm:max-w-[75%] md:max-w-full lg:max-w-[75%]">
    <div className="mb-6">
      <label ref={firstNameInputRef} className="block text-gray-700 mb-2" htmlFor="first-name">
        First Name
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="last-name">
        Last Name
      </label>
      <input ref={lastNameInputRef} className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="email">
        Email
      </label>
      <input ref={emailInputRef} className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="role">
        Role
      </label>
      <input ref={roleInputRef} className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="organisation">
        Organisation
      </label>
      <input ref={organisationInputRef} className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="organisation" type="text" />
    </div>
      <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="subject">
        Subject
      </label>
      <input ref={subjectInputRef} className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="message">
        Message
      </label>
      <textarea  ref={messageInputRef} rows="4" className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" />
    </div>

    <p classNameName="uppercase font-bold">WANT TO RECEIVE UPDATES ON THE REBOUND PROJECT ?
</p>
<div className="mb-6">
    <label className=" block text-gray-500">
      <input  ref={signupInputRef} className="mr-2 leading-tight border-melon" type="checkbox" />
      <span className="text-sm">
        Yes (You can unsubscribe at any time.)
      </span>
    </label>
  </div>

    <div className="mb-6">
      <button className="border bg-melon text-white rounded-full py-2 px-8 focus:outline-none focus:shadow-outline" onClick={() => handleSubmit()} type="button" >
        Submit
      </button>
    </div>
  </form>

  <section className="p-8">
  <div className="mb-6">
    {render(blok.contact_title)}
  </div>
  <div className="mb-6">
  {render(blok.contact_text)}
  </div>
  </section>
      </div>
    </div>

    <ContactThankYou showModal={showModal} setShowModal={setShowModal} image={thank_you_modal.image} title={thank_you_modal.title}  text={thank_you_modal.content} logo={thank_you_modal.logo} />
    </>
  );
};

export default ContactSideImageLayout;
