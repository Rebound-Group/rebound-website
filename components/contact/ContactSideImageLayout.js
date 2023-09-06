import {useState} from 'react'
import { render } from 'storyblok-rich-text-react-renderer';
import ContactThankYou from './ContactThankYou';

const ContactSideImageLayout = ({ blok }) => {

  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  console.log(blok)
  function closeModal() {
    setShowModal(false);
  }

  const thank_you_modal = blok.thank_you_modal[0]


  const handleSubmit = () => {
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
      <label className="block text-gray-700 mb-2" htmlFor="first-name">
        First Name
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="last-name">
        Last Name
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="role">
        Role
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="organisation">
        Organisation
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="organisation" type="text" />
    </div>
      <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="subject">
        Subject
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 mb-2" htmlFor="message">
        Message
      </label>
      <textarea rows="4" className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" />
    </div>

    <p classNameName="uppercase font-bold">WANT TO RECEIVE UPDATES ON THE REBOUND PROJECT ?
</p>
<div className="mb-6">
    <label className=" block text-gray-500">
      <input className="mr-2 leading-tight border-melon" type="checkbox" />
      <span className="text-sm">
        Yes (You can unsubscribe at any time.)
      </span>
    </label>
  </div>

    <div className="mb-6">
      <button className="border rounded-full py-2 px-8 focus:outline-none focus:shadow-outline" onClick={() => handleSubmit()} type="button" >
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
