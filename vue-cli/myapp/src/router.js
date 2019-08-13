import Vue from 'vue'
import Router from 'vue-router'

import Movie from './views/Movie.vue'
import Details from './views/Details.vue'
import Music from './views/Music.vue'
import MusicList from './views/MusicList.vue'
import Book from './views/Book.vue'
import Photo from './views/Photo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/details/:id',
      component: Details
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/musiclist',
      component: MusicList
    },
    {
      path: '/book',
      component: Book,
    },
    {
      path: '/photo',
      component: Photo
    }
  ]
})
