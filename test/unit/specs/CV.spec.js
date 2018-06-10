import Vue from 'vue';
import CV from '@/components/CV';

describe('CV.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(CV)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App');
  });
})
