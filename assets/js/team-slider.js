           /*  Team section slider  */

              /*  Переменные */
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};
            
const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};
            
const setActive = ind =>{
    activeSlide(ind);
    activeDot(ind);
};
            
const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        // setActive(index);
    }
    else{
        index++;
        // setActive(index);
    }
    setActive(index);
};
            
const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1;
        // setActive(index);
    }
    else{
        index--;
        // setActive(index);
    }
    setActive(index);
};
            
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        setActive(index);
    })
});
            
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);
 
//setInterval(nextSlide, 2000);
