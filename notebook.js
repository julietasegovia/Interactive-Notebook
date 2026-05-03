let frontPage = document.querySelector('.front-page');
let actualNotebook = document.querySelector('.actual-notebook');
let noteTitle = document.querySelector('.note-title');
let noteContent = document.querySelector('.note-content');
let pageIndex = document.querySelector('.page-index');
let btnBack = document.querySelector('.move:first-child');
let btnNext = document.querySelector('.move:last-child');

actualNotebook.style.display = 'none';

let pages = [{ title: '', content: '' }];
let currentPage = 0;

function openBook() {
    frontPage.style.display = 'none';
    actualNotebook.style.display = 'flex';
    loadPage(currentPage);
}

function closeBook() {
    savePage(currentPage);
    actualNotebook.style.display = 'none';
    frontPage.style.display = 'flex';
}

function savePage(index) {
    pages[index] = {
        title: noteTitle.value,
        content: noteContent.innerText
    };
}

function loadPage(index) {
    noteTitle.value = pages[index].title;
    noteContent.innerText = pages[index].content;
    pageIndex.textContent = `${index + 1} / ${pages.length}`;
    btnBack.classList.toggle('move-disabled', index === 0);
}

function changePage(direction) {
    savePage(currentPage);

    if (direction === 1) {
        if (currentPage === pages.length - 1) {
            pages.push({ title: '', content: '' });
        }
        currentPage++;
    } else {
        if (btnBack.classList.contains('move-disabled')) return;
        currentPage--;
    }

    loadPage(currentPage);
}

noteContent.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const lineHeight = parseFloat(getComputedStyle(this).lineHeight);
        const maxLines = Math.floor(this.clientHeight / lineHeight);
        const currentLines = this.innerText.split('\n').length;

        if (currentLines >= maxLines) {
            e.preventDefault();
        }
    }
});