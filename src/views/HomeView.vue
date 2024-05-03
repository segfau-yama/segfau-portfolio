<template>
  <v-app>
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

    <v-container>
      <h1 class="text-center">About</h1>
      <v-row class="d-flex justify-center">
        <v-col cols="7" sm="6" lg="3">
          <v-img
            cover
            :src="my_icon"
          ></v-img>
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
    
    <v-container>
      <h1 class="text-center">History</h1>
      <v-timeline side="end">
        <v-timeline-item
                dot-color="primary"
                class="text-h6 border"
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

    <v-container>
      <h1 class="text-center">Works</h1>
      <v-row>
    <v-col cols="12" sm="6" md="4" v-for="work in works">
      <v-card>
        <v-img cover :src="work.img"></v-img>
        <v-card-title><b>{{ work.title }}</b></v-card-title>
        <v-card-subtitle>{{ work.subtitle }}</v-card-subtitle>
        <v-card-text>{{ work.text }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
    </v-container>
    
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from "@/assets/segfau_icon.webp";
import TopImage from "@/assets/top_image.webp";
import Im920sImage from "@/assets/works/im920s.webp";
import OmuniImage from "@/assets/works/ymym_omuni.webp";
import McbImage from "@/assets/works/mcb.webp";
import MagdetImage from "@/assets/works/magdet.webp";
import NpcbImage from "@/assets/works/npcb.webp";
import OseroImage from "@/assets/works/nw_osero.webp";


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
]

const works = [
  {
    img: Im920sImage,
    title: 'im920s_arduino',
    subtitle: '2024/1',
    text: `
    Arduino UNOとIM920sでシリアル通信を行うスケッチ。
    PS3コントローラとの接続、シリアルモニタからのコマンド打ち込みが可能。
    `,
  },
  {
    img: OmuniImage,
    title: 'YmYm Omuni',
    subtitle: '2023/1',
    text: `
    DCモータで動く三輪オムニラジコン。
    期待は3dプリンタパーツとテクセルで作成
    `,
  },
  {
    img: McbImage,
    title: 'Motor Control Board',
    subtitle: '2023/1',
    text: `
    4つのDCモーターを制御できるボード。
    ESP32を利用しているためbluetoothコントローラと通信が可能。
    `,
  },
  {
    img: MagdetImage,
    title: 'MagDet',
    subtitle: '2022/6',
    text: `
    温泉旅館の空き情報をWeb上に表示するIoT機器
    M5Stackで施錠検知を行っている
    `,
  },
  {
    img: NpcbImage,
    title: 'NPCB(National Power Calc Bot)',
    subtitle: '2022/5',
    text: `
    架空国家での国力計算を自動化するbot。
    ニコニコの音楽再生機能部分のコード分離予定。
    現在停止中
    `,
  },
  {
    img: OseroImage,
    title: 'NW Osero',
    subtitle: '2020/12',
    text: `
    同時に複数人対戦可能な通信型オセロゲーム。
    LAN内での対戦のみ対応
    `,
  },
]


export default defineComponent({
  name: 'App',
  data () {
    return {
      my_icon: Icon,
      my_headline: TopImage,
      histories,
      works,
    }
  },
})
</script>

<style>
  .top_img img {
    filter: brightness(0.7);
  }
</style>