<template>
  <div class="get-ajax">
    <h1 class="title">Liste des cafés à un euro</h1>
    <ul>
      <li v-for="(cafe,n) in cafes" :key="n">{{cafe.fields.adresse}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
console.log(axios);

export default {
  created() {
    this.getCafesUnEuro();
  },

  data() {
    return { cafes: null };
  },
  methods: {
    getCafesUnEuro() {
      axios
        .get(
          "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste-des-cafes-a-un-euro&rows=1000&facet=arrondissement"
        )
        .then(res => {
          this.cafes = res.data.records;
          console.log(res);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>





<style>
.get-ajax {
  border-bottom: 2px solid;
  padding: 20px;
}
</style>
