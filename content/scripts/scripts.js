function showPage(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    // Show the selected page
    var pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('clickButton');
    const sound = document.getElementById('clickSound');
    
    button.addEventListener('click', () => {
        sound.play();
    });
});