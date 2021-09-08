<template>
  <div>
    <v-sheet v-if="$vuetify.breakpoint.smAndUp" :elevation="4" class="pa-8">
      <h3>Filters</h3>
      <v-radio-group v-model="priceFilter" :mandatory="true">
        <v-radio
          v-for="(price, index) in prices"
          :key="index"
          :label="price"
          :value="index"
        ></v-radio>
      </v-radio-group>
    </v-sheet>
    <v-expansion-panels v-else>
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-chevron-down">
          Filters
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="priceFilter" :mandatory="true">
            <v-radio
              v-for="(price, index) in prices"
              :key="index"
              :label="price"
              :value="index"
            ></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: ["Any", "Under $25", "$25 to $100", "$100 to $500", "Over $500"],
      priceFilter: 0,
      checkbox: true,
    };
  },
};
</script>
