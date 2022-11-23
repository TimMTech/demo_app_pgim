const express = require("express")
const app = express()
const ImageKit = require("imagekit")


const imagekit = new ImageKit({
    urlEndpoint: "https://ik.imagekit.io/rydw9khhk",
    publicKey: "public_Bl2csh0JUzkZxMKVxVrooPN9iOU=",
    privateKey: "private_ZHzc5SNIO/5NkhNEW0F6Onnk/+o="
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/auth', (req, res) => {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
});



app.listen(3001, () => {
    console.log('Live at Port 3001');
});