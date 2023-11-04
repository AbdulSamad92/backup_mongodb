const express = require('express')
const router = express.Router()
const BlogModel = require('../Schema/Blog')
const sendResponse = require('../helpers/sendResponse')

router.post('/', async (req, res) => {
    console.log('body console-->', req.body)
    try{
        const blog = await BlogModel.create({ ...req.body })
        if(blog){
            sendResponse(res, 200, blog, 'Blog created Succesfully', false)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, err.message , true)
    }
})

router.get('/', async(req, res) => {
    try{
        const blogs = await BlogModel.find()
        if(blogs){
            sendResponse(res, 200, blogs, 'Blogs Fetched Succesfully', false)
        }
    }
    catch (err) {
        console.log(err.message)
        sendResponse(res, 500, err, 'Internal Server Error', true)
    }
})

router.put('/:id', async (req, res) => {
    console.log('body params-->', req.params.id)
    try{
        const blog = await BlogModel.findOne({_id: req.params.id})
        if(blog){
            const blogUpdated = await BlogModel.findByIdAndUpdate(req.params.id, { ...req.body }, {new : true})
            sendResponse(res, 200, blogUpdated, 'blog Updated Succesfully', false)
        }else{
            sendResponse(res, 401, null, 'Blog Not Found', true)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, 'Internal Server Error', true)
    }
})

router.delete('/:id', async (req, res) => {
    console.log('body params-->', req.params.id)
    try{
        const blog = await BlogModel.findByIdAndDelete(req.params.id)
        if(blog){
            sendResponse(res, 200, blog, 'Blog Deleted Succesfully', false)
        }
    }
    catch (err) {
        sendResponse(res, 500, null, 'Internal Server Error', true)
    }
})

module.exports = router