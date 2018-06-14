<template>
    <header class="header">
        <h1>Paul Renaudat</h1>
        <a href="mailto:paulrenaudat123@gmail.com" v-text="'paulrenaudat123@gmail.com'"/>
        <Flags/>
    </header>
</template>
<script>
import Flags from '../utils/Flags';

export default {
  name: 'Introduction',
  components: { Flags },
};
</script>
