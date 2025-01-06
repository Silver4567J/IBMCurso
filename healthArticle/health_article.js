// Crear una nueva instancia de XMLHttpRequest
var xhr = new XMLHttpRequest();

// Definir la URL del archivo JSON
var url = './health_article.json';

// Configurar una solicitud GET al URL en modo asíncrono
xhr.open('GET', url, true);

// Especificar que la respuesta esperada debe ser en formato JSON
xhr.responseType = 'json';

// Manejar el evento onload
xhr.onload = function () {
    if (xhr.status === 200) { // Verificar si la solicitud fue exitosa
        // Recuperar el array de artículos desde la respuesta JSON
        var articles = xhr.response.articles;

        // Obtener el elemento HTML con el ID 'articles'
        var articlesDiv = document.getElementById('articles');

        // Iterar sobre los artículos y construir el HTML dinámico
        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function (way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function (benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Error al cargar los datos:', xhr.statusText);
    }
};

// Enviar la solicitud
xhr.send();
