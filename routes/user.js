const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log('body console-->', req.body)
    res.send('Post called on user routes')
})

router.get('/', (req, res) => {
    console.log('body query-->', req.query)
    res.send('Get called on user routes')
})

router.put('/:id', (req, res) => {
    console.log('body params-->', req.params.id)
    res.send('Put called on user routes')
})

router.delete('/:id', (req, res) => {
    console.log('body params-->', req.params.id)
    res.send('Delete called on user routes')
})

module.exports = router