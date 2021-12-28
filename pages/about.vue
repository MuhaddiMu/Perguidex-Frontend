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
      title: 'About Us'
    }
  },

  data() {
    return {
      title: 'About Perguidex',
      featuredImage: '/images/blogs/about/feature.png',
      body: `
          <p>
          Managing your daily routine, personal tasks and all related to your
          professional life has never been easier. Perguidex derived from the
          combination of PERsonal and Guide, allows you to have the best
          creative schedule and self-management routine. In this digital world
          that is ever growing, one cannot simply afford to be left behind as
          everything revolves around how you are managing your schedule, your
          life and your day-to-day tasks. You cannot let procrastination take
          the wheel, and if you feel like you need to manage your life more
          effectively, Perguidex is the best SAAS solution that you are going to
          find. Perguidex might not be the first of its kind, but it is the best
          application for an end-user to find their drive and stay motivated.
        </p>

        <p>
          Perguidex is not an ordinary app, it allows smooth compatibility with
          50+ features so you can sync your calendars, appointments, your
          wardrobe and even your financials to have the right edge of technology
          and reshape your life into something truly productive and meaningful.
          The application represents the graphical progress to keep you
          motivated and a review of your past performance and improvements to
          ensure that you stick to the path and make your day efficient. We
          value motivation, self-management and all that can be made possible
          once you achieve these and that is what we are offering a chance at
          for everyone through the application. One who feels like having the
          productivity, but not able to harness that would simply love our
          application.
        </p>

        <p>
          Understanding the imperative nature of time, your life needs to be
          well managed. Perguidex is everything you need for automation in your
          life to have the right productivity and motivation to carve your way
          every single day and track your performance with pointers and your own
          reviews. Finding the right productivity during these times is not easy
          for anyone but Perguidex is the perfect tool that will help you stay
          on the track and keep you moving forward. It allows you to see
          accomplishment with smaller steps so you can keep the pace and move
          towards your ultimate goals more swiftly.
        </p>

        <p>
          We are a SAAS app product offering state-of-the-art, Self-management
          application for end users. The inevitable need of time management and
          the importance to have the right motivation, self-management and
          productivity for every individual to make their lives better and
          strive towards their goals are the main motives for us. Our passion
          for the cause that drives us. The unmatched features being offered by
          the application like calendar management, app sync and a convenient
          interface make us the best app of our kind out there.
        </p>`,
      date: 'November 28, 2021'
    }
  }
}
</script>
