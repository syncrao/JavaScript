import {
  getRequest,
  postRequest,
  getAccessToken,
  updateRequest,
  deleteRequest,
} from "./request.js";


const registerData = {
   username: "shah",
  password: "raoone11R@",
  email: "shah@gmail.com"
};

const updateData = {
  username: "shah_rukh",
  password: "raoone11R@",
  email: "shah_rukh@gmail.com"
};

async function create() {
  console.log("Testing...");
  // await postRequest('user/register/', registerData)
  // let {access, refresh} = await postRequest('user/login/', registerData)
  // await getRequest('user/me', access)
  // await updateRequest('user/2/', updateData, access)
  // await getRequest('user/2/', access)
  // await postRequest('user/google/', {google_token:"eyJhbGciOiJSUzI1NiIsImtpZCI6IjJkN2VkMzM4YzBmMTQ1N2IyMTRhMjc0YjVlMGU2NjdiNDRhNDJkZGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxMzY0MTkyMTAzMDQtZW1pZGhwNHY2OW4yb3NsYXJwcnZqOGw2czRsNjF0ajYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxMzY0MTkyMTAzMDQtZW1pZGhwNHY2OW4yb3NsYXJwcnZqOGw2czRsNjF0ajYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDU5NjQ0MDkwNjQ0NDc4Mzc0MDYiLCJlbWFpbCI6InRydWVkb3N0NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzU2NjIzMjAzLCJuYW1lIjoiU2hhaCBSdWtoIFJhbyIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJd3FDNlpMSWZScWFJYXJ6UjRWeFVBelVQWUs4S284aGJnMjNub3B1LWxCbGFwWWhhSz1zOTYtYyIsImdpdmVuX25hbWUiOiJTaGFoIFJ1a2giLCJmYW1pbHlfbmFtZSI6IlJhbyIsImlhdCI6MTc1NjYyMzUwMywiZXhwIjoxNzU2NjI3MTAzLCJqdGkiOiJhNDEwNjgxOTRmMjllYTk5NGVlNTYwNjdmYTBjZjg4NzUyNmVhZThjIn0.G4CVYJ0qn9Y8DwdgVO0hZeC1KOOeAVZ1YeJhCWckjSspPLv6gxv85-orelJlvtkuaFdfX3WZLkjp-VtiYCDCdWnVkh--ORe6s_fuioE3IevPIhZOX8WxHLkQIcaN7jarX-Wh0KIbBJVL4L2PG_kYBv2Kj5IAQftwuuEzePBvydToH-faB16IU5WpaAGKozPdW0khlmZqIUwEiJOHdJVX7Vx6PBlO_REQJzO5sAsGuyAmZmJ-AQ5H8HAdBw7iqsNL1gL-MtCacAnvZW9g5EcXNGKXtfUpUfUxf0EXcLwkpg2JLYB2ch75wAjaSUqalLQ0f602Q2FJ9WTLR2TtycRg1Q"})
  // await postRequest('user/send_otp/', {email:"truedost4@gmail.com"})
  // await postRequest('user/verify_otp/', {email:"truedost4@gmail.com", code:236817})
  // await postRequest('user/login/', registerData)
  // await postRequest('user/reset_password/', {email:"truedost4@gmail.com", code:236817, })
  // await postRequest('user/login/', registerData)

  await getRequest('product/1/')
  await getRequest('product/categories/')
  await getRequest('product/category/1/')
  console.log("End");
}

create()

