
import express from 'express'
const app = express()
import routes from './routes/index.js'

app.use(routes)

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});


app.listen(3000, () => {

    console.log("Listening to port 3000")
})
