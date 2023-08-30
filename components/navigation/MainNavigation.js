import { render } from 'storyblok-rich-text-react-renderer';
import { useState, useEffect } from 'react';
import styles from './MainNavigation.module.css'
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react';
import SubscribeModal from '../SubscribeModal';

const MainNavigation = ({ data }) => {
  let [showModal, setShowModal] = useState(false)
  let [isMobile, setIsMobile] = useState(false)

    console.log(data)
    const NavBackgroundColor = () => {
      if(data.background_color === "black") return "#000"
      if(data.background_color === "opaque") return "rgba(0,0,0,0.4)"
      return "none"
    }

    const CTABackgroundColor = (color) => {
      if(color === "melon") return {'backgroundColor': "#E58A80", 'color': "#fff" }
      return {'backgroundColor': "#fff", 'color': "#000" }
    }

    useEffect(() => {
      if(window.innerWidth < 600){
        setIsMobile(true)
      }
    })

    if(isMobile){
      return (
        <Menu>
          {({ open }) => (
            <>
          <div className="bg-black w-full flex items-center justify-center p-2">
        <Menu.Button className="absolute text-white mr-8 w-fit"><Icon icon="tabler:menu" /></Menu.Button>
        <a href="/" className="flex-2"><img src={data.logo.filename} className="h-fit w-fit" style={{ maxHeight: '38px'}}/></a>
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
                  className="origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 ashadow-lg outline-none"
                  style={{ position: "absolute", top: "0", left: "0", width: "60%", bottom: "0", background: "white", zIndex: "100"}}
                >
                  <div className="p-2 flex bg-black justify-between items-center">
                  <a href="/" className="flex-2"><img src={data.logo.filename} className="h-fit w-fit" style={{ maxHeight: '38px'}}/></a>
                  {/* {({ close }) => ( */}
                    <Icon icon="ic:round-close"  onClick={close} className="text-2xl text-white" />
                    {/* )} */}
                  </div>

                  <div className="py-1 flex flex-col">
                  {data.nav_link.map((item, i) => (
                      <Menu.Item><a className="m-4 flex justify-between items-center max-w-[80%}" href={item.url.url} key={i}>{item.display_text}<Icon icon="octicon:chevron-right-12" /></a></Menu.Item>
                    ))}
                    {data.nav_cta.map((item, i) => (
                      <Menu.Item><a className="m-4 flex justify-between items-center max-w-[80%}" href={item.url} key={i}>{item.display_text}<Icon icon="octicon:chevron-right-12" /></a></Menu.Item>
                    ))}
                    
                  </div>
                </Menu.Items>
              </Transition>
              </>
          )}
      </Menu>
      )
    }
    

  return (
    <div className={styles.MainNavigation} style={{ backgroundColor: NavBackgroundColor()}}>
        <a href="/"><img src={data.logo.filename} className="h-fit w-fit" style={{ maxHeight: '42px'}}/></a>
        <div className='flex justify-end items-center'>
          {data.nav_link.map((item, i) => (
            <a className="text-white mr-4" href={item.url.url} key={i}>{item.display_text}</a>
          ))}
          {data.nav_cta.map((item, i) => (
            <a className="text-white rounded-full py-2 px-4 mr-4" style={CTABackgroundColor(item.color)} href={item.url} key={i}>{item.display_text}</a>
          ))}
          {data.show_subscribe_cta && (
            <button className="text-white rounded-full py-2 px-4 mr-4" style={CTABackgroundColor(data.subscribe_cta_color)} onClick={() => setShowModal(true)}>{data.subscribe_cta_text}</button>
          )}
        </div>
        <SubscribeModal showModal={showModal} setShowModal={setShowModal} image={data.subscribe_modal_image} title={data.subscribe_modal_title}  text={data.subscribe_modal_text} />
    </div>
  );
};

export default MainNavigation;