$(() => {

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


  $("#add-button").click(
    () => {
      books = addBook(books);
      printBooks(books);

      $("#input-title").val("");
      $("#input-author").val("");
      $("#input-year").val("");
    }
  );

  $(".input-add-book").keydown(
    (event) => {
      if (event.which == 13) {

        books = addBook(books);
        printBooks(books);

        $("#input-title").val("");
        $("#input-author").val("");
        $("#input-year").val("");
      }
    }
  );


  $("#search-button").click(
    () => {
      searchBooks();
    }
  );

  $("#input-search").keydown(
    (event) => {
      if (event.which == 13) {
        searchBooks();
      }
    }
  );

  /*
  $("#input-search").keyup(
    () => {
      searchBooks();
    }
  );
  */


  // Functions-----------------------------------

  function printBooks(array) {

    $("#library").html("");

    array.forEach(
      (element, index) => {

        $("#library").append(

          `<div class="col-md-6 col-lg-4 my-2">
            <div class="card p-2">
              <div class="btn_close close-${index} mb-2">
                <span>x</span>
              </div>
              <h2 class="h5">${element.title}</h2>
              <h3 class="h6">${element.author}</h3>
              <h4 class="h6">${element.year}</h4>
            </div>
          </div>`

        );

        $(`.btn_close.close-${index}`).click(
          () => {
            array.splice(index, 1);
            printBooks(array);
          }
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
      let found = false;

      while (i < array.length && found == false) {

        let arrayTitle = array[i].title.toLowerCase();
        let arrayAuthor = array[i].author.toLowerCase();
        let arrayYear = array[i].year.toLowerCase();

        let newBookTitle = newBook.title.toLowerCase();
        let newBookAuthor = newBook.author.toLowerCase();
        let newBookYear = newBook.year.toLowerCase();

        if (arrayTitle == newBookTitle &&
          arrayAuthor == newBookAuthor &&
          arrayYear == newBookYear) {

          found = true;
          alert("Libro già presente");
        }
        else {
          i++;
        }
      }

      if (found == false) {
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


  function searchBooks() {

    if ($("#input-search").val() == "") {
      alert("Inserisci un parametro di ricerca");
      printBooks(books);
    }

    let searchedBooks = [];

    books.forEach(
      (element) => {

        let search = $("#input-search").val();
        let searchLowerCase = search.toLowerCase();

        let titleLowerCase = element.title.toLowerCase();
        let authorLowerCase = element.author.toLowerCase();
        let yearLowerCase = element.year.toLowerCase();

        if (titleLowerCase.includes(searchLowerCase) ||
          authorLowerCase.includes(searchLowerCase) ||
          yearLowerCase.includes(searchLowerCase)) {

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

});
