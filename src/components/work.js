/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import BgText from "./bgText";
import Project from "./project";

import Reward from "../images/reward.jpg";
import List from "../images/list.jpg";
import Event from "../images/event.jpg";
import Browse from "../images/browse.jpg";

export default () => (
  <section
    css={css`
      background: transparent;
      padding: 8vmin;
      min-height: 100vh;
      position: relative;
      z-index: 9;
    `}
  >
    <BgText>Work</BgText>
    <Project title="Gu Guide" images={[Browse, Reward, List, Event]}>
      <p>The Gu Guide is an IoT travel guide covering the Canggu area of Bali, Indonesia</p>
      <p>
        Tourists can find nearby bars, restaurants, cafes, spas etc. as well as upcoming events in
        the area.
      </p>
      <p>
        Finally, participating venues offer rewards for users which are triggered on entry with
        bluetooth beacons.
      </p>
      <p>
        For this project, the app was built with React Native, and a bespoke CMS with an API built
        on NodeJS deployed to Google Cloud Functions.
      </p>
      <p>Available on the App Store & Google Play</p>
      <a
        css={css`
          display: inline-block;
          vertical-align: top;
          margin-top: 10px;
        `}
        href="https://apps.apple.com/us/app/gu-guide/id1287919525?mt=8"
      >
        <img
          src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2017-10-31&kind=iossoftware&bubble=ios_apps"
          alt=""
          css={css`
            display: inline-block;
            width: 135px;
            height: 40px;
          `}
        />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.jamjar.guguide2&hl=en_GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img
          alt="Get it on Google Play"
          css={css`
            display: inline-block;
            height: 60px;
          `}
          src="https://play.google.com/intl/en_gb/badges/static/images/badges/en_badge_web_generic.png"
        />
      </a>
    </Project>
  </section>
);
