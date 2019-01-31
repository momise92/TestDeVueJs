<template>
  <nav id="nav">
    <ul class="list">
      <router-link tag="li" to="/">Home</router-link> |

      <router-link tag="li" to="/about">About</router-link> |

      <router-link tag="li" to="/comprendrevuejs">Comprendre Vue</router-link> |

      <router-link tag="li" to="/Tp">Tp</router-link> |

      <router-link tag="li" to="/cafe1euro">Des cafés à 1euro</router-link> |

      <router-link tag="li" to="/simplante">Simplantes</router-link> |

      <router-link tag="li" to="/first-crud">C.R.U.D</router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: row;
  list-style: none;
}
#nav {
  text-align: center;
  padding: 30px;
  li {
    cursor: pointer;
    margin: 0px 5px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
