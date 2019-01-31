<template>
  <div class="about">
    <h1>A propos de Momise</h1>
    <p>Ramenez moi des chaussons au pomme tous les jours !</p>
    <p>Créateur de Simplantes ! depuis 2018</p>
    <ul class="listSquare">
      <li v-for="(info,n) in squaresInfos" :key="n">
        <Square :author="info.author" :title="info.title" @aLotOfClicks="logClicks($event)"/>
      </li>
    </ul>
  </div>
</template>
<script>
import Square from "@/components/Square.vue";
export default {
  data() {
    return {
      squaresInfos: [
        { title: "Square 1", author: "Momi" },
        { title: "Square 2", author: "Foo" },
        { title: "Square 3", author: "Mise" }
      ]
    };
  },
  components: {
    Square
  },
  methods: {
    logClicks(v) {
      console.log("Trop de clique vous avez cliqué =>", v + " fois");
    }
  }
};
</script>

<style>
.listSquare{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
}
</style>

