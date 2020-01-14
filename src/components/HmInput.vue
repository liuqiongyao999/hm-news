<template>
  <div class="input_box">
    <input :type="type" class="hm-input" :placeholder="placeholder" :value="value" @input="handleInput" :class="[status]">
    <span class="tips" v-show="showTips">{{errMsg}}</span>
    <div class="loginbtn" @click="handleClick"><slot></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    rules: {
      type: RegExp
    },
    errMsg: {
      type: String
    }
  },
  computed: {
    showTips () {
      return this.status === 'error' && this.errMsg
    }
  },
  methods: {
    handleInput (e) {
      console.log(e.target.value)
      const { value } = e.target
      this.$emit('input', value)
      if (!this.rules) return
      if (this.rules.test(value)) {
        this.status = 'success'
      } else {
        this.status = 'error'
      }
    },
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
  .input_box {
    padding-bottom: 15px;
    position: relative;
    .hm-input {
      width: 100%;
      height: 38px;
      background-color: transparent;
      border-bottom: 2px solid #666;
      font-size: 18px;

      &.error {
        border-color: red;
      }
      &.success {
        border-color: green;
      }
    }
    .tips {
      color: red;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
