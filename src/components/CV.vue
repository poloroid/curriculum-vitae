<template>
  <div class="grid">
    <Introduction/>
    <Biography/>
    <Languages/>
    <ProfessionalExperience/>
    <Technologies/>
    <EducationSection/>
    <Links/>
  </div>
</template>

<script>
import Biography from '@/components/sections/Biography';
import Languages from '@/components/sections/Languages';
import Introduction from '@/components/sections/Introduction';
import ProfessionalExperience from '@/components/sections/ProfessionalExperience';
import Technologies from '@/components/sections/Technologies';
import EducationSection from '@/components/sections/EducationSection';
import Links from '@/components/sections/Links';

export default {
  name: 'CV',
  components: { Links,
    EducationSection,
    Technologies,
    ProfessionalExperience,
    Introduction,
    Languages,
    Biography },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $font-1: 2.369em;
  $font-2: 1.777em;
  $font-3: 1.333em;
  $font-4: 1em;
  $font-5: 0.8em;

  @mixin card($padding: 1em) {
    flex: 1;
    padding: $padding;
    background-color: hsl(20, 20, 98);
    box-shadow: 0 1px 2px hsla(220, 20, 20, 0.3);
    border-radius: 2px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      @media only screen {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      }
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  a {
    color: royalblue;
    text-decoration: none;
  }

  body {
    color: hsl(220, 20, 25);
    background-color: hsl(20, 20, 96);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.4;
    @media (min-width: 60em) {
      font-size: 1.125em;
    }
  }

  p {
    margin-top: 1em;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    line-height: 1;
  }

  h1 {
    font-size: $font-1;
  }

  h2,
  .h2 {
    font-size: $font-3;
    font-weight: bold;
  }

  h3,
  .h3 {
    font-size: $font-3;
    font-weight: bold;
  }

  h4,
  .h4 {
    font-size: $font-4;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  h5,
  .h5 {
    font-size: $font-5;
    font-weight: bold;
    margin-bottom: 1em;
    & + div {
      margin-top: .3em;
    }
  }

  .grid {
    padding: 1em;
    & > * + * {
      margin-top: 1.5em;
    }
    @media (min-width: 40em) {
      min-height: 100vh;
      max-width: 65em;
      margin: 0 auto;
      // @supports ensures we keep the mobile layout when grid isn't available
      @supports (display: grid) {
        padding: 0 1em;
        display: grid;
        // Define 6 grid columns each 1 fraction of the available width
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        // Define 3 grid rows, a 5em header and footer
        // and a middle row filling the rest of the available space
        grid-template-rows: 5em auto auto auto auto 5em;
        // Set a 1em gutter between columns
        grid-gap: 1.5em;
        // Tell grid how much space each named area should span
        grid-template-areas:
          "header header header header header header"
          "about about about about about about"
          "languages languages languages languages languages languages"
          "main main main main sidebar sidebar"
          "education education education education education education"
          "footer footer footer footer footer footer";
        // Reset the margin between each child section as grid handles this
        & > * + * {
          margin-top: 0;
        }
      }
    }
  }

  .about {
    grid-area: about;
  }

  .languages {
    grid-area: languages;
  }

  .main {
    grid-area: main;
  }

  .sidebar {
    grid-area: sidebar;
  }

  .education {
    grid-area: education;
  }


  .header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    margin-right: 0.5em;
    width: 2em;
    height: 2em;
    &--right {
      margin-right: 0;
      margin-left: 0.5em;
    }
    &--bottom {
      margin-right: 0;
      margin-bottom: 0.25em;
    }
  }

  .languages-grid {
    & > * + * {
      margin-top: 0.5em;
    }
    @media (min-width: 40em) {
      display: flex!important;

      & > * + * {
        margin-top: 0;
        margin-left: 0.5em;
      }
    }

    @media print {
      display: flex!important;
    }
  }

  .card {
    position: relative;
    @include card;
    &__date {
      font-size: $font-5;
      color: #666;
      @media (min-width: 22em) {
        position: absolute;
        top: 1em;
        right: 1em;
      }
    }
  }

  .tech {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0.75em;
    @media (min-width: 40em) {
      grid-template-columns: 1fr;
    }
    &__item {
      @include card(0.75em 0.5em);
      display: flex;
      align-items: center;
      line-height: 1.2;
      @media print {
        line-height: .8;
      }
    }
  }

  .schools-grid {
    & > * + * {
      margin-top: 1em;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;
    & > * {
      margin-top: 0;
    }
    @media (min-width: 40em) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 40em) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .footer {
    grid-area: footer;
    display: flex;
    align-items: center;
    &__list {
      width: 100%;
      font-size: $font-5;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    &__link {
      color: inherit;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .section {
    height: 100%;
    display: flex;
    flex-direction: column;
    & > * + * {
      margin-top: 1em;
    }
  }

  .u-visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
</style>
