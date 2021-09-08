<template>
<div>
    <v-card outlined>
      <v-img :src="product.image" height="200px" />
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>${{ product.price }}</v-card-subtitle>
      <v-card-actions>
        <v-btn @click="addToCart" color="success" outlined>
          <v-icon left small>mdi-plus</v-icon>
          Add to Cart</v-btn
        >
      </v-card-actions>
    </v-card>
</div>
</template>

<script>
export default {
  props:{
    product: Object,
    addToCart: Function,
  },
  data() {
    return {};
  },
};
</script>
