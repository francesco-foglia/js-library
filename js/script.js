$(function () {

  let books = [
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

  printBooks(books);


  $("#add-book").click(

    function () {
      books = addBook(books);
      printBooks(books);

      $("#input-title").val("");
      $("#input-author").val("");
      $("#input-year").val("");
    }

  );


  $("#search-button").click(

 	  function() {

      if ($("#input-search").val() == "") {
        alert("Inserisci un parametro di riceca");
        printBooks(books);
      }

		  let searchedBooks = [];

      books.forEach(
        (element) => {

          let search = $("#input-search").val();
          let searchLowerCase = search.toLowerCase();
          let titleLowerCase = element.title.toLowerCase();
          let authorLowerCase = element.author.toLowerCase();

          if ( titleLowerCase.includes(searchLowerCase) ||
               authorLowerCase.includes(searchLowerCase) ||
               element.year.includes(searchLowerCase) ) {

            searchedBooks = [
              ...searchedBooks,
              element
            ];

          }

        }
      );

      if (searchedBooks == "") {
        alert("Nessun risultato corrispondente alla ricerca");
        $("#input-search").val("");
        printBooks(books);
      } else {
        printBooks(searchedBooks);
      }

 	  }

  );


  // Functions-----------------------------------

  function printBooks(array) {

    $("#library").html("");

    array.forEach(
      (element) => {
        $("#library").append(

          `<div class="col-md-6 col-lg-4 my-2">
            <div class="card p-2">
              <p class="h5">${element.title}</p>
              <p class="h6">${element.author}</p>
              <p class="h6">${element.year}</p>
            </div>
          </div>`

        );
      }
    );

  }

  function addBook(array) {

    const inputArray = [$("#input-title").val(), $("#input-author").val(), $("#input-year").val()];

    const [title, author, year] = inputArray;

    if (title != "" && author != "" && year != "") {

      const newBook = {
        title,
        author,
        year
      }

      let i = 0;
      let find = false;

      while (i < array.length && find == false) {
        if (array[i].title == newBook.title && array[i].author == newBook.author && array[i].year == newBook.year) {
          find = true;
          alert("Libro già presente");
        }
        else {
          i++;
        }
      }

      if (find == false) {
        array = [
          ...array,
          newBook
        ];
      }

    } else {
      alert("Compila tutti i campi");
    }

    return array;
  }

});
