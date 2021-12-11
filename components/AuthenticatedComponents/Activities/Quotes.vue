<template>
  <blockquote class="text-center home-quote">
    <p class="grey--text">{{ Quotation.quote }}</p>
    <small class="grey--text">{{ Quotation.author }}</small>
  </blockquote>
</template>

<script>
export default {}
</script>

<style>
blockquote.home-quote {
  /* border: none; */
  padding: 40px 0;
}

blockquote {
  margin: 0 0 20px;
  font-size: 17.5px;
}
blockquote.home-quote p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 10px;
}

blockquote.home-quote p:before {
  content: '\201C';
}

blockquote.home-quote p:after {
  content: '\201D';
}

blockquote.home-quote small {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\2014 \00A0';
}
</style>

<script>
import Quotation from '@/graphql/dailyQuotation.gql'
export default {
  apollo: {
    Quotation: {
      query: Quotation
    }
  }
}
</script>
