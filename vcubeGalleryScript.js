
(function(){
    var openedImageid = null;
    var cons_or_Interior = null;
})();

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        var isRightArrow = false;
        var isLeftArrow = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
            isRightArrow = (evt.key === "ArrowRight");
            isLeftArrow = (evt.key === "ArrowLeft");
        } else {
            isEscape = (evt.keyCode === 27);
            isRightArrow = (evt.keyCode === 39);
            isLeftArrow = (evt.keyCode === 37);
        }
        if (isEscape) {
            if(openedImageid != null){
                closeFullscreen();
            }
        }
        if (isRightArrow) {
            if(openedImageid != null){
                LoadNextImage();
            }
        }
        if (isLeftArrow) {
            if(openedImageid != null){
                LoadPreviousImage();
            }
        }
    };

    function OpenImage(id){
        var image = document.getElementById(id);
        var openingImage = document.getElementById("DisplayImage");
        openingImage.src = image.src;
        openingImage.alt = image.alt;
        openedImageid = image.id;
        document.getElementById("openFullscreen").style.display = "block";
        document.getElementById("Image_Caption").innerHTML = image.title;
    }

    function closeFullscreen(){
        openedImageid = null;
        document.getElementById("openFullscreen").style.display = "none";
    }

    function LoadPreviousImage(){
        if(openedImageid <= 1){
            openedImageid = 37;
        }else{
            openedImageid--;
        }
        var image = document.getElementById(openedImageid);
        var openingImage = document.getElementById("DisplayImage");
        openingImage.src = image.src;
        openingImage.alt = image.alt;
        document.getElementById("Image_Caption").innerHTML = image.title;
    }

    function  LoadNextImage(){
        if(openedImageid < 37){
            openedImageid++;
        }else{
            openedImageid=1;
        }
        var image = document.getElementById(openedImageid);
        var openingImage = document.getElementById("DisplayImage");
        openingImage.src = image.src;
        openingImage.alt = image.alt;
        openingImage.alt = image.imageid;
        document.getElementById("Image_Caption").innerHTML = image.title;
    }

    function residentialPics(){
        if((cons_or_Interior == null)||(cons_or_Interior=="All")){
            [].forEach.call(document.querySelectorAll('.Residential'), function (el) {
                el.style.display = 'block';
            });    
            [].forEach.call(document.querySelectorAll('.Commercial'), function (el) {
                el.style.display = 'none';
            });
        }else if(cons_or_Interior == "Construction"){
            [].forEach.call(document.querySelectorAll('.Residential, .Commercial'), function (el) {
                el.style.display = 'none';
            });    
            [].forEach.call(document.querySelectorAll('.Residential.Construction'), function (el) {
                el.style.display = 'block';
            });
        }else{
            [].forEach.call(document.querySelectorAll('.Residential, .Commercial'), function (el) {
                el.style.display = 'none';
            });    
            [].forEach.call(document.querySelectorAll('.Residential.Interior'), function (el) {
                el.style.display = 'block';
            });
        }
            
    }

    function commercialPics(){
        if((cons_or_Interior == null)||(cons_or_Interior=="All")){
            [].forEach.call(document.querySelectorAll('.Commercial'), function (el) {
                el.style.display = 'block';
            });    
            [].forEach.call(document.querySelectorAll('.Residential'), function (el) {
                el.style.display = 'none';
            });
        }else if(cons_or_Interior == "Construction"){
            [].forEach.call(document.querySelectorAll('.Residential, .Commercial'), function (el) {
                el.style.display = 'none';
            });    
            [].forEach.call(document.querySelectorAll('.Commercial.Construction'), function (el) {
                el.style.display = 'block';
            });
        }else{
            [].forEach.call(document.querySelectorAll('.Residential, .Commercial'), function (el) {
                el.style.display = 'none';
            });    
            [].forEach.call(document.querySelectorAll('.Commercial.Interior'), function (el) {
                el.style.display = 'block';
            });
        }
    }

    function displayAllPics(){
        /*Change Button Color*/
        document.getElementById("AllPics").classList.add("selectedButton");
        if(document.getElementById("ConstructionPics").classList.contains("selectedButton")){
            document.getElementById("ConstructionPics").classList.remove("selectedButton");
        }
        if(document.getElementById("InteriorPics").classList.contains("selectedButton")){
            document.getElementById("InteriorPics").classList.remove("selectedButton");
        }  
        /*Change display images*/
        [].forEach.call(document.querySelectorAll('.Residential, .Commercial'), function (el) {
            el.style.display = 'block';
        });

        /*Hide Residential and Commercial Button*/
        $(".forinterior").slideUp("slow");

        cons_or_Interior = "All";
    }

    function ConstructionPics(){
        /*Change Button Color*/
        
        document.getElementById("ConstructionPics").classList.add("selectedButton");
        if(document.getElementById("AllPics").classList.contains("selectedButton")){
            document.getElementById("AllPics").classList.remove("selectedButton");
        }
        if(document.getElementById("InteriorPics").classList.contains("selectedButton")){
            document.getElementById("InteriorPics").classList.remove("selectedButton");
        }
        /*Change display images*/
        [].forEach.call(document.querySelectorAll('.Construction'), function (el) {
            el.style.display = 'block';
        });
        [].forEach.call(document.querySelectorAll('.Interior'), function (el) {
        el.style.display = 'none';
        });

        /*Hide Residential and Commercial Button*/
        $(".forinterior").slideUp("slow");

        cons_or_Interior = "Construction";
    }

    function InteriorPics(){
        /*Change Button Color*/
        document.getElementById("InteriorPics").classList.add("selectedButton");
        if(document.getElementById("ConstructionPics").classList.contains("selectedButton")){
            document.getElementById("ConstructionPics").classList.remove("selectedButton");
        }
        if(document.getElementById("AllPics").classList.contains("selectedButton")){
            document.getElementById("AllPics").classList.remove("selectedButton");
        }

        /*Change display images*/
        [].forEach.call(document.querySelectorAll('.Interior'), function (el) {
            el.style.display = 'block';
        });
        [].forEach.call(document.querySelectorAll('.Construction'), function (el) {
        el.style.display = 'none';
        });

        /*Display Residential and Commercial Button*/
        $(".forinterior").slideDown("slow");

        cons_or_Interior = "Interior";
    }