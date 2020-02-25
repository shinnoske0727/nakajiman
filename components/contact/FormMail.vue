<template lang="pug">
  - path = "~/assets/img/contact/"
  .form-mail
    label.label(for="mail")
      img(src=`${path}email-address.svg` alt="EMAIL ADDRESS")
    input.input(type="email" v-model="mail" id="mail" name="mail" autocomplete="email" placeholder="メールアドレスをご入力ください" required @focus="isFocus(true)" @blur="isFocus(false)")
    .bar(:data-is-focus="isFocused")
</template>

<script>
export default {
    components: {
        name: 'formMail'
    },
    data() {
        return {
            mail: '',
            isFocused: false
        }
    },
    watch: {
        mail: function(newValue) {
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
  .form-mail
    margin-bottom 52px
    +sp-layout()
      margin-bottom: 48px

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
