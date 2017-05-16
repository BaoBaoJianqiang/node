function routeGet(handle, pathname, params) {
  console.log("About to route a request for " + pathname);

  if(typeof handle[pathname] === 'function') {
  	return handle[pathname](params);
  } else {
	console.log("No request handler found for " + pathname); 
	return '{"isError":1, "errorType":1, "errorMessage":"404 Not found", "result": {}';   	
  }
}

function routePost(handle, pathname, postData) {
  if(typeof handle[pathname] === 'function') {
  	return handle[pathname](postData);
  } else {
	console.log("No request handler found for " + pathname); 
	console.log("No request handler found for " + pathname); 
	return '{"isError":1, "errorType":1, "errorMessage":"404 Not found", "result": {}';   	
  }
}

exports.routeGet = routeGet;
exports.routePost = routePost;