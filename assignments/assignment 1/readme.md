#Assignment 1
Please not that I'm no "designer" in the small sense design has become, nor a content creator.
I therefore chose a more technical interpretation of the problem statement:
What one is grateful for is an individual thing, I have therefor created a website that can be personalized to contain the thing the user are grateful for.
The idea behind the website is for the user to visit when he could need some motivation or when things are tough.
I found that a website like this would create more value than a static page that contained a list of things that is not personal to me like there are many sites that already do.

In terms of aesthetic have i used flexbox to position the things one adds so that the things is place nicely related to the other items.
I would say what the page lack in aesthetics it makes up for in technical and thematic elements. There has to be something to improve in part two of this site.

## Requirements

### CSS
Css was used both in stylesheet and trough the style property of the DOM elements manipulated with JS.

### JavaScript
JavaScript was used to add functionality to add and remove things one is grateful for to the page and store it in localstorage so the page persists between visits.

### Favicon
A favicon with multiple resolutions was created combining the outline of two images found on google images.

### W3C
The markup of the site was tested by adding things to the site then saving the file to the desktop with a name that contains no spaces for then to upload the webpage to the W3C validation tool.
The site contained no markup errors.

### CSS / JS files
The site has CSS and JS in separate files with the omission of the demo page containing some js to pre-populate localstorage with some data and some manipulation of css in the JS file. 

## Reflections

#### Experiences

#### Time used
220 min before reflection and 20 min reflection so about 4 hours.

|Task|Time|Description|
|---|---|---|
|Init|15 min|Created git repo for the course and configured WebStorm to work with VCS|
|Crafting website idea|6min|I looked up what others had done with the theme "Things to be thankful for in life". I mostly found lists like "60 Things to Be Grateful For In Life", with everything from coffee to your parents. I figured what a student could need is a personalised website where he can add all the things he are grateful for and could be used as a start page to give him motivation. |
|Added js and css files|6min||
|Favicon|20min|Created a multi resolution one with GIMP following this guide: http://thenewcode.com/467/Creating-Multi-Resolution-Favicons-For-Web-Pages-With-GIMP|
|Added functionality to add a image|50min|Had to go a bit fancy and let the user select sizes|
|Added styling for multiple things|15min|Used flexbox to add styling to make multiple objects not look to bad|
|Added functionality to add and remove a thing|95min|Added form to add thing you are grateful for and remove them with double click|
|Demo page|11 min|Demo page to show what it can look like|

#### What part of the project was the most time used on?

Adding functionality to add and remove things.

#### Problems

##### Practical
- The original idea was to show the user a set of images he could pick from. This was hard to do as it would involve creating a API that could provide image data from eg google search as google does not allow cors

##### Academic
- 