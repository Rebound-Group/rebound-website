import { useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from 'clsx';
import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react';


const SubscribeModal = ({showModal, setShowModal, image, title, text}) => {
    function closeModal() {
        setShowModal(false);
      }
    
      function openModal() {
        setShowModal(true);
      }
    
  return (
	<Dialog
			open={showModal}
			onClose={closeModal}
			as="div"
            style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "grey", zIndex: "100"}}
			className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto"
		>
			<div className="flex flex-col text-white w-96 p-8 items-center justify-center">
				<Dialog.Overlay className="bg-gray-800" onClick={() => setShowModal(false)}/>

                <div className="flex bg-white text-black max-w-[80%]">
                    <div className="left-col">
                        <img src={image.filename} />
                    </div>
                    <div className="right-col p-4" style={{ maxWidth: "55%"}}>
                        <div className="w-full flex justify-end">
                    <button
					className="m-2 text-black"
					onClick={() => setShowModal(false)}
				>
					<Icon icon="ic:round-close" className="text-3xl" />
				</button> 
                </div>
                        <div className="px-4">{render(title)}</div>
                        <div className="px-4">{render(text)}</div>

                        <form className="px-4">
    <div className="mb-4">
      <label className="block text-gray-700 mb-2" htmlFor="first-name">
        First Name
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2" htmlFor="organisation">
        Organisation
      </label>
      <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="organisation" type="text" />
    </div>

    <div className="mb-4">
      <button className="border rounded-full py-2 px-8 focus:outline-none focus:shadow-outline" type="button" >
        Submit
      </button>
    </div>
  </form>
                    </div>
                </div>

				{/* <Dialog.Title className="text-red-500 text-3xl">
					Deactivate account
				</Dialog.Title>
				<Dialog.Description className="text-xl m-2">
					This will permanently deactivate your account
				</Dialog.Description> */}

				{/* <p className="text-md m-4">
					Are you sure you want to deactivate your account? All of your data
					will be permanently removed. This action cannot be undone.
				</p>

				<button
					className="w-full m-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
					onClick={() => setShowModal(false)}
				>
					Deactivate
				</button>
				<button
					className="m-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					onClick={() => setShowModal(false)}
				>
					Cancel
				</button> */}
			</div>
		</Dialog>
  )
}

export default SubscribeModal