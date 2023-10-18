import { render } from "storyblok-rich-text-react-renderer";
import { useState, useEffect } from "react";
import styles from "./MainNavigation.module.css";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import SubscribeModal from "../SubscribeModal";

const MainNavigation = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const NavBackgroundColor = () => {
    if (data.background_color === "black") return "#000";
    if (data.background_color === "green") return "#255F36";
    if (data.background_color === "opaque") return "rgba(0,0,0,0.4)";
    return "none";
  };

  const CTABackgroundColor = (color) => {
    if (color === "melon") return { backgroundColor: "#E58A80", color: "#fff" };
    return { backgroundColor: "#fff", color: "#000" };
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 720);
    }
    setIsMobile(window.innerWidth < 720);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <Menu>
        {({ open, close }) => (
          <>
            <div className="bg-dark-green w-full flex items-center justify-center p-2">
              <Menu.Button
                className="absolute text-white  text-xl mr-8 w-fit"
                style={{ left: "12px" }}
              >
                <Icon icon="tabler:menu" />
              </Menu.Button>
              <a href="/" className="flex-2">
                <img
                  src={data.logo.filename}
                  className="h-fit w-fit"
                  style={{ maxWidth: "158px", maxHeight: "38px" }}
                />
              </a>
            </div>
            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="bg-white border border-gray-200 divide-y divide-gray-100 ashadow-lg outline-none"
                style={{
                  position: "absolute",
                  top: "-56px",
                  left: "0",
                  width: "70%",
                  bottom: "0",
                  height: "100vh",
                  background: "white",
                  zIndex: "100",
                }}
              >
                <div className="p-2 flex bg-dark-green justify-between items-center">
                  <a href="/" className="flex-2">
                    <img
                      src={data.logo.filename}
                      className="h-fit w-fit"
                      style={{ maxHeight: "38px" }}
                    />
                  </a>
                  {/* {({ close }) => ( */}
                  <Icon
                    icon="ic:round-close"
                    onClick={close}
                    className="text-2xl text-white"
                  />
                  {/* )} */}
                </div>

                <div className="flex flex-col">
                  {data.nav_link &&
                    data.nav_link.map((item, i) => (
                      <Menu.Item key={i * 333}>
                        <a
                          className="p-4 flex bg-white justify-between items-center max-w-[80%}"
                          href={item.url.url}
                        >
                          {item.display_text}
                          <Icon icon="octicon:chevron-right-12" />
                        </a>
                      </Menu.Item>
                    ))}
                  {data.nav_cta &&
                    data.nav_cta.map((item, i) => (
                      <Menu.Item key={i * 444}>
                        <a
                          className="p-4 flex bg-white justify-between items-center max-w-[80%}"
                          href={item.url}
                        >
                          {item.display_text}
                          <Icon icon="octicon:chevron-right-12" />
                        </a>
                      </Menu.Item>
                    ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  }

  return (
    <div
      className={styles.MainNavigation}
      style={{ backgroundColor: NavBackgroundColor() }}
    >
      <a href="/">
        <img
          src={data.logo.filename}
          className="h-fit w-fit"
          style={{ maxHeight: "42px" }}
        />
      </a>
      <div className="flex justify-end items-center">
        {data.nav_link &&
          data.nav_link.map((item, i) => (
            <a className="text-white mr-4" href={item.url.url} key={i * 222}>
              {item.display_text}
            </a>
          ))}
        {data.nav_cta &&
          data.nav_cta.map((item, i) => (
            <a
              className="text-white rounded-full py-2 px-4 mr-4"
              style={CTABackgroundColor(item.color)}
              href={item.url}
              key={i * 111}
            >
              {item.display_text}
            </a>
          ))}
        {data.show_subscribe_cta && (
          <button
            className="text-white rounded-full py-2 px-4 mr-4"
            style={CTABackgroundColor(data.subscribe_cta_color)}
            onClick={() => setShowModal(true)}
          >
            {data.subscribe_cta_text}
          </button>
        )}
      </div>
      <SubscribeModal
        showModal={showModal}
        setShowModal={setShowModal}
        image={data.subscribe_modal_image}
        title={data.subscribe_modal_title}
        text={data.subscribe_modal_text}
        thankyouTitle={data.subscribe_modal_thank_you_title}
        thankyouText={data.subscribe_modal_thank_you_text}
        logo={data.subscribe_modal_thank_you_logo}
      />
    </div>
  );
};

export default MainNavigation;
