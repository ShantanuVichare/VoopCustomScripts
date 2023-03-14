/**
	{
		"api":1,
		"name":"Connector",
		"description":"",
		"author":"shantanu",
		"icon":"collapse",
		"tags":"shantanu,connector"
	}
**/

const axios = require('axios')

async function main(input) {
    try {
        input.postInfo("connecting")
        const res = await axios('https://dummyjson.com/products')
        input.insert(JSON.stringify(res.data))
        input.postInfo("connected")
    } catch (err) {
        input.postError(err.message)
    }
}
