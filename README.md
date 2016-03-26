# Virtual LED Wall

An HTML, CSS, and Javascript implementation to mimic the LED wall at LaunchCode's Mentor Center. The project is intended for the Hello, World! course, but can be tackled by anybody looking to practice basic Javascript.

## Getting started

Download the zip file for this repository and unzip it, or fork and clone, if you are using git.

The `examples/` folder contains two files: `template.html` and `basic.html`. The first is a template that you may use to begin your own work. The second is a full example that illustrates how to use the provided functions to turn the "blocks" on and off. Open it in a browser and click the Start button. The click Stop once you have an idea of what it's doing. You can also check out an [animated gif of the example](examples/gif/basic.gif).

Now, open the file `basic.html` in a text or code editor and look at the Javascript beginning on line 24. Read through this example code, and make sure you understand what's going on. I'll post a video link to the walkthrough of this code in class, when it's available.

To make your own LED wall and play with the code, copy the file `template.html`, making sure to do so in the same directory (otherwise our CSS and JS file includes will break).

_Note:_ When opening code on your computer, you'll always want to open it in an appropriate editor. Notepad (Windows) and TextEdit (Mac) are fine plain text editors that are already installed on your system. You may want to install a basic coded editor, such as [Atom](https://atom.io/), in order to get nice features like syntax highlighting. You should __never__ open code in a formatted editor like Microsoft Word.

## The controller

Just like the physical LED wall at the Mentor Center has a controller -- in that case, a physical computer that controls the lights that it's attached to -- this LED wall has a controller as well. The controller has an [API](https://en.wikipedia.org/wiki/Application_programming_interface) that allows you, the programmer, to interact with the wall. Think of an API as just that, a set of functions that lets you control or run another program, without having to be concerned about the internal details of that program. We'll call the functions in the controller to turn lights on and off without needing to care about how it works in detail. You're certainly encouraged to open up `controller.js` and see how it works for yourself though!

### Controller functions

`setColor(x, y, colorString)`

Calling this function with positive integers `x` and `y` with set the color of the square at those coordinates. The bottom left square has coordinates (1, 1), and the squares just right and above have coordiantes (1,2) and (2, 1), respectively.

To set the color, pass a string as the third argument, `colorString`. This string can be any string that is a valid CSS color value. Here are some examples:
* [Color names](http://www.w3schools.com/colors/colors_names.asp): `red`, `blue`, `white`
* [RGB](http://www.w3schools.com/cssref/css_colors.asp): `rgb(0,0,255)` (blue), `rgb(0,255,0)` (green), `rgb(255,255,0)` (yello), `rgb(0,0,0)` (black)
* [Hex](http://www.w3schools.com/cssref/css_colors.asp): `#0000FF` (blue), `#0000ff` (green), `#FFFF00` (yello), `#000000` (black)
* [HSL](http://www.css3.info/preview/hsl/): `hsl(120,100%,50%)` (green), `hsl(0,100%,50%)` (red)

Refer to the full [CSS colors reference](http://www.w3schools.com/cssref/css_colors_legal.asp) for details on each of these methods.

`clear(color)`

This method can be called either with or without an argument. Using it without -- calling `clear();` -- will clear the color from every block, making them all transparent. Giving it a color -- for example, `clear("red");` -- will turn every block that color.

`buildWall(x, y)`

This function is called for you already in the `template.html` file, but you can modify the way it's used, or write your own file and call it yourself. It builds a wall that is `x` blocks wide and `y` blocks high. It must be called before using `setColor()` or `clear()`.

_Note:_ If you want to play around with building your own HTML file, know that you can only build a single wall within a page.

### Exercises

Here are some tasks that you might set for yourself, to play and use your new knowledge of coding. If you haven't yet, do something simple like changing the colors in the `basic.html` example. Pick at least one, and give it a shot!

These are roughly ordered from least difficult to most difficult. If you don't know where to start, look to the basic example for inspiration.

As you work, don't forget to open up your developer tools in your browser, to see how things work, and to view any errors you may be having.

#### Playing with colors

These exercises each use the same light pattern (left to right, bottom to top) as the basic example, but use different color patterns. Refer to the [CSS color value reference](http://www.w3schools.com/cssref/css_colors_legal.asp) as needed.

* __Random__ - Turn each subsequent block a random color. You'll want to use [`Math.random()`](http://www.w3schools.com/jsref/jsref_random.asp) and either the RGB or HSL methods of specifying colors. [Example](examples/gif/random.gif)
* __Blues__ (or reds, yellows, greens, etc) - Pick a color, and gradually shift from the most saturated version of that color to the least saturated (or vice versa). You'll want to use RGB color specifiers. For example, in RGB the brightest blue is `rgb(0,0,255)` (since it contains no red or green) and a medium bright blue is `rgb(128,128,255)` (since it has some red and green mixed in). Remember that `rgb(255,255,255)` is white. [Example](examples/gif/blues.gif)
* __Rainbow__ - Similar to the Blues exercise, gradually shift from one color to the next. For this one, however, you should shift through colors of the rainbow. Use HSL colors specifiers to slowly shift through all of the shades in ROYGBIV. [Example](examples/gif/rainbow.gif)

#### Playing with direction

These exercises have you change the light pattern, which will ratchet up the difficulty a few notches. You'll need to flex some mental muscle, and really focus on breaking down the problems in order to come up with a good algorithm.

* __Vertical__ - Rather than using a left-to-right/top-to-bottom pattern, implement a bottom-to-top/left-to-right pattern. That is, the pattern moves vertically rather than horizontally. [Example](examples/gif/vertical.gif)
* __Traveling Square__ - Pick two colors (orange and red, in the example), setting the background to one color and a single square/block on the edge of the wall to the other. When started, the single block should travel along the outside of the wall, either clockwise or counter-clockwise. [Example](examples/gif/traveling-square.gif)
* __Starburst__ - Pick two colors as above, a background and foreground color. Create a starburst pattern whereint concentric "rings" of color move outward. You'll need to work with a wall that has equal, odd-length sides (5x5, 7x7, 9x9, etc) to get the math to work out. [Example](examples/gif/starburst.gif)
