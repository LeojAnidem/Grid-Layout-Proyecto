let mainChilds = document.querySelectorAll('main section'),
    cssVars = document.documentElement,
    root = document.querySelector(':root')
;

const offActive = (classNameActive) => {
    let notDot = classNameActive.replace('.', '');
    let active = document.querySelectorAll(classNameActive);
    active[0].className = active[0].className.replace(` ${notDot}`, '');
} 

const changeSection = (id) => {
    let idName = id.replace('Path', '');

    (screen.width <= 400)? cssVars.style.setProperty("--bg", `url(../Assets/img/mb-${idName}-fondo.jpg)`) : cssVars.style.setProperty("--bg", `url(../Assets/img/desk-${idName}-fondo.jpg)`);

    offActive('.active');
    
    mainChilds.forEach(child => {
        (child.id.includes(`${idName.toUpperCase()}`))? child.className += ' active' : null;
    });
}

const pageIndex = () => {   
    let pagePaths = document.querySelectorAll('.page-index__path');

    (screen.width <= 400)? cssVars.style.setProperty("--bg", `url(../Assets/img/mb-home-fondo.jpg)`) : cssVars.style.setProperty("--bg", `url(../Assets/img/desk-home-fondo.jpg)`);

    pagePaths.forEach(path => {
        path.addEventListener('click' , function(){
            offActive('.page-index__path--active');
            this.className += ' page-index__path--active';
            changeSection(this.id);
        });
    });
}

export {pageIndex};