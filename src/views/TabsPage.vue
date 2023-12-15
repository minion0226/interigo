<script setup lang="ts">
import { IonBadge, IonTabBar, IonRow, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
import { IconStackFront, IconCreditCardFilled, IconCircleArrowUpRightFilled, IconBolt, IconDots } from '@tabler/icons-vue'
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet :animated="false" ></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="p-2 pb-4">
        <ion-tab-button tab="accounts" href="/tabs/account">
          <icon-stack-front class="rotate" />
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
          <ion-row class="relative">
            <icon-dots />
            <ion-badge>1</ion-badge>
          </ion-row>
          <ion-label>More</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<style scoped>
.rotate {
  transform: rotate(115deg);
}

ion-tab-bar, ion-tab-button{
 background-color: white;
}

ion-tab-bar {
  box-shadow: 0px -2px 15px 1px rgba(0,0,0,0.15);
  -webkit-box-shadow: 0px -2px 15px 1px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px -2px 15px 1px rgba(0,0,0,0.15);
}

ion-tab-button {
  color: #b2b1b7;
}
ion-tab-button.tab-selected {
  color: black;
}

ion-badge {
  position: absolute;
  right: -0.5rem;
  top: -0.15rem;
  font-size: x-small;

  --background: #465ead;
  --color: white;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4rem;

  --padding-top: 0.25rem;
  --padding-end: 0.25rem;
  --padding-bottom: 0.25rem;
  --padding-start: 0.25rem;
}
</style>