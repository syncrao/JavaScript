import {
  getRequest,
  postRequest,
  getAccessToken,
  updateRequest,
  deleteRequest,
} from "./request.js";


const loginData = {
  username: "raoone",
  password: "raoone",
};

const bookData = {
  title: "Python3",
  subtile: "new add",
  author: "shahrukh",
  isbn: "ISBN1238484",
};

const updateBookData = {
  title: "Python New",
  subtile: "version 3.15",
  author: "shahrukh",
  isbn: "ISBN1238484",
};


async function test() {
  console.log("Testing...");
  let { access, refresh } = await postRequest("login/", loginData);
  await getRequest("", access);
  await getRequest(`/2/`, access);
  await updateRequest("/28/", updateBookData, access);
  access = await getAccessToken("refresh/", refresh);
  await postRequest("", bookData, access);
  await deleteRequest("12/", access);
  await deleteRequest("13/", access);
  await deleteRequest("14/", access);
  await deleteRequest("15/", access);
  await getRequest("", access);
  access = await getAccessToken("refresh/", refresh);
  await getRequest("", access);
  await deleteRequest("12/", access);
  await getRequest("", access);
  console.log("End");
}

test();
