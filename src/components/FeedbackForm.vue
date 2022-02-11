<template>
   <div class="card">
       <div class="card-header text-center">Registration Form</div>
       <div class="card-body">
           <form>
               <div class="form-row">
                   <div class="form-group col-md-6">
                       <label>First Name</label>
                       <input type="text" class="form-control"
                       v-model.trim="$v.firstname.$model" :class="{
                           'is-invalid' :$v.firstname.$error, 'is-valid':!$v.firstname.$invalid}">
                           <div class="valid-feedback">Your First name is Valid</div>
                           <div class="invalid-feedback">
                               <span v-if="!$v.firstname.required">First name is required</span>
                               <span v-if="!$v.firstname.minLength">First name must have at least {{$v.firstname.$params.minLength.min}} Letters.</span>
                               <span v-if="!$v.firstname.maxLength">First name must have at most {{$v.firstname.$params.maxLength.max}} Letters.</span>
                           </div>
                   </div>
                   <div class="form-group col-md-6">
                       <label>Last Name</label>
                       <input type="text" class="form-control"
                       v-model.trim="$v.lastname.$model" :class="{
                           'is-invalid' :$v.lastname.$error, 'is-valid':!$v.lastname.$invalid}">
                           <div class="valid-feedback">Your last name is Valid</div>
                           <div class="invalid-feedback">
                               <span v-if="!$v.lastname.required">last name is required</span>
                               <span v-if="!$v.lastname.minLength">last name must have at least {{$v.lastname.$params.minLength.min}} Letters.</span>
                               <span v-if="!$v.lastname.maxLength">last name must have at most {{$v.lastname.$params.maxLength.max}} Letters.</span>
                           </div>
                   </div>
               </div>
               <div class="form-group ">
                       <label>Age</label>
                       <input type="text" class="form-control"
                       v-model.number.lazy="$v.age.$model" :class="{
                           'is-invalid' :$v.age.$error, 'is-valid':!$v.age.$invalid}">
                           <div class="valid-feedback">Your age is Valid</div>
                           <div class="invalid-feedback">
                               <span v-if="!$v.age.between">must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</span>
                                </div>
                   </div>
           </form>
       </div>
    </div> 
</template>
<script> 
import {required,minLength,maxLength,between} from '@vuelidate/validators'  
export default{
    name:'FeedbackForm',
    data() {
        return{
            firstname:'',
            lastname:'',
            age:0
        }
    },
    validations:{
        firstname:{
            required,minLength:minLength(3),maxLength:maxLength(10)
        },
        lastname:{
            required,minLength:minLength(3),maxLength:maxLength(10)
        },
        age:{
            between:between(20,30)
        }
    }
}
</script>
<style scoped>

</style>