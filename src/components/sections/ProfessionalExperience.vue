<template>
    <main class="main">
        <section class="section" id="experience">
            <h2>{{$t('Experience.title')}}</h2>
          <Experience v-for="experience in experiences"
                      :experience="experience"
                      :key="experience.company"/>
        </section>
    </main>
</template>
<script>
import Experience from '@/components/cards/Experience';
import experiences from '@/assets/config/experiences';

export default {
  name: 'ProfessionalExperience',
  components: { Experience },
  data() {
    return {
      experiences,
    };
  },
};
</script>
