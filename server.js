const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json())


const url  = 'https://505c6147-a0ff-4f3f-9be1-02181a3330fe-us-east1.apps.astra.datastax.com'
const token = 'AstraCS:RNrljiGigoEpTQTKLRTEfBXP:cd3c3806f0aaa192fdb237f0adc617c441cc166459bc705879b3b77b4ec7800a'


app.get('/tickets', async (req,res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            
        }    
    }

    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})


app.post('/tickets', async (req,res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        res.status(500).json({message: err})
    }
})

app.delete('/tickets/:docuemntId', async (req,res) => {
    const id = req.params.docuemntId

    const options = {
        method: 'DELETE',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try{
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))