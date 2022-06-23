const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
   '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'age': 29,
        'birthPlace': 'London, England'
    },
    'chance the rapper': {
        'birthName': 'Chancelor Johnathan Bennett',
        'age': 29,
        'birthPlace': 'Chicago, Illinois'
        },
        'unknown': {
            'birthName': 'Unknown',
            'age': 0,
            'birthPlace': 'Unknown'
            }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
    response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now listening on port ${PORT}`)
})

