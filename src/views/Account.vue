<script setup lang="ts">
import { IonPage, IonHeader, IonCol, IonRow, IonText, IonButton, IonToolbar, IonTitle, IonContent, IonAvatar } from '@ionic/vue'
import { IconArrowRight, IconArrowLeft, IconArrowUpRight, IconInfoCircle } from '@tabler/icons-vue'
import { tempData } from '@/mock/data'

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
</script>

<template>
  <ion-page>
    <ion-header collapse="condense" class="flex flex-col py-2 ion-no-border" :class="isIOS()?'status-bar': ''">
      <ion-toolbar>
        <ion-title class="px-8 text-start text-2xl">Accounts</ion-title>
      </ion-toolbar>
      <ion-row class="justify-center items-center font-bold mt-3">
        <ion-avatar class="w-6 h-6 mr-2">
          <img src="@/assets/imgs/union.png" />
        </ion-avatar>
        <ion-text>EUR SEPA Account</ion-text>
      </ion-row>
      <ion-row class="justify-center items-center font-semibold mt-3">
        <ion-text class="text-2xl">33,373.43 EUR</ion-text>
      </ion-row>
      <ion-row class="justify-center mt-4">
        <ion-row class="flex-col mr-2">
          <ion-button class="w-12 h-12" color="light" shape="round">
            <icon-arrow-up-right />
          </ion-button>
          <span class="text-sm text-center">Send</span>
        </ion-row>
        <ion-row class="flex-col">
          <ion-button class="w-12 h-12" color="light" shape="round">
            <icon-info-circle />
          </ion-button>
          <span class="text-sm text-center">Details</span>
        </ion-row>
      </ion-row>
    </ion-header>
    <ion-content>
      <ion-row v-for="(data, index) in tempData" :key="index" class="flex-col px-3 border-b py-2">
        <ion-row class="mb-3 text-sm font-medium">{{ data.date }}</ion-row>
        <ion-row class="items-center">
          <ion-avatar class="flex justify-center items-center bg-gray-200 w-8 h-8 mr-2">
            <icon-arrow-right v-if="data.type==='income'" :size="16" />
            <icon-arrow-left v-else :size="16" />
          </ion-avatar>
          <ion-col class="flex flex-col whitespace-nowrap flex-nowrap overflow-auto">
            <ion-row>{{ data.title }}</ion-row>
            <ion-row class="items-center flex-nowrap">
              <span class="text-sm">{{ data.status }}</span>
              <span class="text-2xl mx-1">
                &middot;
              </span>
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
  --padding-start: 0.25rem;
  --padding-top: 0.25rem;
  --padding-bottom: 0.25rem;
  --padding-end: 0.25rem;
}
</style>