<template>
  <div
    class="HomePage"
    @scroll="onScroll()"
  >
  <MainBlock />
      <AboutUsBlock />
      <MenuBlock />
      <WorkBlock />  
  </div>
</template>

<script>
import MainBlock from '@/components/blocks/MainBlock.vue';
import WorkBlock from '@/components/blocks/workBlock/WorkBlock.vue';
import MenuBlock from '@/components/blocks/menuBlock/MenuBlock.vue';
import AboutUsBlock from '@/components/blocks/AboutUsBlock.vue';

export default {
  name: 'HomePage',

  components: {
    MainBlock,
     AboutUsBlock,
      WorkBlock,
      MenuBlock,
  },

  methods: {
    onScroll() {
      console.log('Scro0LL');
    }
  }
}
</script>
