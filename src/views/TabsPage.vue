<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
import { IconStackFront, IconCreditCardFilled, IconCircleArrowUpRightFilled, IconBolt, IconDots } from '@tabler/icons-vue'
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet :animated="false" ></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="p-2">
        <ion-tab-button tab="accounts" href="/tabs/account">
          <icon-stack-front />
          <ion-label>Accounts</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="cards" href="/tabs/card">
          <icon-credit-card-filled />
          <ion-label>Cards</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="send" href="/tabs/send">
          <icon-circle-arrow-up-right-filled />
          <ion-label>Send</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="activity" href="/tabs/activity">
          <icon-bolt />
          <ion-label>Activity</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="more" href="/tabs/more">
          <icon-dots />
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>