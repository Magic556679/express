function handleSuccess (res, data){
  // res.writeHead(200, headers);
  // res.write(JSON.stringify({
  //   "status": "success",
  //   "data": data
  // }));

  res.send({
    status: true,
    data
  })
  res.end();
}
module.exports = handleSuccess;