<script setup lang="ts">
import { IonPage, IonButton, IonText, IonRow, IonCol, IonInput } from '@ionic/vue'
import { IconFaceId, IconEyeOff } from '@tabler/icons-vue'
import { useIonRouter } from '@ionic/vue'

const ionRouter = useIonRouter()
</script>

<template>
  <ion-page class="p-4">
    <ion-col class="flex flex-row justify-center gap-2 text-4xl font-bold items-end">
      <img src="@/assets/imgs/logo.jpg" class="w-12 h-12" />
      <ion-text class="mb-2">integiro</ion-text>
    </ion-col>
    <ion-row class="justify-center text-gray-400">antomarkop@gmail.com</ion-row>
    <ion-row class="flex-row mt-24 mb-16 gap-3 items-center">
      <ion-input class="flex-1 rounded-md bg-gray-100 custom align-middle">
        <icon-eye-off class="absolute right-4 top-5 z-10 text-gray-400 active:opacity-40" />
      </ion-input>
      <icon-face-id :size="36" class="text-gray-500" />
    </ion-row>
    <ion-row class="flex flex-col">
      <ion-button expand="full" fill="clear" color="dark">Reset Password</ion-button>
      <ion-button @click="ionRouter.push('/tabs')" expand="full" shape="round" color="dark">Log in</ion-button>
    </ion-row>
  </ion-page>
</template>

<style scoped>
  ion-input.custom {
    --padding-bottom: 1.5rem;
    --padding-end: 3.5rem;
    --padding-start: 10px;
    --padding-top: 1.5rem;
  }
</style>