let app = new Vue({
  el: '#app',
  data: {
    search: '',
    searches: ["amen to that"],
    current: {
      title: '',
      img: '',
      alt: ''
    },
    loading: true,
    searched_book: '',
  },
  created() {
    this.book_search();
  },
  methods: {
    async book_search() {
      if (this.searches.length > 0){
        this.search = this.searches[this.searches.length - 1].replace(/ /g, '+');
        console.log(this.search);
        url = 'http://openlibrary.org/search.json?q=' + this.search;
      }
      try{
        this.loading = true;

        const response = await axios.get(url);
        console.log("response: ", response);
        this.current = response.data;
        this.search = '';
        this.loading = false;
        return true;
      }
      catch(error){
        console.log(error)
      }
    },
    add_search() {
      this.searches.push(this.searched_book);
      this.searched_book = '';
      this.current = {};
      this.book_search();
    },
    keep_book(title, isbn, author, date) {
      if(title.length === 0 || isbn.length === 0 || author.length === 0 || date.length === 0){
        return false;
      }
      return true;
    }
  },
})
