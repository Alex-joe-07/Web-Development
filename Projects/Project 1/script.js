document.getElementById('bookmarkForm').addEventListener('submit', addBookmark);

function addBookmark(e) {
    e.preventDefault();

    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;

    const bookmark = { name: siteName, url: siteURL };

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    document.getElementById('bookmarkForm').reset();

    displayBookmarks();
}

function deleteBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks = bookmarks.filter(bookmark => bookmark.url !== url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    displayBookmarks();
}

function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const bookmarksList = document.getElementById('bookmarksList');

    bookmarksList.innerHTML = bookmarks.map(bookmark => `
        <div class="bookmark">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            <button onclick="deleteBookmark('${bookmark.url}')">Delete</button>
        </div>
    `).join('');
}

// Initial display
displayBookmarks();
