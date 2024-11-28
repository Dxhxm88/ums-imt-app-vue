import { reactive } from 'vue';

export const selectedUser = reactive({
  user: {},
  setUser(newUser) {
    this.user = newUser;
  },
  getUser() {
    this.user; 
  }
});
