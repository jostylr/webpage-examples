# Flexbox experiment


Exploring flexbox. 


## Files

* [common.html](#basic-html "save:") The initial draft

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

        _"*:styles? "</style>
    </head>
    <body>
        <div class="flex"> <header>
        </header>
        <article> </article>
        <aside> </aside>
        <footer> </footer>
        </div>

    </body>
    </html>