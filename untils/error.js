const createError = (status, message)=>{
    const err = new Error();
    err.stataus = status;
    err.message=message;
    return err
}
module.exports = createError