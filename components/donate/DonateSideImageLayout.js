import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import { useEffect, useState } from "react";
import DonateForm from "./DonateForm";
import DonationThankYou from "./DonationThankYou";

const DonateSideImageLayout = ({ blok }) => {
  const [showModal, setShowModal] = useState(false);

  const thank_you_modal = blok.thank_you_modal[0];

  useEffect(() => {
    const hasMadePayment = new URLSearchParams(window.location.search).get(
      "payment_success"
    );
    if (hasMadePayment) setShowModal(true);
  }, []);

  return (
    <>
      <div className="flex mt-12">
        <div
          className="xs:hidden md:block md:w-[40%] min-h-full"
          style={{
            backgroundImage: `url(${blok.side_image.filename})`,
            backgroundSize: `cover`,
          }}
        />
        <div className="flex flex-col xs:p-4 sm:p-8 md:p-4 pr-8 md:mt-24 xs:w-full xl:w-[75%] max-w-[750px]">
          <section className="py-8">{render(blok.title)}</section>
          <section className="p-8 pt-0">{render(blok.content)}</section>
          <DonateForm
            disclaimerOne={blok.disclaimer_one}
            disclaimerTwo={blok.disclaimer_two}
          />
        </div>
      </div>
      <DonationThankYou
        showModal={showModal}
        setShowModal={setShowModal}
        image={thank_you_modal.image}
        title={thank_you_modal.title}
        text={thank_you_modal.content}
        logo={thank_you_modal.logo}
      />
    </>
  );
};

export default DonateSideImageLayout;
