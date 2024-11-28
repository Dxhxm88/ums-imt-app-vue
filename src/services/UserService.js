import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const userService = {
  // Fetch all users
  async getUsers() {
    try {
      const response = await apiClient.post("/user/all"); // Assume `/users` is the API endpoint
      return response.data.Data;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  },

  // Add a new user
  async addUser(user) {
    try {
      const response = await apiClient.post("/user/add", user); // POST to add user
      alert("User added")
      return response.data;
    } catch (error) {
      console.error("Error adding user:", error);
      return null;
    }
  },

  // Delete a user
  async deleteUser(id) {
    try {
        const request = {'id': id};
      const response = await apiClient.post("/user/delete", request); // DELETE request for user
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      return null;
    }
  },

  // Delete a user
  async updateUser(user) {
    try {
      const response = await apiClient.post("/user/edit", user); // DELETE request for user
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      return null;
    }
  },
};
