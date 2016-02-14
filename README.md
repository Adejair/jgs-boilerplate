JGS - Boilerplate
=============           
<img src="http://i.imgur.com/5hXAO8E.png" align="right" height="150">   
Boilerplate with Jekyll, GulpJs and Stylus.


What is JGS ?
----------

JGS is a simple boilerplate that englobes Jekyll, GulpJs, Stylus to create fast and optimized project with these tools.


How to use use ?
----------

```
git clone https://github.com/Adejair/jgs-boilerplate && cd jgs-boilerplate
[sudo] npm install
gulp
```
Go to code now !!

*sudo* only for linux users.

Structure of JGS
----------
A structure and definitions of JGS.
```
| _includes
| _layouts
| _posts
| _site (builded site to production)
| assets
 \ -- images
 \ -- js
| css
| src
 \ -- images
 \ -- js
 \ -- stylus
- _config.yml
-feed.xml
-gulpfile.js
-index.html
```
Some details on the structure:

`assets` - These folder contains files javascript and images (minify) to use in production, on compile jekyll these folder is moved to \_site.

`src` - Write all javascript, put all images and write all stylus syntax *here*.

** Observation **

In _gulpfile.js_ the build of javascript and stylus is provid only one folder search (\*.{styl, js}) if you have a subtree add `{PATH_{styl,js}}/**/*.{styl,js}` in gulpfile config :wink:

Tasks Gulp
----------

Tasks of _gulp_:

`gulp` - Start all tasks

`gulp stylus` - Convert stylus syntax to css.

`gulp jekyll-build` - Build jekyll

`gulp jekyll-reload` - Build jekyll and reload page

`gulp browser-sync` - Create local server to sync browser with all devies connected.

`gulp minimage` - Minify image

`gulp minjs` -  Minify JS

Users Ideal
----------

These boilerplate is indicated for users who want to create your site or blog static with optimization and praticality, joint power of _Jekyll_ which is a page static generator, gulp which is a task-mannager and stylus is a pre-processor of css.

Thanks for read/use, give-me a feedback of experience with *jgs* !!
