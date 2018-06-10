<template>
    <dl class="card">
        <dt class="u-visually-hidden">Education level</dt>
        <dd class="h3">{{$t(education.level)}}</dd>
        <dt class="u-visually-hidden">Institution</dt>
        <dd class="h4">{{$t(education.institution)}}</dd>
        <dt class="u-visually-hidden">Subject</dt>
        <dd>{{$t(education.subject)}}</dd>
        <dt class="u-visually-hidden">Date</dt>
        <dd class="card__date">
          <time>{{$t(education.date)}}</time>
        </dd>
        <dt class="u-visually-hidden">Result</dt>
        <dd>{{$t(education.text)}}</dd>
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
