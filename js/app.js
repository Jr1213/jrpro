// getting yaer dynimcly in footer
const footer = document.querySelector('.year');
const data = new Date().getFullYear();
footer.innerHTML = JSON.stringify(data)

// change navbar colors when scrolling
const nav = document.querySelector('nav');
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > navHeight) {
        nav.classList.add('active-nav');
    } else {
        nav.classList.remove('active-nav')
    }
})

// move to section
const links = document.querySelectorAll('.link-itme');
links.forEach(link=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        // @ts-ignore
        const className = e.target.getAttribute('href');
        const sectionClass = document.querySelector(`.${className}`)
        sectionClass.scrollIntoView();
    })
})

// go top button
const btnTop = document.querySelector('.gotop');
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > (headerHeight/2)){
        btnTop.classList.add('active-btn')
    } else {
        btnTop.classList.remove('active-btn')
    }
})
btnTop.addEventListener('click', ()=>{
    window.scrollTo({
        left:0,
        top:0
    })
}) 