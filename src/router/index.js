import CallbackPage from "@/pages/callback-page.vue";
import HomePage from "@/pages/home-page.vue";
import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from "vue-router";

const NotFoundPage = () => import("@/pages/not-found-page.vue");
const ProfilePage = () => import("@/pages/profile-page.vue");
const TownPage = () => import("@/pages/town-page.vue");
const DreamForgePage = () => import("@/pages/town-page.vue");
const DungeonPage = () => import("@/pages/town-page.vue");
const CharacterPage = () => import("@/pages/character-page.vue");
const PublicPage = () => import("@/pages/public-page.vue");
const ProtectedPage = () => import("@/pages/protected-page.vue");
const AdminPage = () => import("@/pages/admin-page.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    beforeEnter: authGuard,
  },
  {
    path: "/town",
    name: "town",
    component: TownPage,
    beforeEnter: authGuard,
  },
  {
    path: "/dreamforge",
    name: "dreamforge",
    component: DreamForgePage,
    beforeEnter: authGuard,
  },
  {
    path: "/dungeon",
    name: "dungeon",
    component: DungeonPage,
    beforeEnter: authGuard,
  },
  {
    path: "/character",
    name: "character",
    component: CharacterPage,
    beforeEnter: authGuard,
  },
  {
    path: "/public",
    name: "public",
    component: PublicPage,
  },
  {
    path: "/protected",
    name: "protected",
    component: ProtectedPage,
    beforeEnter: authGuard,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    beforeEnter: authGuard,
  },
  {
    path: "/callback",
    name: "callback",
    component: CallbackPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "Not Found",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
