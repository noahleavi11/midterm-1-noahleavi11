let app = new Vue({
  el: '#app',
  data: {
    search: '',
    pictures: [],
    searches: ["lord of the rings"],
    current: { },
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
        this.current = response.data;
        console.log("before: ", this.current.docs.length);
        for(i = 0; i < this.current.docs.length; i++){
          if(this.current.docs[i].hasOwnProperty('isbn')){
             picture = "https://openlibrary.org/api/books?bibkeys=ISBN:" + this.current.docs[i].isbn[0] + "&jscmd=details&format=json";
             const response_picture = await axios.get(picture);
             console.log(response_picture.thumbnail_url);
             this.current.docs[i].img = response_picture.thumbnail_url;
             continue;
          }
          else{
            console.log("deleted")
            this.current.docs.splice(i);
          }
        }
        console.log("after: ", this.current.docs.length)
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
  },
})
