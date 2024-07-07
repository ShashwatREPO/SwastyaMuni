// function to count the total number of requests, made to the server
function countRequests(req, res, next) {
    count++;
    console.log("number of request :" + count);
    console.log(count + "-----------------------" + count);
    next();
}

// count variable to count the total number of requests
var count = 0;

// funtion to count the time taken by the server to respond
function countTime(req, res, next) {
    const start = new Date().getTime();
    next();
    const end = new Date().getTime();
    console.log(`TIme taken : ${end - start}ms `);
    console.log(count + "***********************" + count);
}

module.exports = {
    countRequests,
    countTime
}