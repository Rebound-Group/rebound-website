import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainNavigation from "../components/navigation/MainNavigation";
import { useEffect, useState } from "react";
import { render } from "storyblok-rich-text-react-renderer";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);
  const nav = story.content.main_navigation[0]
  const welcomeScreen = story.content.welcome_screen[0]

  const [showWelcome, setShowWelcome] = useState(false)
  
  useEffect(() => {
    if (!sessionStorage.getItem("hasSeenWelcome")) {
      setShowWelcome(true)
      document.body.style.overflow = 'hidden';
    } else {
      setShowWelcome(false)
      document.body.style.overflow = 'unset';
    }
  },[])

  useEffect(() => {
    document.body.style.overflow = showWelcome ? 'hidden' : 'unset'
    sessionStorage.setItem("hasSeenWelcome", !showWelcome);
  }, [showWelcome])

  if(showWelcome) {
    return (
    <div className={styles.WelcomeScreen} style={{backgroundImage: `url(${welcomeScreen.images[0].filename})`}}>
      <img className="max-h-[125px]" height="125px" src={welcomeScreen.logo.filename} />
        <div className="text-center text-3xl mt-4 lg:mt-8  font-serif">
          {render(welcomeScreen.title)}
        </div>
        <button className="border border-melon mt-4 lg:mt-8  rounded-full py-4 px-8 text-melon" onClick={() => setShowWelcome(false)}>{welcomeScreen.cta_text}</button>
    </div>
  )
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Rebound Global</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav && <MainNavigation data={nav} />}
      {/* <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header> */}

    {showWelcome && (
      <div className={styles.WelcomeScreen} style={{backgroundImage: `url(${welcomeScreen.images[0].filename})`}}>
        <img className="max-h-[125px]" height="125px" src={welcomeScreen.logo.filename} />
          <div className="text-center mt-4 lg:mt-8 text-3xl font-serif">
            {render(welcomeScreen.title)}
          </div>
          <button className="border border-melon rounded-full mt-4 lg:mt-8 py-4 px-8 text-melon" onClick={() => setShowWelcome(false)}>{welcomeScreen.cta_text}</button>
      </div>
    )}

      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "published", // or 'draft'
    cv: new Date().getTime()
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
