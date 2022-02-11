import {createWebHistory,createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import Registration from './components/Registration.vue';
import FeedBack from './components/FeedbackForm.vue';
import Parent from './components/Parent.vue';
import VeeValidate from './components/VeeValidate.vue';

const routes =[
    {
        name:'HelloWorld',
        path:'/Home',
        component:HelloWorld
    },
    {
        name:'Registration',
        path:'/Registration',
        component:Registration
    },
    {
        name:'FeedBack',
        path:'/FeedBacks',
        component:FeedBack
    },
    {
        name:'Parent',
        path:'/Parent',
        component:Parent
    },
    {
        name:'VeeValidate',
        path:'/VeeValidate',
        component:VeeValidate
    }
];
const router= createRouter({
    history: createWebHistory(),
    routes
});
export default router;