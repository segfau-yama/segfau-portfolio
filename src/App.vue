<template>
  <v-app :theme="theme">
    <v-app-bar 
    color="primary"
    scroll-behavior="hide"
    >
      <v-toolbar-title>Segfau-Lab</v-toolbar-title>
      <template v-if="other">
        <v-tabs align-tabs="center">
          <v-tab v-for="(page, index) in routes" :key="index" :to="page.path">
            {{ page.name }}
          </v-tab>
        </v-tabs>
      </template>
      <template v-slot:extension v-if="tablet">
        <v-spacer v-if="mobile"></v-spacer>
        <v-tabs>
          <v-tab v-for="(page, index) in routes" :key="index" :to="page.path">
            {{ page.name }}
          </v-tab>
        </v-tabs>
        <v-spacer v-if="mobile"></v-spacer>
      </template>
      <v-btn @click="change_theme" icon>
        <v-icon :icon="icon_theme"></v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <RouterView></RouterView>
    </v-main>

    <v-footer
      color="secondary"
      class="text-center d-flex flex-column"
    >
      <h1 class="text-center">Contact</h1>
      <div class="pt-0">
        最後まで見てくれてありがと～。連絡は下だよ
      </div>
      <div>
        <v-btn
          v-for="contact in contacts"
          :key="contact.url"
          :href="contact.url"
          :icon="contact.icon"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>
      <v-divider></v-divider>
      <div>
        ©{{ new Date().getFullYear() }} <strong>YamaYama</strong> All Rights Reserved
      </div>
    </v-footer>
  </v-app>
</template>


<script lang="ts">
import { ref, defineComponent } from 'vue'
import { routes } from '@/router'
import { useDisplay, useTheme } from 'vuetify'

export default defineComponent({
  name: 'App',
  setup() {
    const theme = ref('light');
    const display = useDisplay();
    const contacts = [
      {
        icon: 'mdi-email',
        url: 'mailto:suiki547@gmail.com',
      },
      {
        icon: 'mdi-twitter',
        url: 'https://twitter.com/VyaVma',
      },
      {
        icon: 'mdi-github',
        url: 'https://github.com/segfau-yama',
      },
      {
        icon: 'mdi-discord',
        url: 'https://discord.com/invite/pZHew9Ty',
      },
    ];
    return {
      contacts,
      routes,
      mobile: display.xs,
      tablet: display.smAndDown,
      other: display.mdAndUp,
      theme,
      icon_theme: 'mdi-weather-night',
    };
  },
  methods: {
    change_theme: function() {
      if (this.theme == 'light') {
        this.theme = 'dark';
        this.icon_theme = 'mdi-weather-sunny';
      }
      else {
        this.theme = 'light';
        this.icon_theme = 'mdi-weather-night';
      }
      console.log(this.icon_theme);
    },
  },
});
</script>

