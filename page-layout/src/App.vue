<template>
<div>
   <h1>안녕 나는 뷰2야</h1>
   <Header/>
  <div class="wrap">
   <Menu/>
   <Content/>
  </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
export default {
components: {
  Header,
  Menu,
  Content
}

}
</script>

<style scoped>
h1 {
  color: #03a9f4;
}
.wrap {
  display: flex;
}
</style>
