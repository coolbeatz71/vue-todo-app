<template>
  <v-footer height="auto" dark>
    <v-card class="flex" flat tile>
      <v-card-title class="pink">
        <strong class="subheading">
          The project is a simple Todo application for the sake of learning
          VueJS, VueX and Vuetify.Contact me on social media to get more help
        </strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-1 justify-center">
        &copy;2019 —
        <strong>Organizer</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),
};
</script>
