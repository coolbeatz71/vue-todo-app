<template>
  <v-app>
    <v-toolbar color="primary" dark app>
      <v-icon>view_list</v-icon>
      <v-toolbar-title>Organizer</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- the home page route -->
      <router-link to="/">
        <v-btn flat class="text-capitalize">
          <v-icon>home</v-icon>Home
        </v-btn>
      </router-link>

      <!-- the about page route -->
      <router-link to="/about">
        <v-btn flat class="text-capitalize">
          <v-icon>info</v-icon>About
        </v-btn>
      </router-link>
    </v-toolbar>
    <div class="progress-container">
      <v-progress-linear
        class="progress-bar"
        v-show="isLoading"
        color="pink accent-4"
        :indeterminate="true"
      ></v-progress-linear>
    </div>
    <v-container mt-5>
      <v-layout my-5 row>
        <router-view />
      </v-layout>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {
    this.$store.watch(
      (state, getters) => getters.getLoading,
      (newValue, oldValue) => {
        if (newValue === true) {
          this.isLoading = true;
        }

        if (oldValue === true) {
          this.isLoading = false;
        }
      },
    );
  },
};
</script>


<style lang="scss">
.progress-container {
  height: 10px;

  .progress-bar {
    margin-top: 65px;
  }
}
</style>
