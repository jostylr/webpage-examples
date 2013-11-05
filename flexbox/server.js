/*global require, console */
var http = require('http');
var url = require('url');
var fs = require('fs');
var spawn = require('child_process').spawn;
var src = "src";
var recurse = true;
var out = "out";
var preserve = true;

var serveFile =  function(txtfile, ext, res) {
        fs.stat(txtfile, function (err, stats) {
             
             if (err) {
                 res.writeHead(404);
                 res.write('File '+ txtfile + ' not found.');
                 res.end();
                 return ; 
             }
    
             var types = {
                 'html' : 'text/html', 
                 'css'  : 'text/css',
                 'js' : 'text/javascript'
             };
             res.setHeader('Content-Type', types[ext] || 'text/plain');
             res.setHeader('Content-Length', stats.size);
             res.writeHead(200);
            
            var rs = fs.createReadStream(txtfile);
    
            rs.on('readable', function () {
                var chunk = rs.read();
                if (chunk) {
                    res.write(chunk);
                }
            });
    
            rs.on('end', function () {
                res.end();
            });
    
            rs.on('error', function () {
                res.write("ERROR");
                res.end();
            });
    
        });
    };

var serveText = function (txt, res) {
    
        res.setHeader('Content-Type','text/plain');
        res.setHeader('Content-Length', txt.length);
        res.writeHead(200);
        res.write(txt);
        res.end();
    
    };

var litpro = function self (files, txtfile, ext, res) {
        var litpro, out='', err='';
        var file = files.pop();
        if (typeof file === "undefined") {
            serveFile(txtfile, ext, res);
        } else {
            litpro = spawn('literate-programming', [file]);
    
            litpro.stdout.on('data', function (data) {
                out += data;
            });
    
            litpro.stderr.on('data', function(data) {
                err += data;
            });
    
            litpro.on('close', function () {  //code is first parameter
                //console.log(txtfile, "compiled. Exit code", code);
                if (err) {
                    serveText(err, res);
                    return;
                }
                if(out.match(/!!/)) {
                    serveText(out, res);
                    return;
                }
                console.log(out);
                self(files, txtfile, ext, res);
            });
    
        }
    };

var readDir =  function (txtfile, ext, res) {
        fs.readdir('.', function (err, files) {
            files = files.filter(function (el) {
                return el.match(".md");
            });
            litpro(files, txtfile, ext, res);
        });
    };

http.createServer(function (req, res) {

        var parsed = url.parse(req.url, true);
        var pathway = parsed.pathname.split("."); 
        var txtfile = parsed.pathname.slice(1);
        var ext = pathway[pathway.length-1];

    if (false && ext.match("html")) {
        readDir(txtfile, ext, res);
    } else {
        serveFile(txtfile, ext, res);
    }

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');