<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="showLocal"
        transition="dialog-top-transition"
        max-width="400"
      >
        <v-card>
          <v-toolbar color="red" flat dark>Keyboard Shortcuts </v-toolbar>
          <v-card-text>
            <v-simple-table>
              <thead>
                <tr>
                  <th class="text-center">
                    Action
                  </th>
                  <th class="text-center">
                    Shortcut
                  </th>
                </tr>
              </thead>
              <tbody class="text-left">
                <tr>
                  <td>Print</td>
                  <td>
                    <span class="font-weight-bold">⌘ + P</span> (macOS), or
                    <span class="font-weight-bold">Ctrl + P</span> (Windows)
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
          <v-card-actions class="justify-end"> </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    showProp: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      showLocal: this.showProp
    }
  },
  watch: {
    showLocal(val) {
      if (val === false) {
        this.closeModal()
      }
    }
  },
  methods: {
    closeModal() {
      this.$parent.fnShowKeyboardShortCuts()
    }
  }
}
</script>
