const axios=require("axios")
idd="ya29.a0AXooCgvJUmMCw-RzvSIGmePzLLHfAkQgHuZNs8JaC7UlSlhGle9m6EejCrAWvkSveSs48oOYHm8hUGoe5hhQGdePjITcyGB1HQDiPgGZbKDA6XjHR8DAocRl0IBOwX4QZ9AqyKD9z_VRSsEtGbjId3--1gwWoi_Duk4aCgYKAVsSARISFQHGX2MiVEXuN0l7lgDhczFH6uNICQ0170"
axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${idd}`, {
    headers: {
        Authorization: `Bearer ${idd}`,
        Accept: 'application/json'
    }
})
.then(async (userdata) => {
    const {data}=userdata
    console.log(data)
    const payload={
        name:userdata.name
    }
    

})
.catch((err) => console.log(err));