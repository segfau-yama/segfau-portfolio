<template>
  <v-container>
    <h1 class="text-center">Skills</h1>  
    <v-progress-linear
      v-model="knowledge"
      height="25"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>
  </v-container>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Skill",
  data () {
    return {
      knowledge: 33,
    }
    
  }
})
</script>
  