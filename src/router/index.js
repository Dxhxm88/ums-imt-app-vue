import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue';
import AddUserForm from '../components/AddUserForm.vue';
import EditUserForm from '../components/EditUserForm.vue';

const routes = [
  { path: '/', component: UserList },
  { path: '/add', component: AddUserForm },
  { path: '/edit', component: EditUserForm },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
