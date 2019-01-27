<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/contact/"
  section.contact
    h1.title
      img(src=`${cmnPath}txt_contact.svg` alt="CONTACT")
    .inner
      form(data-netlify="true" data-netlify-honeypot="bot-field" hidden name="contact")
        input(type="text" name="name")
        input(type="email" name="mail")
        textarea(name="message")
      form.form
        .name-box
          label.name(for="name")
            img(src=`${path}name.svg` alt="NAME")
          input.input-name(type="text" v-model="name" id="name" name="name" autocomplete="name" placeholder="お名前をご入力ください" required)
          .bar
        .mail-box
          label.mail(for="mail")
            img(src=`${path}email-address.svg` alt="EMAIL ADDRESS")
          input.input-mail(type="email" v-model="mail" id="mail" name="mail" autocomplete="email" placeholder="ご連絡先メールアドレスをご入力ください" required)
          .bar
        .message-box
          label.message(for="message")
            img(src=`${path}message.svg` alt="message")
          textarea.input-message(@input="textareaResize" maxlength="1000" id="message" name="message" v-model="message" ref="textarea" placeholder="お問い合わせの詳細を1,000文字以内でご入力ください" required)
          .bar
        button.button(:data-can-submit="isFillAllInput" :disabled="!isFillAllInput" @submit.prevent="sendMessage")
          img(src=`${path}submit.svg` alt="SUBMIT")

</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
    components: {
        name: 'contact'
    },
    data() {
        return {
            name: '',
            mail: '',
            message: '',
            isSubmit: false
        }
    },
    computed: {
        isFillAllInput() {
            return _.every([this.name, this.mail, this.message])
        }
    },
    mounted() {
        this.textareaResize()
    },
    methods: {
        textareaResize() {
            this.$refs.textarea.style.minHeight =
                this.$refs.textarea.scrollHeight + 'px'
        },
        sendMessage() {
            const params = new URLSearchParams()
            params.append('form-name', 'contact')
            params.append('name', this.name)
            params.append('email', this.email)
            params.append('content', this.message)

            axios.post('/', params).then(response => {
                this.isSubmit = true
                console.log(response)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
  .contact
    max-width: $max-width
    margin: 0 auto
    padding-top: 32px
  .title
    size auto 23px
    margin 0 auto 88px
    line-height 0
    & > img
      size 100%
  .inner
    size 546px auto
    margin 0 auto

  .name-box,
  .mail-box
    margin-bottom 56px

  .message-box
    margin-bottom 149px

  .name,
  .mail,
  .message
    display: block
    margin-bottom: 15px

  .input-name,
  .input-mail
    resetInput()

  .input-message
    resetTextarea()

  .input-name,
  .input-mail,
  .input-message
    display: block
    size: 100% auto
    margin-bottom: 14px
    font-size 14px
    +ks-placeholder()
      color: rgba(0, 0, 0, 0.5)
  .bar
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .input-message
    height 17px

  .button
    display block
    size 200px 40px
    margin: 0 auto
    background-color: rgba(0, 0, 0, 0.3);
    &[data-can-submit="true"]
      background-color: $bg-black;
</style>
