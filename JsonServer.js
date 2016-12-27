var express    = require("express");
var http = require('http');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'android_attendance_1',
  socketPath : '3306'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

/*app.get("/",function(req,res){
connection.query('SELECT * from attendance', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});
app.listen(3000);*/

http.createServer(function(request, response) {

  var body = [];
   request.on('data', function(chunk) {
        body.push(chunk);
   }).on('end', function() {
         body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
    
      // var adm_no = body.substring(13,23);
      // var x=body.lastIndexOf("Name=");
      // console.log(body.substring(x));
      console.log(body);
   	//request.pipe(response);     //To pie back the body received from client

      });

/*connection.query('SELECT id from attendance', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
*/

}).listen(8080);

