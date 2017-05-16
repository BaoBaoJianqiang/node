var querystring = require("querystring"); 

function start(params) {
	return '{"isError":1, "errorType":2, "errorMessage":"403 forbidden", "result": {}}';   	
}     
  
function register(response, postData) {    
	console.log(postData);

    var content = '{"isError":1, "errorMessage":"故意让你失败的～～"}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 
  
function sendReport(response, postData) {    
	console.log(postData);

    var content = '{"isError":0, "errorMessage":""}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 
  
function getCinemaDetail(params) {    
    var obj = querystring.parse(params);
    
    console.log(obj.cinemaid);

    var content = '{"cinemaId":' + obj.cinemaid + ', "cinemaName":"StarBeautiful"}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 

function getMovieDetail(params) {    
    var obj = querystring.parse(params);
    
    //for( var i = 0;i<30000;i++){console.log(i)}

    console.log(obj.cityid);

    var content = '{"movieId":789, "movieName":"WarCarft"}';     
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 
  
function getMovieList(params) {    
    var obj = querystring.parse(params);

    //for( var i = 0;i<30000;i++){console.log(i)}

    console.log(obj.cityid);
    console.log(obj.showdate);

    var content = '{"movieList":[{"movieId":123, "movieName":"Avatar"}, {"movieId":789, "movieName":"WarCarft"}]}';  
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 


function getSomethingWithoutParams(params) { 
    //for( var i = 0;i<30000;i++){console.log(i)}

    var content = '{"movieList":[{"movieId":345, "movieName":"人工智能"}, {"movieId":987, "movieName":"海豚湾"}]}';  
    return '{"isError":0, "errorType":0, "errorMessage":"", "result": '+ content +'}';   	
} 

exports.start = start;  
exports.register = register;  
exports.getMovieDetail = getMovieDetail;  
exports.getCinemaDetail = getCinemaDetail;  
exports.getMovieList = getMovieList; 
exports.getSomethingWithoutParams = getSomethingWithoutParams; 
exports.sendReport = sendReport; 

