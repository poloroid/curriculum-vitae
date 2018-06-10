<template>
    <li :class="`card ${lang.code}`">
      <h3>{{$t(lang.title)}}</h3>
      <h4>{{$t(lang.level)}}</h4>
      <p v-html="lang.text"/>
    </li>
</template>
<script>
export default {
  name: 'Language',
  props: {
    lang: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
   .fr {
    background: url("../../assets/icons/fr.svg");
  }
  .en {
    background: url("../../assets/icons/en.svg");
  }
  .dk {
    background: url("../../assets/icons/dk.svg");
  }
  .de {
    background: url("../../assets/icons/de.svg");
  }
   .card {
     background-size: 100% 100%;
  }

</style>
