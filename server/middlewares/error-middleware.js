const errorMiddleware=(err,req,res,next) => {
    const status=err.status || 500;
    const message=err.message || "backend error";
    const extraDetails=err.extraDetails || "backend error"

    return res.status(status).json({message: message, extraDetails: extraDetails})
}

module.exports =errorMiddleware