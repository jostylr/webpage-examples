# Flexbox experiment


Exploring flexbox. 

The jsbin for this:  http://jsbin.com/AsuXeFA/1/edit?html,css,output


## Files

* [index.html](#index "save: | marked") the index
* [common.html](#basic-html "save:") The initial draft
* [horizontalcenter.html](#horiz "save: *basic html") Horizontal Center


## index

    * [the index](index.html) 
    * [The initial draft](common.html) 
    * [Horizontal Center](horizontalcenter.html) 



## Basic HTML

So html doctype header, htl tag, meta stuff. 


    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Flexbox</title>
        <!-- Viewport tag to make things responsive -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Link to the stylesheet we will create -->
        <link rel="stylesheet" href="common.css">
        <style type="text/css">
            .flex{
            display: flex; }
            .flex > *{ min-width: 100px;
            min-height: 100px; }
            header{
            background: rgba(200, 200, 200, 1); }
            article{
            background: rgba(200, 200, 200, .8); }
            aside{
            background: rgba(200, 200, 200, .6); }
            footer{
            background: rgba(200, 200, 200, .4); }
            _"*:styles? "
        </style>
    </head>
    <body>
        <div class="flex"> <header>
        </header>
        <article> </article>
        <aside> </aside>
        <footer> </footer>
        </div>

        <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
    </body>
    </html>

# horiz

[styles]()

    .flex{
        background: yellow;
        flex-flow: row;
        align-items: center; /* This centers the items vertically. */ 
        justify-content: center; /* This centers everything horizontally....
    }

