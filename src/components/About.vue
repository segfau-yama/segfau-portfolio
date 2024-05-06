<template>
  <v-container>
    <h1 class="text-center">About</h1>
    <v-row class="d-flex justify-center">
      <v-col cols="7" sm="6" lg="3">
        <v-img cover :src="my_icon"></v-img>
      </v-col>
      <v-col class="d-flex align-center" cols="10" sm="6" lg="9">
        <div class="text-h6 text-left">
          青森県青森市生まれ宮城県仙台市育ちのポンコツです．<br>
          広く浅くをモットーにして生きているため全てが中途半端<br>
          プログラミング：Python, javascript, C, C++<br>
          回路設計：KiCad<br>
          機械設計：SolidWorks, Fusion360<br>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from "@/assets/segfau_icon.webp";


export default defineComponent({
  name: 'About',
  data () {
    return {
      my_icon: Icon,
    }
  },
})
</script>
    