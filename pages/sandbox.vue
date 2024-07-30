<script>
export default {
    data() {
        return {
            message: "Hello world from sandbox",
            counter: 0,
            url: "https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        };
    },
};
</script>
<template>
    <div>
        <HeaderThree />
        <div>{{ message }}</div>
        <div>{{ counter }}</div>
        <button @click="counter++">increment</button>
        <button @click="counter--">decrement</button>
        <button @click="counter = 10">set to 10</button>
        <button @click="counter = 0">reset</button>
        <img :src="url" alt="" />
    </div>
</template>