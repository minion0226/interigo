<script setup lang="ts">
import { IonPage, IonHeader, IonCol, IonToolbar, IonButton, IonTitle, IonContent, IonRow } from '@ionic/vue';
import { IconRefresh } from '@tabler/icons-vue'

const isIOS = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}
</script>

<template>
  <ion-page>
    <ion-header collapse="condense" class="flex flex-col py-2 ion-no-border" :class="isIOS()?'status-bar': ''">
      <ion-toolbar>
        <ion-title class="px-8 text-start text-2xl">Cards</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-col class="flex flex-col justify-center h-full">
        <ion-text class="text-center text-lg font-medium mb-2">No cards</ion-text>
        <ion-text class="text-sm text-center">Please contact your company</ion-text>
        <ion-text class="text-sm text-center">Administrator to reqeust a card.</ion-text>
        <ion-row class="justify-center mt-2">
          <ion-button class="w-12 h-12" color="dark">
            <icon-refresh :size="32" />
          </ion-button>
        </ion-row>
      </ion-col>
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
</style>
