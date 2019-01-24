<template>
  <div class="square" :class="{active: !isActive}" @click="listenClick">
    {{_title}}
    <br>by
    <br>
    {{_author}}
    <br>
    nombre de clique: {{clickCount}}
  </div>
</template>

<script>
export default {
  computed: {
    _author() {
      return this.author || "Momise";
    },
    _title() {
      return this.title || "Default Title";
    }
  },
  methods: {
    listenClick() {
      this.clickCount += 1;
      if (this.clickCount > 5) {
        this.$emit("aLotOfClicks", this.clickCount);
      }
    }
  },
  data() {
    return {
      clickCount: 0,
      isActive: false
    };
  },
  props: ["title", "author"]
};
</script>

<style lang="scss" scoped>
.square {
  text-align: center;
  height: 120px;
  width: 120px;
  border: 2px solid;
}
</style>
