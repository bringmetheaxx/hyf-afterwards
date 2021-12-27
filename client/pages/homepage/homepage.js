import HeaderComponent from "../../components/header-component.js";
import BannerSection from "./banner-section.js";
import BenefitSection from "/benefit-section.js";

const homepage = Vue.createApp({
  components: {
    HeaderComponent,
    BannerSection
  },
  template: `
  <header-component></header-component>
  <banner-section></banner-section>
  `,
}).mount("#homepage");

export default homepage;