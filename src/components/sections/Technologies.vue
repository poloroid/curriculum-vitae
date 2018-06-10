<template>
    <aside class="sidebar">
        <section class="section" id="technologies">
            <h2>Technologies</h2>
            <ul class="tech">
              <TechItem v-for="tech in techList" :tech="tech" :key="tech.text"/>
            </ul>
        </section>
    </aside>
</template>
<script>
import TechItem from '@/components/cards/TechItem';
import techList from '@/assets/config/technologies';

export default {
  name: 'Technologies',
  components: { TechItem },
  data() {
    return {
      techList,
    };
  },
};
</script>
