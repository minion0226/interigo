<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}
</script>

<template>
  <ion-page>
    <ion-header no-border collapse="condense" class="flex flex-col gap-3 py-2" :class="isIOS()?'status-bar': ''">
      <ion-toolbar>
        <ion-title class="px-8 text-start text-2xl">Activity</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      
    </ion-content>
  </ion-page>
</template>

