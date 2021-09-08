<template>
  <v-container>
    <v-row>
      <v-col md="3" offset-lg="1">
        <Sidebar/>
      </v-col>
      <v-col md="9" lg="7">
        <ProductDisplay/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Sidebar from '../components/store/Sidebar.vue'
import ProductDisplay from '../components/store/ProductDisplay.vue'

export default {
  name: 'Store',
  components:{
      Sidebar,
      ProductDisplay
  },
  data(){
    return{

    }
  }
}
</script>
