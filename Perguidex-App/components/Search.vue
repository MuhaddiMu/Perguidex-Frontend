<template>
  <v-autocomplete
    v-model="SearchModel"
    dark
    class="mr-6 w-40"
    :loading="SearchLoading"
    :items="SearchItems"
    :search-input.sync="Search"
    cache-items
    autofocus
    prepend-inner-icon="mdi-magnify"
    dense
    flat
    hide-details
    single-line
    hide-selected
    hide-no-data
    label="Quick Search"
    solo-inverted
    color="black"
  ></v-autocomplete>
</template>

<script>
export default {
  data() {
    return {
      SearchModel: null,
      Search: null,
      SearchLoading: false,
      SearchItems: [],
      SearchBGColor: '',
      ToggleSearch: false,
      ToggleDrawer: false,
      Items: [
        {
          Icon: 'mdi-apps',
          Title: 'Welcome',
          To: '/'
        }
      ]
    }
  },
  watch: {
    Search(val) {
      val && val !== this.SearchModel && this.querySelections(val)
    }
  },
  methods: {
    ChangeColors() {
      this.SearchBGColor = 'white'
    },
    querySelections(v) {
      this.SearchLoading = true
      const States = ['Alaska', 'New York', 'Arizona', 'California', 'Colorado']
      setTimeout(() => {
        this.SearchItems = States.filter((e) => {
          return (e || '').toLowerCase().includes((v || '').toLowerCase()) > -1
        })
        this.SearchLoading = false
      }, 500)
    }
  }
}
</script>
<style scoped>
.w-40 {
  width: 40px;
}
</style>
