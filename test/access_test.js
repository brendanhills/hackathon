// JavaScript File
console.log("started");
var AWS = require('aws-sdk'); 
AWS.config.loadFromPath('./config.json');
AWS.config.update({region: 'us-east-1'});


console.log("AWS config done");
var s3 = new AWS.S3(); 
console.log("connected to S3");

s3.listBuckets(function(error, data) {
  if (error) {
    console.log(error); // error is Response.error
  } else {
    console.log(data); // data is Response.data
  }
});

var bucketName = "mit.bh.node.js.myBucket" + Date.now().toFixed(0);
console.log("listed buckets")
 s3.createBucket({Bucket: bucketName}, function() {
  
  console.log("creating bucket: " + bucketName);

  var params = {Bucket: bucketName, Key: 'myKey', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)       
      {
          console.log("Error creating bucket: " + err)   ;  
      }
      else       
      {
        console.log("Successfully uploaded data to myBucket/myKey");   
      }

   });

});