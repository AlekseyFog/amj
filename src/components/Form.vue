<template>
  <div class="callmodal">
    <h3 class="callmodal__header">
      Get a quote
    </h3>
    <form
       class="callmodal__form"
       @submit.prevent="sendEmail"
    >
      <label for="form__name">Your name</label>
      <input
         id="form__name"
         class="callmodal__form_item"
         type="text"
         placeholder="Your name"
         name="user_name"
      />
      <label for="form__phone">Contact number</label>
      <input
         id="form__phone"
         class="callmodal__form_item"
         type="tel"
         placeholder="phone number"
         name="user_phone"
      />
      <label for="form__email">Your email</label>
      <input
         id="form__email"
         class="callmodal__form_item"
         type="email"
         placeholder="email"
         name="user_email"
      />
      <div
         @click="successed__close"
      >
        <input
           class="callmodal__form_button"
           type="submit"
           value="SUBMIT"
        />
      </div>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'Form',

  methods: {
    successed__close() {
      const self = this;
      setTimeout(() => {
        self.$emit('show-success');
      }, 2000);
    },
    sendEmail: (e) => {
      emailjs.sendForm('service_27teysq', 'template_7prynpv', e.target, 'user_2oJCXZMyXTHf2NjVRB0pS');
    },
  },
};
</script>

<style scoped>
.callmodal {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #F8F9FA;
  border-radius: 10px;
  padding: 30px;
}
.callmodal__header{
  margin-bottom: 30px;
}
.callmodal__form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.callmodal__form_item{
  border-radius: 5px;
  border: 1px solid gray;
  padding: 5px 10px;
  width: 300px;
}
.callmodal__form_button{
  margin-top: 20px;
  width: 200px;
  border: none;
  padding: 5px;
  border-radius: 5px;
  background: #F6C13E;
}
</style>
