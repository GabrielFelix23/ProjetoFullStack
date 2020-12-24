const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middleware/TaskValidation')
const macaddressValidation = require('../middleware/MacaddressValidation')

router.post('/', TaskValidation,  TaskController.create)
router.put('/:id', TaskValidation, TaskController.update)
router.get('/:id', TaskController.show)
router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)

router.get('/filter/all', macaddressValidation, TaskController.all)
router.get('/filter/late', macaddressValidation, TaskController.late)

module.exports = router