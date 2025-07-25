import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'inicio',  path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'alerta', path: 'alerta/:alertaId', component: () => import('src/pages/AlertaPage.vue') },
      { name: 'alertas', path: 'alertas', component: () => import('src/pages/AlertasPage.vue') },
      { name: 'caixaPostal', path: 'caixa-postal', component: () => import('src/pages/CaxiaPostalPage.vue') },
      { name: 'mensagem', path: 'mensagem/:id', component: () => import('src/pages/MensagemPage.vue') },
      { name: 'login', path: 'login', component: () => import('src/pages/LoginPage.vue') },
      { name: 'integridade', path: 'integridade', component: () => import('src/pages/IntegridadePage.vue') },
      
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
