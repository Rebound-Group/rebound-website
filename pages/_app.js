import "../styles/globals.css";
import "../styles/output.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import StatsCarousel from "../components/StatsCarousel";
import BecomeARebounder from "../components/BecomeARebounder";
import DonateSideImageLayout from "../components/donate/DonateSideImageLayout";
import ContactSideImageLayout from "../components/contact/ContactSideImageLayout";
import MainNavigation from "../components/navigation/MainNavigation";
import Footer from "../components/Footer";
import OurPartners from "../components/OurPartners";
import HomeHero from "../components/home/HomeHero";
import HomeTwoColumn from "../components/home/HomeTwoColumn"
import HomeContentWithCTA from "../components/home/HomeContentWithCTA"
import HomeImageGrid from "../components/home/HomeImageGrid";
import HomeExpandableGrid from "../components/home/HomeExpandableGrid";
import OurGoalHero from "../components/our-goal/OurGoalHero";
import OurGoalImageLeftSection from "../components/our-goal/OurGoalImageLeftSection";
import OurGoalImageRightSection from "../components/our-goal/OurGoalImageRightSection";
import OurGoalProjectCarousel from "../components/our-goal/OurGoalProjectCarousel";
import OurGoalThreeColumn from "../components/our-goal/OurGoalThreeColumn";
import OurGoalOurReaction from "../components/our-goal/OurGoalOurReaction";
import GovernanceHero from "../components/governance/GovernanceHero";
import GovernanceList from "../components/governance/GovernanceList";
import GovernanceTitle from "../components/governance/GovernanceTitle";
import GovernanceOverview from "../components/governance/GovernanceOverview";
import PrivacyPolicy from "../components/compliance/PrivacyPolicy";
import TermsOfService from "../components/compliance/TermsOfService";
import ContactThankYou from "../components/contact/ContactThankYou";

const components = {
  feature: Feature,
  grid: Grid,
  main_navigation: MainNavigation,
  page: Page,
  footer: Footer,
  stats_carousel: StatsCarousel,
  become_a_rebounder: BecomeARebounder,
  ourPartners: OurPartners,
  home_page_hero: HomeHero,
  home_two_column: HomeTwoColumn,
  home_content_with_cta: HomeContentWithCTA,
  home_image_grid: HomeImageGrid,
  home_exapandable_grid: HomeExpandableGrid,
  our_goal_hero: OurGoalHero,
  our_goal_image_left_section: OurGoalImageLeftSection,
  our_goal_image_right_section: OurGoalImageRightSection,
  our_goal_project_carousel: OurGoalProjectCarousel,
  our_goal_three_column: OurGoalThreeColumn,
  our_goal_our_reaction: OurGoalOurReaction,
  governance_hero: GovernanceHero,
  governance_list: GovernanceList,
  governance_title: GovernanceTitle,
  governance_overview: GovernanceOverview,
  donate_side_image_layout: DonateSideImageLayout,
  contact_side_image_layout: ContactSideImageLayout,
  privacy_policy: PrivacyPolicy,
  terms_of_service: TermsOfService,
  contact_thank_you: ContactThankYou,
};

storyblokInit({
  accessToken: "qInT9TYEj3U2ABmVFX7kSAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "us",
  },
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
