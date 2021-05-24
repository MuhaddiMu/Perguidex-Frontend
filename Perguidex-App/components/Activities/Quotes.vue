<template>
  <blockquote class="text-center home-quote">
    <p>Happiness is the consequence of personal effort.</p>
    <small>Elizabeth Gilbert</small>
  </blockquote>
</template>

<script>
export default {}
</script>

<style>
blockquote.home-quote {
  border: none;
  padding: 40px 0;
}

blockquote {
  margin: 0 0 20px;
  font-size: 17.5px;
}
blockquote.home-quote p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-style: italic;
  font-size: 25px;
  line-height: 1.5;
  color: #ccd4d9;
  margin-bottom: 10px;
}

blockquote.home-quote p:before {
  content: '\201C';
}

blockquote.home-quote p:after {
  content: '\201D';
}

blockquote.home-quote small {
  color: #7a8f99;
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
