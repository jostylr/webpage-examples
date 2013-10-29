#Float label forms

This comes from http://webdesign.tutsplus.com/tutorials/ux-tutorials/implementing-the-float-label-form-pattern/

## Files 

The files for this

* [basicform.html](#basic-form "save: *basic html") The basic form
* [common.css](#common "save:") The common css for all

## basic form

This is the first basic form. I am not sure if any content goes here? 



## Basic HTML

So html doctype header, htl tag, meta stuff. I plan to do it in stages and leave the different stages in the directory.

Thus, this will be a template and we will insert css, form markup, and local scripts per section. I also intend to do without jQuery; we'll see if I need another library. Also ignoring IE issues. 

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Contact Me</title>
        <!-- Viewport tag to make things responsive -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Link to the stylesheet we will create -->
        <link rel="stylesheet" href="common.css">
        <style type="text/css">_"*:styles? "</style>
    </head>
    <body>
        _"form markup"

        _"*:scripts? "

    </body>
    </html>

## Form Markup

This is standard across all the pages. The differences are in the css and javascript


    <section class="container">
        <h1 class="title">Contact Me</h1>
        <form id="form" class="form" action="#" method="get">
            <ul>
                <li>
                    <label for="name">Your Name:</label>
                    <input type="text" placeholder="Your Name" id="name" name="name" tabindex="1"/>
                </li>
                <li>
                    <label for="email">Your Email:</label>
                    <input type="email" placeholder="Your Email" id="email" name="email" tabindex="2"/>
                </li>
                <li>
                    <label for="message">Message:</label>
                    <textarea placeholder="Message…" id="message" name="message" tabindex="3"></textarea>
                </li>
            </ul>
            <input type="submit" value="Send Message" id="submit"/>
        </form>
    </section>

## Common

The common css for all pages

    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* General
    ==================================== */
    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    body {
        background: #eaedf1;
    }
    body, input, textarea {
        font: 1em/1.5 Arial, Helvetica, sans-serif;
    }
    .container {
        max-width: 25em;
        margin: 2em auto;
        width: 95%;
    }
    .title {
        font-size: 1.5em;
        padding: .5em 0;
        text-align: center;
        background: #323a45;
        color: white;
        border-radius: 5px 5px 0 0;
    }


