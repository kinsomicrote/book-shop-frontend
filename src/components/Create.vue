<template>
  <div class="row">
    <div class="conatiner">
      <div class="col-md-12">
        <form v-on:submit.prevent="addBook" class="form-horizontal">
          <fieldset>
            <legend>Add New Book</legend>
            <div class="form-group">
                <label name="book_name" class="control-label">Book name</label>
                <input type="text" id="focusedInput" class="form-control" v-model="book.name" required>
            </div>

            <div class="form-group">
                <label name="book_url" class="control-label">Book URL</label>
                <input type="text" id="focusedInput" class="form-control" v-model="book.url" required>
            </div>

            <div class="form-group">
              <div class="col-lg-12">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from './Notifications'

export default {
  data () {
    return {
      book: {},
      notifications: []
    }
  },

  methods: {
    addBook: function () {
      this.$http.post('https://sheltered-beach-50983.herokuapp.com/books', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.notifications.push({
          type: 'success',
          message: 'Successfully created book'
        })
      }, (response) => {
        this.notifications.push({
          type: 'error',
          message: 'Error creating book'
        })
      })
    }
  },

  components: {
    Notification
  }
}
</script>

