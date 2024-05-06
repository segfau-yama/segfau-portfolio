<template>
    <v-parallax
      :src="my_headline"
      height="800"
      scale="0.5"
      class="top_img"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          Segfau-Lab
        </h1>
        <h4 class="subheading">
          やまやまのポートフォリオ
        </h4>
      </div>
    </v-parallax>
    <div class="my-10" />
    <about />
    <div class="my-10" />
    <history />
    <div class="my-10" />
    <work />
    <div class="my-10" />
</template>


<script lang="ts">
import work from '@/components/Work.vue'
import about from '@/components/About.vue'
import history from '@/components/History.vue'
import { defineComponent } from 'vue'
import TopImage from '@/assets/top_image.webp';




export default defineComponent({
  components: {
    work,
    about,
    history,
  },
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
      my_headline: TopImage,
      histories,
    }
  },
})
</script>

<style>
  .top_img img {
    filter: brightness(0.6);
  }
</style>