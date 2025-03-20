function showDescription(bookId) {
    // Masquer toutes les descriptions
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => {
        desc.style.display = 'none';
    });

    // Afficher la description du livre sélectionné
    const selectedBook = document.getElementById(bookId);
    selectedBook.style.display = 'block';
}
