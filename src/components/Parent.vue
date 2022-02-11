<template>
<div class="card">
<h2>Reusing the component</h2>
<ul>
    <li v-for="item in users" :key="item.name">
        <Child :data="item" />
    </li>
</ul>
</div>
</template>

<script>
import Child from './Child.vue'
export default ({
    name: 'Parent',
    component: {
        Child
    },
    data() {
        return {
            users: [{
                    name: 'atish1',
                    email: 'atish1@gmail.com'
                },
                {
                    name: 'atish2',
                    email: 'atish2@gmail.com'
                },
                {
                    name: 'atish3',
                    email: 'atish3@gmail.com'
                },
                {
                    name: 'atish4',
                    email: 'atish4@gmail.com'
                }
            ]
        }
    }
})
</script>

<style scoped>

</style>
