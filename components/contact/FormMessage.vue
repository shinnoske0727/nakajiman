<template lang="pug">
  - path = "~/assets/img/contact/"
  .form-message
    label.label(for="message")
      img(src=`${path}message.svg` alt="message")
    textarea.input(@input="textareaResize" maxlength="1000" id="message" name="message" v-model="message" ref="textarea" placeholder="お問い合わせの詳細を1,000文字以内でご入力ください" required)
    .bar
</template>

<script>
export default {
    components: {
        name: 'formMessage'
    },
    data() {
        return {
            message: ''
        }
    },
    watch: {
        message: function(newValue) {
            this.$emit('update', newValue)
        }
    },
    mounted() {
        this.textareaResize()
    },
    methods: {
        textareaResize() {
            this.$refs.textarea.style.minHeight =
                this.$refs.textarea.scrollHeight + 'px'
        }
    }
}
</script>

<style lang="stylus" scoped>
  .form-message
    margin-bottom 149px
    +sp-layout()
      margin-bottom: 116px


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
    resetTextarea()

  .input
    display: block
    size: 100% 17px
    margin-bottom: 14px
    font-size 14px
    +ks-placeholder()
      color: rgba(0, 0, 0, 0.5)
    +sp-layout()
      font-size: 12px

  .bar
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

</style>
