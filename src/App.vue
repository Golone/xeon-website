<template>
  <v-app>
    <AppNavigation />
    <router-view />
    <AppFooter />
  </v-app>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppNavigation,
    AppFooter,
  },
};
</script>