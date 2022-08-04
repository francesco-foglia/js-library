$(function () {

  const books = [
    {
      title: 'Il vecchio e il mare',
      author: 'Ernest Hemingway',
      year: '1951'
    },
    {
      title: 'La forma dell\'acqua',
      author: 'Andrea Camilleri',
      year: '1994'
    },
    {
      title: 'Elogio della fuga',
      author: 'Henri Laborit',
      year: '1976'
    },
    {
      title: 'La camera azzurra',
      author: 'Georges Simenon',
      year: '1964'
    }
  ]

  print(books);


  // Functions-----------------------------------

  function print(array) {

    $("#library").html("");

    array.forEach(
      (element) => {
        $("#library").append(
        `<div class="book col-md-6 col-lg-4 my-2">
          <div class="card p-2">
            <p class="title h5">${element.title}</p>
            <p class="author h6">${element.author}</p>
            <p class="year h6">${element.year}</p>
          </div>
        </div>`
        );
      }
    );

  }

});
