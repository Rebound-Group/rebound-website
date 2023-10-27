import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainNavigation from "../components/navigation/MainNavigation";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Script from "next/script";

export default function Page({ story }) {
  story = useStoryblokState(story);

  // debugger;

  const nav = story.content.main_navigation[0] || null;
  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {nav && <MainNavigation data={nav} />}

      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "published", // or 'draft'
    cv: new Date().getTime(),
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  // debugger;

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    if (splittedSlug.length > 1) {
      return;
    }

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
