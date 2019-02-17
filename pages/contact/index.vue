<template lang="pug">
  - cmnPath = "~/assets/img/common/"
  - path = "~/assets/img/contact/"
  section.contact
    h1.title
      img(src=`${cmnPath}txt_contact.svg` alt="CONTACT")
    .inner
      form(data-netlify="true" data-netlify-honeypot="bot-field" name="contact"   @submit.prevent="").form
        input(type="hidden" name="form-name" value="contact")
        form-name(@update="updateName")
        form-mail(@update="updateMail")
        form-message(@update="updateMessage")
        button.button(:data-can-submit="isFillAllInput" :disabled="!isFillAllInput" @click="sendMessage")
          img(src=`${path}submit.svg` alt="SUBMIT")

</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import FormName from '@/components/contact/FormName'
import FormMail from '@/components/contact/FormMail'
import FormMessage from '@/components/contact/FormMessage'

export default {
    components: {
        name: 'contact',
        FormMessage,
        FormMail,
        FormName
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
    methods: {
        updateName(name) {
            this.name = name
        },
        updateMail(mail) {
            this.mail = mail
        },
        updateMessage(msg) {
            this.message = msg
        },
        sendMessage() {
            const params = new URLSearchParams()
            params.append('form-name', 'contact')
            params.append('name', this.name)
            params.append('email', this.email)
            params.append('message', this.message)

            axios
                .post('/', params)
                .then(response => {
                    this.isSubmit = true
                    this.$router.push('/contact/complete/')
                })
                .catch(err => {
                    throw new Error(err)
                })
        }
    }
}
</script>

<style lang="stylus" scoped>
  .contact
    max-width: $max-width
    margin: 0 auto
    padding-top: $title-padding-top
    +sp-layout()
      max-width: $max-width-sp
      padding-top: $title-padding-top-sp;
      overflow: hidden
  .title
    size auto 23px
    margin 0 auto 88px
    line-height 0
    & > img
      size 100%
    +sp-layout()
      size auto 16px
      margin 0 auto 84px
  .inner
    size 546px auto
    margin 0 auto
    +sp-layout()
      size 100% auto

  .name-box,
  .mail-box
    margin-bottom 56px
    +sp-layout()
      margin-bottom: 42px

  .message-box
    margin-bottom 149px
    +sp-layout()
      margin-bottom: 116px

  .name,
  .mail,
  .message
    display: block
    margin-bottom: 15px
    +sp-layout()
      margin-bottom: 11px
      line-height: 0
      height: 8px
      & > img
        height: 100%

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
    +sp-layout()
      font-size: 12px

  .bar
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  .input-message
    height 17px

  .button
    absolute top 576px left 50%
    display block
    size 200px 40px
    margin: 0 auto
    background-color: rgba(0, 0, 0, 0.3);
    transform: translateX(-50%)
    &[data-can-submit="true"]
      background-color: $bg-black;
    +sp-layout()
      absolute top 474px left 50%
      size 152px 36px
      & > img
        height: 10px
</style>
