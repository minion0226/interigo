<script setup lang="ts">
import { IonPage, IonContent, IonHeader, IonList, IonCol, IonRow, IonToolbar, IonTitle, IonRippleEffect, IonText, IonBadge } from '@ionic/vue'
import { IconChevronRight, IconLock, IconCircleArrowRightFilled, IconBellFilled, IconInfoCircleFilled, IconMessageDots, IconCirclesRelation } from '@tabler/icons-vue';
import { useIonRouter } from '@ionic/vue'

const ionRouter = useIonRouter()

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
</script>

<template>
  <ion-page>
    <ion-header collapse="condense" class="flex flex-col gap-3 py-3" :class="isIOS()?'status-bar': ''">
      <ion-toolbar>
        <ion-title class="px-8 text-start text-2xl">More</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list lines="full">
        <ion-col class="flex flex-row px-8 border-b py-4 gap-2 ion-activatable ripple-parent">
          <ion-ripple-effect />
          <icon-lock />
          <ion-text class="flex-grow"> Security and data</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col class="flex flex-row px-8 border-b py-4 gap-2 ion-activatable ripple-parent">
          <ion-ripple-effect />
          <icon-bell-filled />
          <ion-text class="flex-grow">Notifications</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col class="flex flex-row px-8 border-b py-4 gap-2 ion-activatable ripple-parent">
          <ion-ripple-effect />
          <icon-circles-relation />
          <ion-text class="flex-grow">3D Secure</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col class="flex flex-row px-8 border-b py-4 gap-2 ion-activatable ripple-parent">
          <ion-ripple-effect />
          <ion-row class="relative">
            <icon-message-dots />
            <ion-badge>1</ion-badge>
          </ion-row>
          <ion-text class="flex-grow">Chat</ion-text>
        </ion-col>
        <ion-col class="flex flex-row px-8 border-b py-4 gap-2 ion-activatable ripple-parent">
          <ion-ripple-effect />
          <icon-info-circle-filled />
          <ion-text class="flex-grow">About</ion-text>
          <icon-chevron-right />
        </ion-col>
        <ion-col @click="ionRouter.push('/login')" class="flex flex-row px-8 border-b py-4 gap-2 ion-activatable ripple-parent">
          <ion-ripple-effect />
          <icon-circle-arrow-right-filled />
          <ion-text class="flex-grow">Log out</ion-text>
        </ion-col>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-badge {
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  font-size: x-small;

  --background: #465ead;
  --color: white;

  --padding-top: 0.25rem;
  --padding-end: 0.25rem;
  --padding-bottom: 0.25rem;
  --padding-start: 0.25rem;
}
</style>