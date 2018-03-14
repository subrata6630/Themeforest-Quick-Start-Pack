# Themeforest-Quick-Start-Pack
 > build themes faster with HTML5 Quick Start Pack.Build responsive, mobile-first projects on the web with the world's most popular front-end component library.


### Built With Code You Can Trust:

HTML5 Quick Start Pack is a complete blank slate starter theme with 0 unnecessary styled elements. 
It’s completely focused on simplicity and speed.


### Installation Instructions:


### CSS Code:


```css
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Fontawesome CSS -->
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <!-- Owl Carousel CSS -->
        <link rel="stylesheet" href="css/owl.carousel.css">
        <!--WOW CSS -->
        <link rel="stylesheet" href="css/animate.css">
        <!--UI KIT CSS -->
        <link rel="stylesheet" href="css/uikit.min.css">
        <!--Jquery Mean Memu CSS -->
        <link rel="stylesheet" href="css/meanmenu.min.css">
        <!--Simple Grid CSS -->
        <link rel="stylesheet" href="css/simplegrid.css">
        
```

### JS Code:
```css
  <!-- ALL JS HERE-->
        <script src="js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.2.1.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>

        <!-- Bootstrap JS -->
        <script src="js/bootstrap.min.js"></script>
        <!-- Owl Carousel JS -->
        <script src="js/owl.carousel.min.js"></script>
        <!-- WOW JS -->
        <script src="js/wow.min.js"></script>
        <!-- UI KIT JS -->
        <script src="js/uikit.min.js"></script>
        <!-- Jquery Mean Menu JS -->
        <script src="js/jquery.meanmenu.min.js"></script>


        <!-- Custom JS -->
        <script src="js/custom.js"></script>

```
### Features:

<ul>
  <li> Completely blank slate</li>
  <li>Simplistic</li>
  <li>Fast</li>
</ul>
   
    
    

HTML5 Blank is a good choice for you if you are already adept at CSS, and want complete control over every single element, 
and you want absolute 0 wasted lines of code in your site.


### Quick Start Pack:


<ul>
    <li>HTML5 Boiler plate</li>
    <li>Bootstrap</li>
    <li>Fontawesome</li>
    <li>Owl Carousel</li>
    <li>WOW JS</li>
    <li>Animate CSS</li>
    <li>UI Kit</li>
    <li>jquery mean menu-responsive menu plugin</li>
    <li>Simple Grid</li>
</ul>

</br>

### Browser support: 

The following table lists the versions that UIkit is tested on. "Latest" means that it works just fine on all recent versions of that browser. With many browser moving towards a rolling release strategy, pinning down browser support to a specific version has become a little tricky in recent years. Long story short Quick Start pack will work on pretty much any modern browser.</br>
<h2>Simple Grid</h2>
<h3>Intro</h3>
<p>Simple Grid is a basic lightweight grid, not a CSS framework. There are no styles for buttons, tables, typography etc. etc. Simple Grid comes with two different types of grids. There is a grid for content, which looks like <code>&lt;div class="col-1-3"&gt;&lt;/div&gt;</code> and a grid for layouts, which looks like <code>&lt;div class="col-4-12"&gt;&lt;/div&gt;</code>. Simple Grid is also built for responsive layouts. With fluid columns, the grid will resize to adjust to the browser resolution. To accommodate for mobile and tablet devices, the grid will essentially stack all columns, one above another, when viewed on smaller screens. </p>

<h3>Instructions</h3>
<p> Before starting with anything please make sure to include this snippet of code in your <code>&lt;head&gt;</code> tag so that the grids will be responsive on mobile devices:
<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"
&gt;</code>

<p>In terms of use, Simple Grid is basically just like every other grid. Starting out, you need to wrap your grid in a div class named <code>grid</code>. If you want a 20px padding around your grid, add the class <code>grid-pad</code> to the div wrapper. Next, all you have to do is decide what size you want your grid to be and add the appropiate classes. For example, if you want a grid with a left sidebar and main content area you would do:
<pre>
&lt;div class="grid"&gt;
  &lt;div class="col-3-12"&gt;
  &lt;/div&gt;
  &lt;div class="col-9-12"&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
If you have a page and would like four columns of content, you would do:
<pre>
&lt;div class="grid"&gt;
  &lt;div class="col-1-4"&gt;
  &lt;/div&gt;
  &lt;div class="col-1-4"&gt;
  &lt;/div&gt;
  &lt;div class="col-1-4"&gt;
  &lt;/div&gt;
  &lt;div class="col-1-4"&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
The first column of content in your grid will always be floated left. If you would like to float a column to the right, all you have to do is add the class <code>push-right</code>.</p>

<h3>Push-Classes</h3>
<p>To push a column to the right, you can use the <code>push-X-X</code> classes:
<pre>
&lt;div class="grid"&gt;
  &lt;div class="col-1-3 push-1-3"&gt;
  &lt;/div&gt;
  &lt;div class="col-1-3 "&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
</p>

<h3>Mobile</h3>
<p>If you don't want to stack all columns on mobile and tablet you can simply add a extra class to each column:
<pre>
&lt;div class="grid"&gt;
  &lt;div class="col-1-3 mobile-col-1-2"&gt;
  &lt;/div&gt;
  &lt;div class="col-1-3 mobile-col-1-2"&gt;
  &lt;/div&gt;
  &lt;div class="col-1-3 hide-on-mobile"&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
To hide a element (column, div, a, etc.) on mobile and tablets you can add the class <code>hide-on-mobile</code> to it.
</p>

<h3>Preview</h3>
<p>To see the grid in action jump on over to the <a href="http://thisisdallas.github.com/Simple-Grid/" title="Simple Grid examples">Simple Grid example page</a>.</p>




#### License

License:   [MIT](https://www.subrata.me)


#### version

Currently V 1.O.O.
