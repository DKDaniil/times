<template>
    <div class="MainPage">
        <router-view />
        <TheFooter />
    </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: 'MainPage',

    components: {
        TheFooter
    }
}
</script>