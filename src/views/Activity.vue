<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'

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
    <ion-content fullscreen>
      
    </ion-content>
  </ion-page>
</template>

