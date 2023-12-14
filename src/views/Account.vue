<script setup lang="ts">
import { IonPage, IonHeader, IonCol, IonRow, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonAvatar } from '@ionic/vue'
import { IconArrowRight, IconArrowLeft, IconPointFilled, IconArrowUpRight, IconInfoCircle } from '@tabler/icons-vue'

const tempData = [
  {
    date: '05 Dec 2023',
    type: 'income',
    title: 'Greenhill Advisor Ignitor',
    status: 'successful',
    duration: '15:30',
    amount: '15000',
    unit: 'EUR'
  },
  {
    date: '01 Dec 2023',
    type: 'income',
    title: 'interigo',
    status: 'successful',
    duration: '02:00',
    amount: '29',
    unit: 'EUR'
  },
  {
    date: '20 Nov 2023',
    type: 'income',
    title: 'interigo',
    status: 'successful',
    duration: '07:05',
    amount: '40000',
    unit: 'EUR'
  },
  {
    date: '09 Nov 2023',
    type: 'income',
    title: 'Greenhill Advisor Ignitor',
    status: 'successful',
    duration: '12:42',
    amount: '3500',
    unit: 'EUR'
  },
]

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
</script>

<template>
  <ion-page>
    <ion-header collapse="condense" class="flex flex-col gap-3" :class="isIOS()?'status-bar': ''">
      <ion-toolbar>
        <ion-title class="px-8 text-start text-2xl">Accounts</ion-title>
      </ion-toolbar>
      <ion-row class="justify-center items-center gap-2 font-bold">
        <ion-avatar class="w-6 h-6">
          <img src="@/assets/imgs/union.png" />
        </ion-avatar>
        <ion-text>EUR SEPA Account</ion-text>
      </ion-row>
      <ion-row class="justify-center items-center gap-2 font-bold">
        <ion-text class="text-2xl"> 333,333.43 EUR</ion-text>
      </ion-row>
      <ion-row class="justify-center gap-2 mt-4">
        <ion-row class="flex-col">
          <ion-button color="light" shape="round">
            <icon-arrow-up-right :size="24" />
          </ion-button>
          <span class="text-sm text-center">Send</span>
        </ion-row>
        <ion-row class="flex-col">
          <ion-button color="light" shape="round">
            <icon-info-circle />
          </ion-button>
          <span class="text-sm text-center">Details</span>
        </ion-row>
      </ion-row>
    </ion-header>
    <ion-content>
      <ion-row v-for="(data, index) in tempData" :key="index" class="flex-col px-3 border-b py-2">
        <ion-row class="mb-3 text-sm font-semibold">{{ data.date }}</ion-row>
        <ion-row class="items-center">
          <ion-avatar class="flex justify-center items-center bg-gray-200 w-8 h-8">
            <icon-arrow-right v-if="data.type==='income'" :size="16" />
            <icon-arrow-left v-else :size="16" />
          </ion-avatar>
          <ion-col>
            <ion-row class="uppercase">{{ data.title }}</ion-row>
            <ion-row class="items-center">
              <span class="text-sm">{{ data.status }}</span>
              <icon-point-filled :size="8" />
              <span class="text-sm">{{ data.duration }}</span>
            </ion-row>
          </ion-col>
          <ion-text class="font-bold">
            <span v-if="data.type === 'income'">-</span>
            {{ data.amount }} {{ data.unit }}
          </ion-text>
        </ion-row>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-button {
  --padding-start: 1rem;
  --padding-top: 1rem;
  --padding-bottom: 1rem;
  --padding-end: 1rem;
}
</style>