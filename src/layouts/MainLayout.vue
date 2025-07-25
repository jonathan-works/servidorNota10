<template>
  <q-layout view="hHh Lpr fFf" class="hide-scrollbar-force">
    <q-header elevated>
      <q-toolbar>
        <template v-if="$q.screen.lt.md && route.name !== 'inicio'">
          <div>
            <q-btn dense round flat :icon="ionChevronBack" size="0.9em" @click="router.go(-1)"/>
          </div>
        </template>
        <q-toolbar-title>
          <img src="/logo-cge.png" width="100px" style="padding: 10px 0px 0 0px" alt="Logo CGE-MT">
        </q-toolbar-title>

        <div class="q-gutter-md q-mx-sm">
           <q-btn dense round flat :icon="ionMail" size="0.9em" :to="{name: 'caixaPostal'}">
            <q-badge color="red" floating transparent>
              4
            </q-badge>
          </q-btn>
          <q-btn dense round flat :icon="ionPerson" size="0.9em" :to="{name: 'login'}"/>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
      <q-footer bordered class="bg-grey-3 text-primary">
        <q-tabs 
          active-color="primary" 
          indicator-color="transparent" 
          class="text-grey-8" 
          v-model="tab" 
          align="justify">
          <!-- <q-route-tab
            icon="mail"
            to="/mails"
            exact
          /> -->
          <q-route-tab name="home" :to="{name: 'inicio'}" :icon="ionHome" exact>
            <q-item-section class="flex items-center">
              <span class="text-caption text-capitalize">home</span>
            </q-item-section>
          </q-route-tab>
          <q-route-tab name="alertas" :to="{name: 'alertas'}" :icon="ionWarningSharp" exact>
            <q-item-section class="flex items-center">
              <span class="text-caption text-capitalize">Aletas</span>
            </q-item-section>
          </q-route-tab>
          <q-route-tab name="servicos" :to="{name: 'servicos'}" :icon="ionBusinessSharp" exact>
            <q-item-section class="flex items-center">
              <span class="text-caption text-capitalize">Serviços</span>
            </q-item-section>
          </q-route-tab>
          
          <!-- <q-tab name="home" :to="{name: 'inicio'}">
            <q-item-section class="flex items-center">
              <q-icon :name="ionHome" size="1.3rem"/>
              <span class="text-caption text-capitalize">home</span>
            </q-item-section>
          </q-tab> -->
          <!-- <q-tab name="servicos" :to="{name: 'servicos'}">
            <q-icon :name="ionBusinessSharp" size="1.3rem"/>
              <span class="text-caption text-capitalize">Serviços</span>
          </q-tab> -->
          <!-- <q-tab name="servicos">
            <q-icon :name="ionSearchSharp" size="1.3rem"/>
              <span class="text-caption text-capitalize">Pesquisa</span>
          </q-tab> -->
        </q-tabs>
      </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import { 
  ionMail,
  ionLogIn,
  ionPerson,
  ionPersonCircle,
  ionHome, ionBusinessSharp, ionSearchSharp, ionWarningSharp, ionChevronBack
} from '@quasar/extras/ionicons-v7'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const tab = ref('home');
const leftDrawerOpen = ref(false);

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}



</script>
