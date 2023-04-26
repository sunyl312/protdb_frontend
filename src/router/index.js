import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Browse from "@/views/Browse";
import BrowseDetailProtein from "@/views/BrowseDetailProtein";
import BrowseDetailStudy from "@/views/BrowseDetailStudy";
import BrowseDetailTrait from "@/views/BrowseDetailTrait";
import BrowseDetailPublication from "@/views/BrowseDetailPublication";
import DiseaseAll from "@/views/DiseaseAll";
import TissueAll from "@/views/TissueAll";
import Statistics from "@/views/Statistics";
import store from "../store"
import api from '@/views/API'
import downloads from "@/views/Downloads";
import knowledgeNetwork from "@/views/knowledgeNetwork";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/browse',
    name: 'browse',
    component: Browse
  },
  {
    path: '/knowledgegraph',
    name: 'knowledgegraph',
    component: knowledgeNetwork
  },
  {
    path: '/browse/protein/:protein_id',
    name: 'browse_protein_detail',
    component: BrowseDetailProtein
  },
  {
    path: '/browse/study/:study_id',
    name: 'browse_study_detail',
    component: BrowseDetailStudy
  },
  {
    path: '/browse/trait/:trait_id',
    name: 'browse_trait_detail',
    component: BrowseDetailTrait
  },
  {
    path: '/browse/publication/:publication_id',
    name: 'browse_publication_detail',
    component: BrowseDetailPublication
  },
  {
    path: '/tookit/api',
    name: 'tookit_api',
    component: api,
    beforeEnter: (to, from, next) => {
      store.state.currtab = 6;
      next();
    },
  },
  {
    path: '/tookit/downloads',
    name: 'tookit_downloads',
    component: downloads,
    beforeEnter: (to, from, next) => {
      store.state.currtab = 6;
      next();
    },
  },
  {
    path: '/statistic',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/disease/all',
    name: 'disease_all',
    component: DiseaseAll,
    beforeEnter: (to, from, next) => {
      store.state.currtab = 2;
      next();
    },
  },
  {
    path: '/tissue/all',
    name: 'tissue_all',
    component: TissueAll,
    beforeEnter: (to, from, next) => {
      store.state.currtab = 3;
      next();
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
