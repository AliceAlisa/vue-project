<template>
  <div class="home">
    <input v-model.number="operand1" type="number" />
    <input v-model.number="operand2" @keyup="checkNull" type="number" />
    = {{ result }}
    <br />
    <br />
    <button @click="result = operand1 + operand2">+</button>
    <button @click="minus(operand1, operand2)">-</button>
    <button @click="multi">*</button>
    <button @click="divide" :disabled="isDisabled">/</button>
    <br />
    <button @click="exponentiation">exponentiation</button>
    <button @click="integerDivision(operand1, operand2)" :disabled="isDisabled">
      integer /
    </button>
    <!--<h1>{{ counter }}</h1> @mouseover="checkNull"-->
    <!-- <button v-on:click="counter++">Click</button>
    <button @mouseover="mouseOverMethod">Click</button>
    <input @keyup="keyUpMethod" /> -->
    <!--  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      isDisabled: false,
    };
  },
  methods: {
    checkNull() {
      if (this.operand2 == 0) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },

    minus(op1, op2) {
      this.result = op1 - op2;
    },

    multi() {
      this.result = this.operand1 * this.operand2;
    },

    divide() {
      this.result = this.operand1 / this.operand2;
    },

    exponentiation() {
      this.result = this.operand1 ** this.operand2;
    },

    integerDivision(op1, op2) {
      this.result = (op1 - (op1 % op2)) / op2;
    },
    /*keyUpMethod() {
      console.log("keyup");
    },
    mouseOverMethod() {
      console.log("mouse");
    },*/
  },
};
</script>
