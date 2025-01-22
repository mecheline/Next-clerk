export const Users = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      return { error: "Failed to fetch posts, Try again later" };
    }
    return response.json();
  } catch (error) {
    return { error: "Check your network connection" };
  }
};

export const Posts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    if (!response.ok) {
      return { error: "Failed to fetch users, Try again later" };
    }
    return response.json();
  } catch (error) {
    return { error: "Check your network connection" };
  }
};
