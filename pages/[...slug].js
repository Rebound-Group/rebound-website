import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainNavigation from "../components/navigation/MainNavigation";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
  story = useStoryblokState(story);

  //debugger;

  const nav = story.content.main_navigation[0] || null;
  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {nav && <MainNavigation data={nav} />}

      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({ params, preview }) {
  const slug = params.slug ? params.slug.join("/") : "home";

  preview = true;

  const sbParams = {
    version: preview ? "draft" : "published",
    cv: new Date().getTime(),
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  //debugger;

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
  const { data } = await storyblokApi.get("cdn/links/");
  const paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    const slug = data.links[linkKey].slug;
    const splittedSlug = slug.split("/");
    if (splittedSlug.length > 1) return;

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
