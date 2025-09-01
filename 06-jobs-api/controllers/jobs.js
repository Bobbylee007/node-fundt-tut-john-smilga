const Job = require('../models/Jobs')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors') 

const getAllJobs = async (req, res) =>{
    const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count:jobs.lenght})
}

const getJob = async (req, res) =>{
    res.send('get jobs')
}

const createJob = async (req, res) =>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req, res) =>{
    res.send('update jobs')
}

const deleteJob = async (req, res) =>{
    res.send('delete jobs')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}