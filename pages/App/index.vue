<template> <div></div></template>

<script>
export default {
  layout: 'Authed',

  middleware: [
    function({ redirect }) {
      redirect('/app/tasks')
    }
  ]
}
</script>
