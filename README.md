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
git clone https://github.com/Adejair/jgs-boilerplate my-awesome-jekyll
cd my-awesome-jekyll

npm install gulp -g
npm install

gem install jekyll (Necessary ruby >= 2.0.0)
gulp 
```
Go to code now !!

Structure of JGS
----------
A structure and definitions of JGS.
```
| _includes
| _layouts
| _posts
| _site (builded site to production)
| _stylus
| css
| images
- _config.yml
-feed.xml
-gulpfile.js
-index.html
```
Some details on the structure:

`_stylus` Write your code with stylus pre-processor here.

`css` Code converted from stylus to css, if you prefer write with css here.

`images` - All images to be minified.


Tasks Gulp
----------

Tasks of _gulp_:

`gulp` - Start all tasks

`gulp stylus` - Convert stylus syntax to css.

`gulp build-jekyll` - Build jekyll

`gulp rebuild-jekyll` - RE-Build jekyll

`gulp browser-sync` - Create local server to sync browser with all devies connected.

`gulp imagemin` - Minify image

Users Ideal
----------

These boilerplate is indicated for users who want to create your site or blog static with optimization and praticality, joint power of _Jekyll_ which is a page static generator, gulp which is a task-mannager and stylus is a pre-processor of css.

Thanks for read/use, give-me a feedback of experience with *jgs* !!
