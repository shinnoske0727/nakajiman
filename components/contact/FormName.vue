<template lang="pug">
  - path = "~/assets/img/contact/"
  .form-name
    label.label(for="name")
      img(src=`${path}name.svg` alt="NAME")
    input.input(type="text" v-model="formName" id="name" name="name" autocomplete="name" placeholder="お名前をご入力ください" required @focus="isFocus(true)" @blur="isFocus(false)")
    .bar(:data-is-focus="isFocused")
</template>

<script>
export default {
    components: {
        name: 'formName'
    },
    data() {
        return {
            formName: '',
            isFocused: false
        }
    },
    watch: {
        formName: function(newValue) {
            this.$emit('update', newValue)
        }
    },
    methods: {
        isFocus(bool) {
            this.isFocused = bool
        }
    }
}
</script>

<style lang="stylus" scoped>
  .form-name
    margin-bottom 52px
    +sp-layout()
      margin-bottom: 46px

  .label
    display: block
    margin-bottom: 12px
    +sp-layout()
      margin-bottom: 6px
      line-height: 0
      height: 8px
      & > img
        height: 100%

  .input
    resetInput()

  .input
    display: block
    size: 100% auto
    margin-bottom: 14px
    font-size 14px
    +ks-placeholder()
      color: rgba(0, 0, 0, 0.5)
    +sp-layout()
      width: 133%
      font-size: 16px
      transform: scale(0.75)
      transform-origin: left bottom

  .bar
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    &[data-is-focus="true"]
      border-bottom: 1px solid rgba(0, 0, 0, 1);

</style>
