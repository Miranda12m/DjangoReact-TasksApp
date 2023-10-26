import axios from "axios";

export const getIn = () => {
    console.log("Fetching data...");
    return axios.get('#') // Set your path
        .then(response => {
            console.log("API response:", response);
            return response;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error;
        });
};

export const deleteTask = async (taskId) => {
    try {
      console.log("Deleting task with ID:", taskId);
      const response = await axios.delete(`#${taskId}/`); // Set your path
      console.log("Delete API response:", response);
      return response;
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  };
  