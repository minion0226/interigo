<script setup lang="ts">
import { IonPage, IonHeader, IonCol, IonRow, IonAvatar, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-vue'
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
        <ion-title class="px-8 text-start text-2xl">Activity</ion-title>
      </ion-toolbar>
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
            <ion-row class="uppercase">{{ data.title }}</ion-row>
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

