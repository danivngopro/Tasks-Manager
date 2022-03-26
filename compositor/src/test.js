const axios = require('axios');

const api = "localhost:3001/api/users/";

axios.post(
        "http://localhost:3001/api/users/", {
            firstName: "string",
            lastName: "string",
            username: "string",
            email: "string@g.c",
            password: "string",
        }
    ).then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log("error");
    });;