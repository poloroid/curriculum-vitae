<template>
    <li class="tech__item">
      <img class="icon" :src="getImgUrl"/>
        <span v-text="tech.text"/>
    </li>
</template>
<script>
export default {
  name: 'TechItem',
  props: {
    tech: {
      type: Object,
    },
  },
  computed: {
    getImgUrl() {
      const images = require.context('../../assets/icons/', false, /\.svg/);
      return images(`./${this.tech.icon}.svg`);
    },
  },
};
</script>
