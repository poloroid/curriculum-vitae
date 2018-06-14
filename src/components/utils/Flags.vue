<template>
  <span>
    <img
      v-for="country in countries"
      :key="country"
      @click="setLanguage(country)"
      class="flag"
      :src="getImgUrl(country)"/>
  </span>
</template>

<script>
import Vue from 'vue';
import * as translations from '../../assets/translations/';

export default {
  name: 'Flags',
  computed: {
    countries() {
      return Object.keys(translations)
        .map(y => y.substr(-2, 2).toLowerCase());
    },
  },
  methods: {
    setLanguage(language) {
      Vue.i18n.set(language);
    },
    getImgUrl(country) {
      const images = require.context('../../assets/icons/', false, /\.svg/);
      return images(`./${country}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
  .flag {
    @media print {
      display: none;
    }
    width: 30px;
    height: 20px;
    margin: 10px 10px 10px 10px;
    &.fr {
      background-size: 100% 100%;
      background: url("../../assets/icons/fr.svg");
    }
    &.en {
      background: url("../../assets/icons/en.svg");
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
