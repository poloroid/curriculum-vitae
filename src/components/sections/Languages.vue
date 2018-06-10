<template>
    <aside class="languages">
        <section class="section" id="languages">
            <h2>{{ $t('Languages.title')}}</h2>
            <ul class="languages-grid">
              <Language v-for="language in languages" :lang="language" :key="language.title"/>
            </ul>
        </section>
    </aside>
</template>
<script>
import Language from '@/components/cards/Language';
import languages from '@/assets/config/languages';

export default {
  name: 'Languages',
  components: { Language },
  data() {
    return {
      languages,
    };
  },
};
</script>
