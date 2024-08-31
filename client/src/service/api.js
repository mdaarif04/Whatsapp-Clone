import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (error) {
    console.log("Error while calling addUser api ", error.messages);
  }
};
 
export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    // console.log(response);
    return response.data;

  } catch (error) {
    console.log("Error while calling getUsers API ", error.messages);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API ", error.message);
  }
};


export const getConversation = async (data) => {
  try {
    let res = await axios.post(`${url}/conversation/get`, data);
    return res.data;
  } catch (error) {
    console.log("Error while calling getConversation API ", error);
  }
};

export const newMessages = async (data) => {
  try {
    return await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage API ", error.message);
  }
};


export const getMessages = async (id) => {
  try {
    let res = await axios.get(`${url}/message/get/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error while calling getMessages API ", error.message);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error while calling uploadFile API ", error.message);
  }
};
