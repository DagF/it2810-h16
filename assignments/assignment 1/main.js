(function(){
    var ELEMENTS = {
        APP: document.getElementById("app"),
        THINGS: document.getElementById("things"),
        ADD_THING_BUTTON: document.getElementById("add-thing-button"),
        ADD_THING: {
            VIEW: document.getElementById("add-thing-view"),
            FORM: {
                FORM: document.getElementById("add-thing-form"),
                NAME: document.getElementById("add-thing-form-name"),
                DESCRIPTION: document.getElementById("add-thing-form-description"),
                WIDTH: document.getElementById("add-thing-form-width"),
                IMAGE: document.getElementById("add-thing-form-image-url")
            }
        }
    };
    
    function showAddThingView() {
        ELEMENTS.ADD_THING.VIEW.className = "";
    }
    
    function resetAddThingView(event) {
        // Javascript events will look on the element that was clicked and see if there was a event listener, if there was none it will look at the parents element and so on.
        // This would result in that you can not click any element in the add thing view without it closing witch is not what we want.
        // The solution is to check if the target of the event is the element 'this' witch was the element the eventlistener was bound to in the first place.
        // Mind-boggling? Yes. More can be read from this resource: http://javascript.info/tutorial/bubbling-and-capturing
        if(event && event.target != this) return;
        ELEMENTS.ADD_THING.VIEW.className = "hidden";
    }

    ELEMENTS.ADD_THING_BUTTON.onclick = showAddThingView;
    ELEMENTS.ADD_THING.VIEW.onclick = resetAddThingView;
    ELEMENTS.ADD_THING.FORM.FORM.onsubmit = addThing;

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
        var height = parseInt(scale * this.height);
        this.thing_view.style.height = ""+ height + "px";
        this.thing_view.style.backgroundSize = this.thing.width + "px " + height + "px";
    }

    function setImageHeight(thing_view, thing) {
        var image = new Image();
        image.thing_view = thing_view;
        image.thing = thing;
        image.onload = imageCallback;
        image.src = thing.img;
    }

    function createThingView(thing){
        var thing_view = document.createElement("div");
        thing_view.className = "thing";
        var backgroundImage = "url('" + thing.img + "')";
        thing_view.style.backgroundImage = backgroundImage;
        thing_view.style.backgroundSize = thing.width + "px auto";
        thing_view.title = thing.description;
        thing_view.style.width = ""+ thing.width + "px";

        setImageHeight(thing_view, thing);

        var name = document.createElement("h2");
        name.innerHTML = thing.name;
        thing_view.appendChild(name);
        thing_view.ondblclick = function () {
            removeThing(thing, thing_view);
        };
        return thing_view;
    }

    function addThing(event){
        event.preventDefault();
        var thing = new Thing(ELEMENTS.ADD_THING.FORM.NAME.value, ELEMENTS.ADD_THING.FORM.IMAGE.value, ELEMENTS.ADD_THING.FORM.DESCRIPTION.value, ELEMENTS.ADD_THING.FORM.WIDTH.value);
        addThingToStorage(thing);
        addThingToView(thing);
        resetAddThingView();
        return false;
    }

    function addThingToView(thing){
        ELEMENTS.THINGS.appendChild(createThingView(thing));
    }

    function addThingsToThingsView(things){
        for( var i = 0; i < things.length; i++){
            addThingToView(things[i]);
        }
    }

    function addThingToStorage(thing) {
        var things = getThings();
        things.push(thing);
        localStorage.setItem("things", JSON.stringify(things));

    }

    function getThings(){
        var things = localStorage.getItem("things");
        if( !things || things.length < 1){
            things = [];
        }
        else{
            things = JSON.parse(things);
        }
        return things;
    }

    function removeThing(thing, thing_view){
        ELEMENTS.THINGS.removeChild(thing_view);
        removeThingFromStorage(thing);
    }

    function removeThingFromStorage(thing){
        var things = getThings();
        for(var t = 0; t < things.length; t++){
            if( things[t].img === thing.img){
                break;
            }
        }
        if (t < things.length) {
            things.splice(t, 1);
        }
        localStorage.setItem("things", JSON.stringify(things));
    }


    function loadThings(){
        var things = getThings();
        addThingsToThingsView(things);
    }

    function clearLocalStorage(){
        localStorage.setItem("things", "");
    }
    loadThings();
})();