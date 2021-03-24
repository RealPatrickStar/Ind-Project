let http = require('http'); // writedb
let url = require('url');
const mysql = require("mysql");
// create connection
const db = mysql.createConnection({
   host: "localhost",
   user: "gunpreet_test",
   password: "test1",
   database: "gunpreet_quoteBank"
});


let server = http.createServer(function (req, res){
    let q = url.parse(req.url, true)
    res.writeHead(200, {
       'Content-Type': 'text/plain',
       'Access-Control-Allow-Origin':'*'
    });
    db.connect(function(err){
       if (err){
           throw err;
       }
        console.log("Connected!");
        
        
        let sql;
        let act = q.query['action'];
        
        if ( act == "add"){
            sql = "INSERT INTO quotes(quote, author) values ('"+q.query['quote']+"','"+q.query['author']+"')";
        
            db.query(sql, function(err, result){
            if (err) throw err;
            console.log("1 record inserted");
            });
        
            res.end(" Quote ' "+q.query['quote'] +" ' by " +q.query['author']+" was stored in the DB");  
        }
        
        
        
        else if (act == "update"){
            let au = q.query['author'];
            let qu = q.query['quote'];
            let num = q.query['number'];
            sql = "UPDATE quotes SET author = '"+au+"', quote = '"+qu+"' WHERE num ="+num+";";

            db.query(sql, function(err, result){
            if (err) throw err;
            console.log("1 record inserted");
            });
        
            res.end("Quote number "+num+ " updated!");  
        }
        
        else if (act == "delete"){
            //let au = q.query['author'];
            //let qu = q.query['quote'];
            let num = q.query['number'];
            sql = "DELETE FROM quotes WHERE num ="+num+";";
        
            db.query(sql, function(err, result){
            if (err) throw err;
            console.log("1 record inserted");
            });
        
            res.end("Quote number "+num+ " DELETED!");  
        }
        /*else {
            sql = "SELECT * FROM quotes;";
        
            db.query(sql, function(err, result, fields){
                if (err) throw err;
             
                res.end(JSON.stringify(result)); 
            
           
            
            }); 
        }*/
        
        
        
        
        
        
        
        
        //
       db.release();
       //
       
       
       
    });
    
});

server.listen();