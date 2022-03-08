const express = require('express')
const fetch = require('node-fetch')
const app = express()

const fetchData = async () => {
    const fetchURL = await fetch('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories')
    const response = await fetchURL.json()

    return response
}

app.get('/',(req,res) => {
 fetchData().then((response)=>{
    res.json(response)
 })
})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('Connected to port ' + PORT))