<template>
 <div class="card m-3">
    <h5 class="card-header">Vue 3 + VeeValidate - Form Validation Example</h5>
     <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema">
            <div class="row">
            <div class="form-group col-md-6">
                        <label for="email">Your Email</label>
                    <Field name="email" type="email"  class="form-control" id="email" /> 
                        <ErrorMessage name="email" style="color:red"/>
            </div>
            <div class="form-group col-md-6">
                    <label for="password">Password</label>
                <Field name="password" type="password"  class="form-control" id="password" /> 
                    <ErrorMessage name="password" style="color:red"/>
            </div>
 
    </div>
    <div class="row">
        <div class="form-group col-md-4 ml-3">
                <Field name="file" type="file" id="file" class="form-control" />
                  <ErrorMessage name="file" style="color:red"/>
        </div>
        <div class="form-group col-md-4 ">
            <Field name="file2" type="file" id="file2" class="form-control" v-model="file1" />
                  <ErrorMessage name="file2" style="color:red"/>
                  <button v-on:click="showdata()">to show</button>
        </div>
        <div class="form-group col-md-4 ">
                        <button  class="btn btn-primary">Sign up</button>
        </div>
    </div>
        </Form>
     </div>
 </div>
</template>
<script> 
import { Field, Form, ErrorMessage,   } from 'vee-validate';
import * as Yup from "yup";
export default({
name:"VeeValidate",
  components: {
    Field,
    Form,
    ErrorMessage,
       
  },
  data(){
      return{
          file2:'',
      }
  },
  methods:{
      showdata(){
          this.file2 = event.currentTarget.files[0];
          console.log(this.file2);
      }
  },
  setup(){
      const schema = Yup.object().shape({
        email: Yup.string().email().required("email address is required."),
        password: Yup.string().min(5,"minimum 5 words must enter").required("password is Required."),
        file:Yup.mixed().required("choose the file"),
        file2:Yup.mixed().required("choose the file 2"),
    });
      function onSubmit(values) {
          console.log(JSON.stringify(values, null, 2));
      }
      return {
      schema,
      onSubmit,
    };
  },
});
 
</script>
<style scoped>

</style>
