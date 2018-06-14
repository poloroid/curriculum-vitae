<template>
    <footer class="footer">
        <ul class="footer__list">
            <li>
                <a class="footer__link" href="https://github.com/poloroid">
                    <img class="icon icon--bottom" src="../../assets/icons/github.svg"/>
                    <span>Github</span>
                </a>
            </li>
            <li>
                <a class="footer__link" href="https://twitter.com/Donpablolino">
                  <img class="icon icon--bottom" src="../../assets/icons/twitter.svg"/>
                    <span>Twitter</span>
                </a>
            </li>
            <li>
                <a class="footer__link" href="https://www.linkedin.com/in/paul-renaudat-56741158/">
                  <img class="icon icon--bottom" src="../../assets/icons/linkedin.svg"/>
                    <span>LinkedIn</span>
                </a>
            </li>
            <li>
                <a class="footer__link" href="https://stackoverflow.com/users/6283258/paul-rdt">
                  <img class="icon icon--bottom" src="../../assets/icons/stackoverflow.svg"/>
                    <span>Stack Overflow</span>
                </a>
            </li>
        </ul>
    </footer>
</template>
<script>
export default {
  name: 'Links',
};
</script>
<style lang="scss" scoped>
  @media print {
    .footer {
      display: none;
    }
  }
</style>
