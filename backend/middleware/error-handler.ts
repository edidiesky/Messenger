
import { NextFunction, Request, Response } from "express"

const NotFound = (req:Request, res:Response, next:NextFunction)=> {
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
    
}

const errorHandler =(err:Error, req:Request, res:Response, next:NextFunction)=> {
    const statuscode = res.statusCode === 200? 500:res.statusCode
    const errMessage = err.message
    res.status(statuscode)
    res.json({
        message:errMessage,

    })
}

export {
	errorHandler,
	NotFound
}