<template>
    <dl class="card">
        <dt class="u-visually-hidden">Education level</dt>
        <dd class="h3" v-text="education.level"/>
        <dt class="u-visually-hidden">Institution</dt>
        <dd class="h4" v-text="education.institution"/>
        <dt class="u-visually-hidden">Subject</dt>
        <dd v-text="education.subject"/>
        <dt class="u-visually-hidden">Date</dt>
        <dd class="card__date">
          <time datetime="2012-07-01" v-text="education.date"/>
        </dd>
        <dt class="u-visually-hidden">Result</dt>
        <dd v-text="education.result"/>
    </dl>
</template>
<script>
export default {
  name: 'Education',
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  @media print {
    .card {
      background-color: red!important;
    }
  }
</style>
