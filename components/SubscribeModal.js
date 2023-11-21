import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { render } from "storyblok-rich-text-react-renderer";
import { Icon } from "@iconify/react";
import { ValidateEmail } from "../utils/utils";

const SubscribeModal = ({
  showModal,
  setShowModal,
  image,
  title,
  text,
  thankyouTitle,
  thankyouText,
  logo,
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const organisationInputRef = useRef(null);
  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/subscribe-user", {
      body: JSON.stringify({
        email: emailInputRef.current.value,
        first_name: nameInputRef.current.value,
        organisation: organisationInputRef.current.value,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    if (res) setHasSubmitted(true);
  };

  return (
    <Dialog
      open={showModal}
      onClose={closeModal}
      as="div"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "rgba(0, 0, 0, 0.86)",
        zIndex: "100",
      }}
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto"
    >
      <div className="flex flex-col text-white xs:p-4 md:p-8 items-center justify-center">
        <Dialog.Overlay
          style={{ background: "rgba(0, 0, 0, 0.86)" }}
          onClick={() => setShowModal(false)}
        />
        <div className="flex bg-gray-light text-black xs:max-w-full sm:max-w-[80%] md:w-1024">
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
            {hasSubmitted ? (
              <>
                <div className="px-4 mt-8 mb-6 font-bold xs:text-[32px] sm:text-[48px] leading-10">
                  {render(thankyouTitle)}
                </div>
                <div className="px-4 mb-8 xs:text-[16px] sm:text-[18px]">
                  {render(thankyouText)}
                </div>
                <img
                  className="px-4 mb-6"
                  style={{ maxWidth: "55%" }}
                  src={logo.filename}
                />
              </>
            ) : (
              <>
                <div className="px-4 mb-6">{render(title)}</div>
                <div className="px-4 mb-6">{render(text)}</div>
                <form className="px-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="first-name"
                    >
                      First name *
                    </label>
                    <input
                      ref={nameInputRef}
                      className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="first-name"
                      required
                      placeholder="First name"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      ref={emailInputRef}
                      className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      required
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="organisation"
                    >
                      Organisation
                    </label>
                    <input
                      ref={organisationInputRef}
                      className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="organisation"
                      placeholder="Organisation"
                      type="text"
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      className={`bg-melon text-white rounded-full py-2 px-8 focus:outline-none focus:shadow-outline ${
                        nameInputRef.current.value !== "" &&
                        emailInputRef.current.value !== "" &&
                        ValidateEmail(emailInputRef.current.value)
                          ? "active-button"
                          : "disabled-button"
                      }`}
                      disabled={
                        !(
                          nameInputRef.current.value !== "" &&
                          emailInputRef.current.value !== "" &&
                          ValidateEmail(emailInputRef.current.value)
                        )
                      }
                      type="button"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SubscribeModal;
