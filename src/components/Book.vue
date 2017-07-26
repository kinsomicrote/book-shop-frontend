<template>
  <div class="row">
    <div class="col-md-12">
      <h2>All Books</h2>

      <p><router-link :to="{ name: 'Create' }" class="btn btn-primary">Add new book</router-link></p>

      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>URL</td>
            <td>Actions</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="book in books">
            <td>{{ book.name }}</td>
            <td>{{ book.url }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      books: []
    }
  },

  created: function () {
    this.fetchBook()
  },

  methods: {
    fetchBook: function () {
      this.$http.get('https://sheltered-beach-50983.herokuapp.com/books').then((response) => {
        this.books = response.body
      }, (response) => {
      })
    }
  }
}
</script>

<style scoped>

</style>
