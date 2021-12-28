<template>
  <v-container>
    <the-blog-post
      :featuredImage="featuredImage"
      :body="body"
      :date="date"
      :title="title"
    />
  </v-container>
</template>

<script>
import TheBlogPost from '@/components/TheBlogPost.vue'
export default {
  components: { TheBlogPost },
  layout: 'Homepage',
  head() {
    return {
      title: 'Support'
    }
  },

  data() {
    return {
      //   featuredImage: '/images/blogs/about/feature.png',
      body: `
          <p>
          We are curently in the beta version. If you find any bugs or issues, we encourage you to reach out to us and we will fix the issues in the next release. Happy Managing!</p>
          <p>Support via Email: ask [at] perguidex.io
         </p>`,
      title: 'Support'
      //   date: 'November 28, 2021'
    }
  }
}
</script>
