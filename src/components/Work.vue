<template>
    <v-container>
    <h1 class="text-center">Works</h1>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="work in works">
        <v-card color="surface">
          <v-img cover :lazy-src="work.img" :src="work.img"></v-img>
          <v-card-title><b>{{ work.title }}</b></v-card-title>
          <v-card-subtitle>{{ work.subtitle }}</v-card-subtitle>
          <v-card-text>{{ work.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Im920sImage from "@/assets/works/im920s.webp";
import OmuniImage from "@/assets/works/ymym_omuni.webp";
import McbImage from "@/assets/works/mcb.webp";
import MagdetImage from "@/assets/works/magdet.webp";
import NpcbImage from "@/assets/works/npcb.webp";
import OseroImage from "@/assets/works/nw_osero.webp";


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
    機体は3dプリンタパーツとテクセルで作成
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
  name: 'Work',
  data () {
    return {
      works,
    }
  },
})
</script>