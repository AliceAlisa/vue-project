<template>
  <div class="home">
    <input v-model.number="operand1" type="number" />
    <input v-model.number="operand2" @keyup="checkNull" type="number" />
    = {{ result }}
    <br />
    <br />
    <button
      v-for="(operand, idx) in operands"
      :key="idx"
      :disabled="(operand === '/' || operand === 'int /') && isDisabled"
      @click="calculate(operand)"
    >
      {{ operand }}
    </button>
    <br />
    <br />
    <input type="checkbox" v-model="toggle" /> Отобразить экранную клавиатуру
    <br />
    <div class="keyBoard" v-if="toggle">
      <button
        v-for="keyItem in keyboard"
        :key="keyItem"
        @click="keyboardClick(keyItem)"
      >
        {{ keyItem }}
      </button>
      <br />
      <input type="radio" id="one" value="operand1" v-model="picked" />
      <label for="one">Операнд 1</label>
      <br />
      <input type="radio" id="two" value="operand2" v-model="picked" />
      <label for="two">Операнд 2</label>
      <p class="error" v-show="!picked">{{ error }}</p>
      <br />
    </div>
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
      operand1: [].join(""),
      operand2: [].join(""),
      operands: ["+", "-", "*", "/", "**", "int /"],
      result: 0,
      isDisabled: false,
      toggle: false,
      keyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "<<"],
      picked: "",
      error: "",
    };
  },
  methods: {
    checkNull() {
      if (this.operand2 === 0 || this.operand2 == "" || this.operand2 == "0") {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    },
    calculate(operation = "+") {
      switch (operation) {
        case "+":
          this.addition();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.multi();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.exponentiation();
          break;
        case "int /":
          this.integerDivision();
          break;
      }
    },
    addition() {
      this.result = Number(this.operand1) + Number(this.operand2);
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
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

    integerDivision() {
      this.result =
        (this.operand1 - (this.operand1 % this.operand2)) / this.operand2;
    },

    clearInput() {
      this.operand1 = [].join("");
      this.operand2 = [].join("");
    },

    keyboardClick(item) {
      if (typeof item == "number") {
        if (this.picked == "operand1") {
          this.operand1 += String(item);
        } else if (this.picked == "operand2") {
          this.operand2 += String(item);
          this.checkNull();
        } else {
          this.error = "Выберите операнд!";
        }
      } else {
        this.clearOperand();
      }
    },

    clearOperand() {
      if (this.picked == "operand1") {
        this.operand1 = String(this.operand1).split("").slice(0, -1);
        this.operand1 = this.operand1.join("");
      } else if (this.picked == "operand2") {
        this.operand2 = String(this.operand2).split("").slice(0, -1);
        this.operand2 = this.operand2.join("");
        this.checkNull();
      } else {
        this.error = "Выберите операнд!";
        return;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.error {
  color: red;
}
</style>
