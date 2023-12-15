<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonRow, IonCol, IonButton, IonInput, IonAvatar } from '@ionic/vue'
import { IconX, IconPlus, IconSearch } from '@tabler/icons-vue';

const recent = [
  {
    type: 'sefa',
    unit: 'eur',
    title: 'greenhill advisor ike',
    from: 'GR54 0140 1460 0200 2027 358',
    to: 'CR40 2503 1232 0493 992'
  },
  {
    type: 'sefa',
    unit: 'eur',
    title: 'prosperity single menber ike',
    from: 'GR53 0140 1460 0200 2027 358',
    to: 'CR40 2503 1232 0493 992'
  },
  {
    type: 'sefa',
    unit: 'eur',
    title: 'callamus limited',
    from: 'SR54 0140 1460 0200 2027 358',
    to: 'CP40 2503 1232 0493 992'
  },
]
const all = [
  {
    type: 'sefa',
    unit: 'eur',
    title: 'antonis markopoulos',
    from: 'GR54 0140 1460 0200 2027 358',
    to: 'CR40 2503 1232 0493 992'
  },
  {
    type: 'sefa',
    unit: 'eur',
    title: 'callamus limited',
    from: 'GR53 0140 1460 0200 2027 358',
    to: 'CR40 2503 1232 0493 992'
  },
  {
    type: 'sefa',
    unit: 'eur',
    title: 'greenhill advisor ike',
    from: 'SR54 0140 1460 0200 2027 358',
    to: 'CP40 2503 1232 0493 992'
  },
]

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
</script>

<template>
  <ion-page>
    <ion-header collapse="condense" class="flex flex-col px-6 py-2 ion-no-border" :class="isIOS()?'status-bar': ''">
      <ion-row>
        <ion-col class="flex flex-col items-baseline justify-around">
          <icon-x class="active:opacity-60 active:scale-90" />
          <ion-text class="text-xl font-bold">Send to</ion-text>
        </ion-col>
        <ion-col class="flex flex-row justify-end items-center mt-6">
          <ion-text class="whitespace-nowrap font-semibold text-sm mr-2">New beneficiery</ion-text>
          <ion-button color="dark" class="w-12 h-12">
            <icon-plus />
          </ion-button>
        </ion-col>
      </ion-row>
      <ion-input placeholder="Search beneficiery" class="flex-1 rounded-md bg-gray-100 my-2 custom align-middle">
        <icon-search class="absolute right-4 top-5 z-10 text-gray-400 active:opacity-40" />
      </ion-input>
    </ion-header>
    <ion-content>
      <ion-row class="px-6 py-3">Recent</ion-row>
      <ion-row v-for="(item, index) in recent" :key="index" class="px-6 py-2 items-center border-b">
        <ion-avatar class="w-8 h-8 mr-2">
          <img v-if="item.unit === 'eur'" src="@/assets/imgs/union.png" />
        </ion-avatar>
        <ion-col style="max-width: 17rem;">
          <ion-row class="uppercase">{{ item.title }}</ion-row>
          <ion-row class="items-center overflow-auto text-sm whitespace-nowrap flex-nowrap">
            <span class="uppercase">{{ item.unit }}</span>
            <span class="text-2xl mx-1">
              &middot;
            </span>
            <span class="uppercase">{{ item.type }}</span>
            <span class="text-2xl mx-1">
              &middot;
            </span>
            <span>{{ item.from }}</span>
            <span class="text-2xl mx-1">
              &middot;
            </span>
            <span>{{ item.to }}</span>
          </ion-row>  
        </ion-col>
      </ion-row>

      <ion-row class="px-6 py-3">All beneficieries</ion-row>
      <ion-row v-for="(item, index) in all" :key="index" class="px-6 py-2 items-center border-b">
        <ion-avatar class="w-8 h-8 mr-2">
          <img v-if="item.unit === 'eur'" src="@/assets/imgs/union.png" />
        </ion-avatar>
        <ion-col style="max-width: 17rem;">
          <ion-row class="uppercase">{{ item.title }}</ion-row>
          <ion-row class="items-center overflow-auto text-sm whitespace-nowrap flex-nowrap">
            <span class="uppercase">{{ item.unit }}</span>
            <span class="text-2xl mx-1">
              &middot;
            </span>
            <span class="uppercase">{{ item.type }}</span>
            <span class="text-2xl mx-1">
              &middot;
            </span>
            <span>{{ item.from }}</span>
            <span class="text-2xl mx-1">
              &middot;
            </span>
            <span>{{ item.to }}</span>
          </ion-row>  
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-button {
  --border-radius: 4rem;

  --padding-start: 0.75rem;
  --padding-top: 0.75rem;
  --padding-bottom: 0.75rem;
  --padding-end: 0.75rem;
}
ion-input.custom {
  --padding-bottom: 1.5rem;
  --padding-end: 3.5rem;
  --padding-start: 10px;
  --padding-top: 1.5rem;
}
</style>