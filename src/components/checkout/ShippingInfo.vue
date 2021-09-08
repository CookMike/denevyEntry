<template>
  <v-stepper-content step="2">
    <v-text-field v-model="data.street" label="Street" required></v-text-field>
    <v-text-field v-model="data.state" label="State" required></v-text-field>
    <v-text-field
      v-model="data.zip"
      label="Zip"
      :rules="[rules.required, rules.zip]"
      required
    ></v-text-field>
  <v-btn color="primary" @click="next">Continue</v-btn>
  <v-btn text @click="previous">Go back</v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    next: Function,
    previous: Function,
    rules: Object,
    data: Object,
  },
};
</script>