import { useState } from 'react'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from 'clsx';
import { render } from 'storyblok-rich-text-react-renderer';
import { Icon } from '@iconify/react';


const ContactThankYou = ({showModal, setShowModal, image, title, text, logo}) => {
    const [hasSubmitted, setHasSubmitted] = useState(false)
    function closeModal() {
        setShowModal(false);
      }
    
      function openModal() {
        setShowModal(true);
      }

      const handleSubmit = () => {
        setHasSubmitted(true)
      }

    
  return (
	<Dialog
			open={showModal}
			onClose={closeModal}
			as="div"
            style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", background: "rgba(0, 0, 0, 0.86)", zIndex: "100"}}
			className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto"
		>
			<div className="flex flex-col text-white p-8 items-center justify-center">
				<Dialog.Overlay style={{ background: "rgba(0, 0, 0, 0.86)"}} onClick={() => setShowModal(false)}/>

                <div className="flex bg-gray-light text-black max-w-[80%]">
                    <div className="left-col">
                        <img className="xs:hidden md:block" src={image.filename} />
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
                        <div className="px-4 mt-8 mb-6 font-bold" style={{ fontSize: "60px",lineHeight: 1}}>{render(title)}</div>
                        <div className="px-4 mb-8" style={{ fontSize: "24px",lineHeight: 1 }}>{render(text)}</div>
                        <img className="px-4 mb-6" style={{ maxWidth: "55%"}} src={logo.filename} />
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

export default ContactThankYou