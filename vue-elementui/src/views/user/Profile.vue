<template>
  <!--所有的元素，不能直接在template下 加一个div就好了-->
  <div>
    <h1>个人信息</h1>
    {{id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "Profile",
  beforeRouteEnter:(to, from, next) => {
    console.log("进入路由之前");
    next(vm => {
      vm.getData()
    });
  },
  beforeRouteLeave:(to, from, next) => {
    console.log("进入路由之后");
    next();
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: 'http://localhost:8080/static/mock/data.json'
      }).then(response => (
        console.log(response)
      ));
    },
  }
}
</script>
