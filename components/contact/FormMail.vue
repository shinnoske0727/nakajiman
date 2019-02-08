<template lang="pug">
  - path = "~/assets/img/contact/"
  .form-mail
    label.label(for="mail")
      img(src=`${path}email-address.svg` alt="EMAIL ADDRESS")
    input.input(type="email" v-model="mail" id="mail" name="mail" autocomplete="email" placeholder="ご連絡先メールアドレスをご入力ください" required)
    .bar
</template>

<script>
export default {
    components: {
        name: 'formMail'
    },
    data() {
        return {
            mail: ''
        }
    },
    watch: {
        mail: function(newValue) {
            this.$emit('update', newValue)
        }
    }
}
</script>

<style lang="stylus" scoped>
  .form-mail
    margin-bottom 56px

  .label
    display: block
    margin-bottom: 15px
    +sp-layout()
      margin-bottom: 11px
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
      font-size: 12px

  .bar
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

</style>
