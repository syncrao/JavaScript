import axios from "axios";
const URL = "http://127.0.0.1:8001";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getRequest(route, authToken = null) {
  await sleep(2000)
  console.log(`${route} Getting...`)
  try {
    const response = await axios.get(`${URL}/${route}`, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
    });
    console.log(response.data)
  } catch (error) {
    console.log("Error:", error.response?.data || error.message)
  }
}

export async function postRequest(route, data, authToken = "") {
  await sleep(2000)
  console.log(`${route} Posting...`)
  try {
    const response = await axios.post(`${URL}/${route}`, data, {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : {},
    });
    console.log(response)
    return response.data
  } catch (error) {
    console.log("Error:", error.response?.data || error.message)
  }
}

export async function getAccessToken(route, refresh) {
  await sleep(2000)
  console.log(`${route} Getting Token...`)
  try {
    const response = await axios.post(`${URL}/${route}`, { refresh });
    return response.data.access;
  } catch (error) {
    console.log("Error:", error.response?.data || error.message)
  }
}

export async function updateRequest(route, data, authToken = null) {
  await sleep(2000)
  console.log(`${route} Updating...`)
  try {
    const response = await axios.put(`${URL}/${route}`, data, {
      headers: authToken? {Authorization: `Bearer ${authToken}`} : {}
    })
    console.log(response.data)
  } catch (error) {
    console.log("Error:", error.response?.data || error.message)
  }
}

export async function deleteRequest(route, authToken) {
  await sleep(2000)
  console.log(`${route} Deleting...`)
   try {
    const response = await axios.delete(`${URL}/${route}`,{
      headers: authToken? {Authorization: `Bearer ${authToken}`} : {}
    })
    console.log(response.data)
  } catch (error) {
    console.log("Error:", error.response?.data || error)
  }
  
}





