import PageHome from "@/pages/Home";
import {createRouter, createWebHistory}  from 'vue-router'
import PageThreadShow from "@/pages/ThreadShow";
import NotFound from "@/pages/NotFound";
import sourceData from '@/data.json'

const routes = [
  { path: '/',
    name: "Home",
    component: PageHome
  },
  { path: '/thread/:id',
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
    beforeRouteEnter (to, from, next) {
      // thread exists?
      const  threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // Y - continue
      if(threadExists) {
        return next()
      } else  { // N
          next ({
            name: 'NotFound',
            params: {
              pathMatch: to.path.split('/')
            },
            query: to.query,
            hash: to.hash

          })
      }

    }
  },
  { path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export  default router

