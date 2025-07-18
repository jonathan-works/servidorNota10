<template>
  <q-layout view="hHh Lpr fFf" class="hide-scrollbar-force">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title>
          
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
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
          <q-tab name="home">
            <q-item-section class="flex items-center">
              <q-icon :name="ionHome" size="1.3rem"/>
              <span class="text-caption text-capitalize">home</span>
            </q-item-section>
          </q-tab>
          <q-tab name="servicos">
            <q-icon :name="ionBusinessSharp" size="1.3rem"/>
              <span class="text-caption text-capitalize">Serviços</span>
          </q-tab>
          <q-tab name="servicos">
            <q-icon :name="ionSearchSharp" size="1.3rem"/>
              <span class="text-caption text-capitalize">Pesquisa</span>
          </q-tab>
        </q-tabs>
      </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ionHome, ionBusinessSharp, ionSearchSharp} from '@quasar/extras/ionicons-v7';
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

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
