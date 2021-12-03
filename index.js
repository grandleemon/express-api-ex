const express = require('express');
const app = express()
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => {console.log(`it's alive on port:${PORT}`)}
)

app.get('/games', (req, res) => {
    res.status(200).send({
        game: 'Battlefield 4',
        platform: 'windows, xbox, playstation'
    })
})

app.post('/games/:id', (( req, res) => {
    const {id} = req.params;
    const {platform} = req.body;

    if(!platform){
        res.status(418).send({message: "We need a platform"})
    }

    res.send({
        id: `${id}`,
        platform: `${platform}`
    })
}));


