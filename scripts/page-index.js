let mainChilds = document.querySelectorAll('main section');
let cssVars = document.documentElement;

const offActive = (classNameActive) => {
    let notDot = classNameActive.replace('.', '');
    let active = document.querySelectorAll(classNameActive);
    active[0].className = active[0].className.replace(` ${notDot}`, '');
} 

const changeContent = (id) => {
    let idName = id.replace('Path', '');
    cssVars.style.setProperty("--bg", `url(../Assets/img/desk-${idName}-fondo.jpg)`)

    offActive('.active');
    
    mainChilds.forEach(child => {
        (child.id.includes(`${idName.toUpperCase()}`))? child.className += ' active' : null;
    });
}

const pageIndex = () => {   
    let pagePaths = document.querySelectorAll('.page-index__path');

    pagePaths.forEach(path => {
        path.addEventListener('click' , function(){
            offActive('.page-index__path--active');
            this.className += ' page-index__path--active';
            changeContent(this.id);
        });
    });
}

export {pageIndex};