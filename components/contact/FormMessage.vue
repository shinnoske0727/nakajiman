<template lang="pug">
  - path = "~/assets/img/contact/"
  .form-message
    label.label(for="message")
      img(src=`${path}message.svg` alt="message")
    textarea.input(@input="textareaResize" maxlength="1000" id="message" name="message" v-model="message" ref="textarea" placeholder="お問い合わせ内容をご入力ください" required @focus="isFocus(true)" @blur="isFocus(false)")
    .bar(:data-is-focus="isFocused")
</template>

<script>
import _ from 'lodash'
import UA from '@/assets/helper/getUA'
export default {
    components: {
        name: 'formMessage'
    },
    data() {
        return {
            message: '',
            isFocused: false
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
            const maxHeight = UA.isPC ? 84 : 72
            const height = _.clamp(
                this.$refs.textarea.scrollHeight,
                0,
                maxHeight
            )
            this.$refs.textarea.style.minHeight = height + 'px'
        },
        isFocus(bool) {
            this.isFocused = bool
        }
    }
}
</script>

<style lang="stylus" scoped>
  .label
    display: block
    margin-bottom: 15px
    +sp-layout()
      margin-bottom: 6px
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
      width: 133%
      font-size: 16px
      transform: scale(0.75)
      transform-origin: left bottom

  .bar
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    &[data-is-focus="true"]
      border-bottom: 1px solid rgba(0, 0, 0, 1);

</style>
