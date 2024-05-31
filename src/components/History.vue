<template>
  <v-container>
    <h1 class="text-center">History</h1>
    <v-timeline side="end" truncate-line="both">
      <v-timeline-item
        dot-color="primary"
        class="border"
        v-for="history in histories"
      >
        <template v-slot:opposite>
          <b>{{ history.time }}</b>
        </template>
        <div 
          class="text-left" 
          v-html="history.text.replace(/\n/g,'<br/>')"
        ></div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'



export default defineComponent({
  name: 'History',
  setup () {
    const histories = [
      {
        time: '2002/3',
        text: '青森県にて生まれる',
      },
      {
        time: '2017/3',
        text: `仙台高等専門学校総合工学科Ⅰ類 入学`,
      },
      {
        time: '2019/1',
        text: `Web×Iotハッカソンメイカーズチャレンジ 参加`,
      },
      {
        time: '2019/12',
        text: `Thailand-Japan Student ICT Fair 参加`,
      },
      {
        time: '2022/3',
        text: `仙台高等専門学校総合工学科Ⅰ類 卒業`,
      },
      {
        time: '2022/4',
        text: `
        仙台高等専門学校総合工学科専攻科
        情報電子システム工学専攻 入学
        `,
      },
      {
        time: '2022/7',
        text: `基本情報技術者 取得`,
      },
      {
        time: '2022/8',
        text: `第二種電気工事士 取得`,
      },
      {
        time: '2023/8',
        text: `日本高専学会学生優秀発表賞 受賞`,
      },
    ];
    return {
      histories,
    }
  },
})
</script>
