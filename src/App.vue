<template>
  <v-app>
    <v-app-bar 
    color="primary"
    scroll-behavior="hide"
    >
      <v-toolbar-title>Segfau-Lab</v-toolbar-title>
      <v-expand-transition>
        <v-text-field
          hide-details
          single-line
          v-if="search_icon"
        ></v-text-field>
      </v-expand-transition>
      <v-btn icon @click="on_search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" show-arrows app>
          <v-tab v-for="(page, index) in pages" :key="index" :to="page.path">
            {{ page.name }}
          </v-tab>
        </v-tabs>
      </template>
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
        {{ new Date().getFullYear() }} — <strong>YamaYama</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pages } from '@/router'

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
]

export default defineComponent({
  name: 'App',
  data () {
    return {
      tab: null,
      search_icon: false,
      pages,
      contacts,
    }
  },
  methods: {
    on_search() {
      this.search_icon = !this.search_icon;
    }
  }
})
</script>

