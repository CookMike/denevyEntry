<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>
        <v-icon color="primary" to="/">mdi-vuetify</v-icon>
          {{ $t("message") }}
        <v-btn color="primary" outlined @click="switchLang"><v-icon>mdi-translate</v-icon></v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn @click="drawer = !drawer">Menu</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon small left>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn to="/store" text>
          <v-icon small left>mdi-basket</v-icon>
          Store
        </v-btn>
        <v-btn to="/cart" text>
          <v-icon small left>mdi-cart</v-icon>
          Cart
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon small>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{item.title}}
            </v-list-item-title>
            </v-list-item-content
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import i18n from '../i18n'
  
export default {
  
  data: () => {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Store", link: "store", icon: "basket" },
        { title: "Cart", link: "cart", icon: "cart" },
      ],
      
    };
  },
  methods:{
    switchLang: () =>  i18n.locale = i18n.locale === 'sk' ? 'en' : 'sk'
    
  }
}
</script>