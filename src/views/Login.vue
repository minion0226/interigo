<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonButton, IonText, IonRow, IonCol, IonInput } from '@ionic/vue'
import { IconFaceId, IconEyeOff, IconEye } from '@tabler/icons-vue'
import { useIonRouter } from '@ionic/vue'

const ionRouter = useIonRouter()

const passView = ref(false)

</script>

<template>
  <ion-page class="p-4">
    <ion-col class="flex flex-row justify-center text-4xl font-bold items-end">
      <img src="@/assets/imgs/logo.jpg" class="w-12 h-12 mr-2" />
      <ion-text class="mb-2">intergiro</ion-text>
    </ion-col>
    <ion-row class="justify-center text-gray-400">antomarkop@gmail.com</ion-row>
    <ion-row class="flex-row mt-24 mb-16 items-center">
      <ion-input placeholder="Password" :type="passView ? 'text':'password'" class="flex-1 rounded-md bg-gray-100 custom align-middle mr-3">
        <icon-eye-off v-if="passView" @click="passView = false" class="absolute right-4 top-5 z-10 text-gray-400 active:opacity-40" />
        <icon-eye v-else @click="passView = true" class="absolute right-4 top-5 z-10 text-gray-400 active:opacity-40" />
      </ion-input>
      <icon-face-id :size="36" class="text-gray-500 active:opacity-50 active:scale-95" />
    </ion-row>
    <ion-row class="flex flex-col mb-4">
      <ion-button expand="full" shape="round" fill="clear" color="dark">Reset Password</ion-button>
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