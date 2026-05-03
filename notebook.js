let frontPage = document.querySelector('.front-page');
let actualNotebook = document.querySelector('.actual-notebook');
let noteContent = document.querySelector('.note-content');

function openBook(){
    actualNotebook.style.display = 'flex';
    frontPage.style.display = 'none';
}

function closeBook(){
    actualNotebook.style.display = 'none';
    frontPage.style.display = 'flex';
}
 
actualNotebook.style.display = 'none';

noteContent.addEventListener('keydown', function(e) {
    if(e.key=='Enter'){
        const lineHeight = parseFloat(getComputedStyle(this).lineHeight);
        const maxLines = Math.floor(this.clientHeight / lineHeight);
        const currentLines = this.innerText.split('\n').length;

        if(currentLines >= maxLines){
            e.preventDefault();
        }
    }
});