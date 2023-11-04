const express = require('express')
const router = express.Router()
const UserModel = require('../Schema/User')
const sendResponse = require('../helpers/sendResponse')

router.post('/', async (req, res) => {
    console.log('body console-->', req.body)
    try{
        const user = await UserModel.create({ ...req.body })
        if(user){
            sendResponse(res, 200, user, 'User created Succesfully', false)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, err.message , true)
    }
})

router.get('/', async (req, res) => {
    console.log('body query-->', req.query)
    try{
        const users = await UserModel.find()
        if(users){
            sendResponse(res, 200, users, 'User Fetched Succesfully', false)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, 'Internal Server Error', true)
    }
})

router.put('/:id', async (req, res) => {
    console.log('body params-->', req.params.id)
    try{
        const user = await UserModel.findOne({_id: req.params.id})
        if(user){
            const userUpdated = await UserModel.findByIdAndUpdate(req.params.id, { ...req.body }, {new: true})
            sendResponse(res, 200, userUpdated, 'User Updated Succesfully', false)
        }else{
            sendResponse(res, 401, null, 'User Not Found', true)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, 'Internal Server Error', true)
    }
})

router.delete('/:id', async (req, res) => {
    console.log('body params-->', req.params.id)
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id)
        if(user){
            sendResponse(res, 200, user, 'User Deleted Succesfully', false)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, 'Internal Server Error', true)
    }
})

module.exports = router