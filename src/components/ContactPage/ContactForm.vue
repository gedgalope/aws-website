<template>
  <v-container class="contact-form">
    <v-form ref="form" v-model="formValid">
      <v-row justify="center">
        <v-col align="center" cols="12" sm="12" md="5" lg="5" xl="5">
          <v-text-field
            v-model="name"
            :rules="rules.nameRules"
            name="name"
            label="Name:"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="hidden-xs-only" cols="12" align="center" sm="12" md="5" lg="5" xl="5">
          <v-text-field v-model="contact" name="contact" label="Affiliation/Organization:" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset-xl="1" offset-lg="1" offset-md="1" sm="12" md="5" lg="5" xl="5">
          <v-text-field
            v-model="email"
            name="email"
            :rules="rules.emailRules"
            label="Email:"
            required
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="center" sm="12" md="10" lg="10" xl="10">
          <v-textarea
            v-model="message"
            outlined
            :rules="rules.messageRules"
            :no-resize="true"
            placeholder="Message:"
            label="Message:"
            required
            auto-grow
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col align="end" sm="12" md="5" lg="4" xl="3">
          <v-dialog :overlay="false" max-width="500px" transition="dialog-transition">
            <template v-slot:activator="{on}">
              <v-btn block v-on="on" :disabled="!formValid" color="primary" @click="submit()">Send</v-btn>
            </template>
            <!-- <v-alert dismissible :value="true">Email sent {{formValid}}</v-alert> -->
            <v-alert class=" mb-0" type="success" border="top" color-border="primary">Email sent</v-alert>
          </v-dialog>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      name: "",
      contact: "",
      email: "",
      message: "",
      formValid: false,
      rules: {
        nameRules: [
          v => !!v || "Name is required",
          v => (v && v.length <= 20) || "Name must be less than 20 characters"
        ],
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        messageRules: [v => !!v || "Message is required"]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
</style>