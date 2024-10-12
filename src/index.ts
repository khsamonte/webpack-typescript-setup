import axios from "axios";
const apiUrl = "http://localhost:4000/api/users";

if (process.env.NODE_ENV === "development") {
  console.log("DEV MODE");
}

if (process.env.NODE_ENV === "production") {
  console.log("PROD MODE");
}

// Enable HMR
if (module.hot) {
  module.hot.accept();
}

// Fetches all users
const fetchUsers = async () => {
  try {
    const response = await axios.get(apiUrl);
    const users = response.data; // Axios automatically parses JSON
    console.log(users);
    displayUsers(users);
  } catch (error) {
    console.log("Error fetching users:", error);
  }
};

const displayUsers = (users: any[]) => {
  const userList = document.getElementById("userList");
  userList!.innerHTML = "";
  users.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.textContent = `${user.name} (${user.email})`;
    userList!.appendChild(userItem);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
});
