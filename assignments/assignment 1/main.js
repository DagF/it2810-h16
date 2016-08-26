(function(){
    var ELEMENTS = {
        APP: document.getElementById("app")
    };

    function Thing(name, img, description, width){
        return {
            name: name,
            img: img,
            description: description,
            width: width
        }
    }


    function imageCallback() {
        var scale = this.thing.width / this.width;
        console.log(this.thing.width, this.width);
        var height = scale * this.height;
        this.thing_view.style.height = ""+ height + "px";
    }

    function setImageHeight(thing_view, thing) {
        var image = new Image();
        image.thing_view = thing_view;
        image.thing = thing;
        image.onload = imageCallback;
        image.src = thing.img;
    }

    function createThingView(thing){
        var thing_view = document.createElement("span");
        thing_view.className = "thing";
        var backgroundImage = "url('" + thing.img + "')";
        console.log(backgroundImage);

        thing_view.style.backgroundImage = backgroundImage;
        thing_view.style.backgroundSize = thing.width + "px auto";
        thing_view.title = thing.description;
        thing_view.style.width = ""+ thing.width + "px";

        setImageHeight(thing_view, thing);

        var name = document.createElement("h2");
        name.innerHTML = thing.name;
        thing_view.appendChild(name);
        return thing_view;
    }

    function addThing(thing){
        addThingToView(thing);
    }

    function addThingToView(thing){
        ELEMENTS.APP.appendChild(createThingView(thing));
    }

    function addThingsToThingsView(things){
        for( var i = 0; i < things.length; i++){
            addThingToView(things[i]);
        }
    }

    function loadThings(){
        var things = localStorage.getItem("things");
        if( !things || things.length < 1){
            things = [];
            localStorage.setItem("things", things);
        }
        addThingsToThingsView(things);
    }

    addThing(Thing("test", "http://cdn.tinybuddha.com/wp-content/uploads/2010/08/Happy.png", "description", "500"));
})();