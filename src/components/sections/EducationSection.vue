<template>
    <section class="education section">
        <h2>Education</h2>
        <div class="schools-grid">
          <Education v-for="x in educationList" :education="x" :key="x.level"/>
        </div>
    </section>
</template>
<script>
import Education from '@/components/cards/Education';
import educationList from '@/assets/config/education';

export default {
  name: 'EducationSection',
  components: { Education },
  data() {
    return {
      educationList,
    };
  },
};
</script>
