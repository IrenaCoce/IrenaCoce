function PageRenderer(user) {
    this.user = user;
    this.mainContainer = document.getElementById("main-container");

    this.renderAll = function() {
        this.mainContainer.classList.add("main");
        this.renderLeft();
        this.renderRight();
    }
    this.renderLeft = function() {
        var leftSide = document.createElement("div");
        leftSide.classList.add("left-side");
        this.mainContainer.appendChild(leftSide);

        var profilePic = document.createElement("img");
        profilePic.src = this.user.profilePictures.src;
        profilePic.alt = this.user.profilePictures.alt;
        profilePic.classList.add('prof');
        leftSide.appendChild(profilePic);
        var aboutMe = document.createElement('div');
        aboutMe.innerHTML = 'About me section'
        aboutMe.classList.add('about');
        leftSide.appendChild(aboutMe);


        function zoom(event){
            profilePic.style.width = '500px';
            profilePic.style.width = '500px';
 
            event.removeEventListener("mouseover", zoom, false);
            
        }

        
        profilePic.addEventListener('mouseover', function(event){
            zoom();
             
           
 
        })
    }
    this.renderRight = function() {
        var rightSide = document.createElement('div');
        rightSide.classList.add('right-side');
        this.mainContainer.appendChild(rightSide);

        var gallery = document.createElement('div');
        gallery.classList.add('gallery');
        rightSide.appendChild(gallery);


        for(var index = 0; index < 10; index++) {
            var image = document.createElement('img');
            image.classList.add('imageStyle');
            image.src = 'https://picsum.photos/200/300/?random';
            gallery.appendChild(image);
        }


        var posts = document.createElement('div');
        posts.classList.add('posts');
        rightSide.appendChild(posts);


        for(var index = 0; index < 5; index++) {
            var news = document.createElement('div');
            news.classList.add('news');
            
            posts.appendChild(news);
        }


    }

    
}
