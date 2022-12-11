const getTheTitles = function(bookObject) {
    let titleArray = [];
    bookObject.forEach(book => {
        titleArray.push(book['title']);
    });

    return titleArray;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
