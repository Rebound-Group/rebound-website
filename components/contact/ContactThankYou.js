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

                <div className="flex bg-gray-light text-black xs:max-w-full sm:max-w-[80%]">
                    <div className="left-col">
                        <img className="xs:hidden lg:block" src={image.filename} />
                    </div>
                    <div className="right-col p-4 xs:max-w-full lg:max-w-[55%]">
                        <div className="w-full flex justify-end">
                    <button
					className="m-2 text-black"
					onClick={() => setShowModal(false)}
				>
					<Icon icon="ic:round-close" className="text-3xl" />
				</button> 
                </div>
                        <div className="px-4 mt-8 mb-6 font-bold xs:text-[40px] sm:text-[60px]">{render(title)}</div>
                        <div className="px-4 mb-8 xs:text-[20px] sm:text-[24px]">{render(text)}</div>
                        <img className="px-4 mb-6" style={{ maxWidth: "55%"}} src={logo.filename} />
                    </div>
                </div>
			</div>
		</Dialog>
  )
}

export default ContactThankYou