<script>
export default {
    data() {
        return {
            message: 'Hello world from sandbox',
            counter: 0,
        }
    }
}

</script>
<template>
    <div>
        <div>{{ message }}</div>
    <div>{{ counter }}</div>
    <button @click="counter++">increment</button>
    <button @click="counter--">decrement</button>
    <button @click="counter = 10">set to 10</button>
    <button @click="counter = 0">reset</button>
    </div>
</template>