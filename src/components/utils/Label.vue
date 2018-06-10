<template>
  <span class="label" v-text="text"/>
</template>

<script>
export default {
  name: 'Label',
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
  .label {
    background-color: #b5b5b5;
    color: #fff;
    font-size: 12px;
    font-size: 0.75rem;
    line-height: 2;
    border-radius: 4px;
    display: inline-block;
    font-weight: bold;
    padding: 3px 7px;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
    margin-right: .5em;
    margin-bottom: .5em;
  }
</style>
