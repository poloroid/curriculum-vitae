<template>
    <dl class="card">
        <dt class="u-visually-hidden">Company:</dt>
        <dd class="h3" v-text="experience.company">
        <dt class="u-visually-hidden">Role:</dt>
        <dd class="h4" v-text="experience.title"/>
        <dt class="u-visually-hidden">Period:</dt>
        <dd class="card__date">
            <span v-text="experience.dateRange"/>
        </dd>
        <dt class="u-visually-hidden">Details:</dt>
        <dd class="card__details">
          <ul>
            <li v-for="element in experience.elements" :key="element.title">
              <span class="h5" v-text="element.title"/>
              <div  v-html="element.text"/>
              <Label v-if="element.tags" v-for="tag in element.tags" :text="tag" :key="tag"/>
            </li>
          </ul>
        </dd>
    </dl>
</template>
<script>
import Label from '@/components/utils/Label';

export default {
  name: 'Experience',
  components: { Label },
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
  .card {
    flex: auto;
  }
  li {
    margin-left: 2em;
    &:before {
      content: ">_";
      font-size: 1.1rem;
      font-weight: bolder;
      display: inline-block;
      width: 1rem;
      margin: 0 .5rem 0 -1.4rem;
      color: #55ba86;
    }
  }
</style>
