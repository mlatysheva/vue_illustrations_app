import Main from "@/pages/Main";
import IllustrationPage from "@/pages/IllustrationPage";
import IllustrationIdPage from "@/pages/IllustrationIdPage";
import IllustrationPageWithStore from "@/pages/IllustrationPageWithStore";
import About from "@/pages/About";
import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/illustrations',
    component: IllustrationPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/illustrations/:id',
    component: IllustrationIdPage
  },
  {
    path: '/store',
    component: IllustrationPageWithStore
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;