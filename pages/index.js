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

  const nav = story.content.main_navigation[0];
  const welcomeScreenEditable = story.content._editable;
  const welcomeScreenBlok = story.content.welcome_screen[0];

  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasSeenWelcome")) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showWelcome]);

  if (showWelcome) {
    return (
      <>
        {render(welcomeScreenEditable)}
        <div
          className={styles.WelcomeScreen}
          style={{
            backgroundImage: `url(${welcomeScreenBlok.images[0].filename})`,
          }}
        >
          <div className="absolute mt-8 mh-auto text-xl w-full top-0 text-center font-serif opacity-75">
            Expertise. Commitment. Impact.
          </div>
          <img
            className="max-h-[125px]"
            height="125px"
            src={welcomeScreenBlok.logo.filename}
          />
          {render(welcomeScreenBlok._editable)}
          <div className="text-center text-3xl mt-4 lg:mt-8 font-serif">
            {render(welcomeScreenBlok.title)}
          </div>
          <button
            className="border border-melon mt-4 lg:mt-8 rounded-full py-4 px-8 text-melon"
            onClick={() => setShowWelcome(false)}
          >
            {welcomeScreenBlok.cta_text}
          </button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rebound Global</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav && <MainNavigation data={nav} />}

      {showWelcome && (
        <>
          {render(welcomeScreenEditable)}
          <div
            className={styles.WelcomeScreen}
            style={{
              backgroundImage: `url(${welcomeScreenBlok.images[0].filename})`,
            }}
          >
            <img
              className="max-h-[125px]"
              height="125px"
              src={welcomeScreenBlok.logo.filename}
            />
            {render(welcomeScreenBlok._editable)}
            <div className="text-center mt-4 lg:mt-8 text-3xl font-serif">
              {render(welcomeScreenBlok.title)}
            </div>
            <button
              className="border border-melon rounded-full mt-4 lg:mt-8 py-4 px-8 text-melon"
              onClick={() => setShowWelcome(false)}
            >
              {welcomeScreenBlok.cta_text}
            </button>
          </div>
        </>
      )}

      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  const slug = "home";

  const sbParams = {
    version: "draft/published", //  'published || draft || draft/published'
    cv: new Date().getTime(),
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  debugger;

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
