<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonList, IonCol, IonRow, IonToolbar, IonTitle, IonText, IonBadge } from '@ionic/vue'
import { IconChevronRight, IconLock, IconCircleArrowRightFilled, IconBellFilled, IconInfoCircleFilled, IconCirclesRelation } from '@tabler/icons-vue';
import { useIonRouter } from '@ionic/vue'
import { IconBrandHipchat } from '@tabler/icons-vue';

const ionRouter = useIonRouter()

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
</script>

<template>
  <ion-page>
    <ion-header collapse="condense" class="flex flex-col py-2 ion-no-border" :class="isIOS()?'status-bar': ''">
      <ion-toolbar>
        <ion-title class="px-8 text-start text-2xl">More</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-col class="flex flex-row px-6 border-b py-4 active:text-blue-500">
          <icon-lock />
          <ion-text class="flex-grow mx-2"> Security and data</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col class="flex flex-row px-6 border-b py-4 active:text-blue-500">
          <icon-bell-filled />
          <ion-text class="flex-grow mx-2">Notifications</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col class="flex flex-row px-6 border-b py-4 active:text-blue-500">
          <icon-circles-relation />
          <ion-text class="flex-grow mx-2">3D Secure</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col class="flex flex-row px-6 border-b py-4 active:text-blue-500">
          <ion-row class="relative">
            <icon-brand-hipchat />
            <ion-badge>1</ion-badge>
          </ion-row>
          <ion-text class="flex-grow mx-2">Chat</ion-text>
        </ion-col>
        <ion-col class="flex flex-row px-6 border-b py-4 active:text-blue-500">
          <icon-info-circle-filled />
          <ion-text class="flex-grow mx-2">About</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col @click="ionRouter.push('/login')" class="flex flex-row px-6 border-b py-4 active:text-blue-500">
          <icon-circle-arrow-right-filled />
          <ion-text class="flex-grow mx-2">Log out</ion-text>
        </ion-col>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-badge {
  position: absolute;
  right: -0.45rem;
  top: -0.45rem;
  font-size: x-small;

  --background: #465ead;
  --color: white;
  width: 1rem;
  height: 1rem;

  --padding-top: 0.25rem;
  --padding-end: 0.25rem;
  --padding-bottom: 0.25rem;
  --padding-start: 0.25rem;
}
</style>