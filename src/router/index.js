import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/',
      name: 'Book',
      component: Book
    }
  ]
})
