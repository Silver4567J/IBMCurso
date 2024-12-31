let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

/*
Explicación detallada acerca del ejercicio para resolver:
1.- Agregar un botón dinámico:
Cuando el usuario agrega un libro, se genera automáticamente un botón de "Delete" asociado a ese libro. 
Esto se logra con la función showBooks, que recorre el arreglo books y genera dinámicamente el HTML de 
cada libro, incluyendo el botón.

2.- Crear la función deleteBook:
La función recibe el índice del libro como parámetro (pasado dinámicamente desde el botón generado). 
Utilizando el método splice para eliminar el elemento correspondiente del arreglo books.

3.- Actualizar la lista después de eliminar:
Después de modificar el arreglo con splice, se llama nuevamente a la función showBooks para refrescar 
la lista mostrada en pantalla y reflejar los cambios.

4.- Uso de splice:
El método splice(index, 1) elimina un único elemento del arreglo, empezando desde la posición index.

5.- Función clearInputs:
Una vez que se agregado un libro, se limpia el formulario llamando a esta función, que establece los
valores de los campos de entrada en cadenas vacías.

En conclusion, este sistema permite gestionar dinámicamente una lista de libros, agregando y 
eliminando elementos sin necesidad de recargar la página. Cada interacción actualiza el DOM 
en tiempo real.
 */