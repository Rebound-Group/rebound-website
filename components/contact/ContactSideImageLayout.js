import { storyblokEditable } from "@storyblok/react";
import { render } from 'storyblok-rich-text-react-renderer';

const ContactSideImageLayout = ({ blok }) => {
  // console.log(blok)
  return (
    <div className="flex mt-12">
      <img src={blok.image.filename}/>
      <div className="flex flex-col p-4 mt-24 w-full">
        <section className="p-8">{render(blok.title)}</section>
        <form className="p-8 max-w-[75%]">
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
      <textarea className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" />
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
      <button className="border rounded-full py-2 px-8 focus:outline-none focus:shadow-outline" type="button" >
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
  );
};

export default ContactSideImageLayout;
