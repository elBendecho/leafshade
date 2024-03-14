const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('in-frame');
        }
        else{
            element.target.classList.remove('in-frame'); 
        }
    });
});

const infoBoxes = document.querySelectorAll('.on-scroll');
infoBoxes.forEach(box => observer.observe(box));