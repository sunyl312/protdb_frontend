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
    path: '/disease/all',
    name: 'disease_all',
    component: DiseaseAll
  },
  {
    path: '/tissue/all',
    name: 'tissue_all',
    component: TissueAll
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
