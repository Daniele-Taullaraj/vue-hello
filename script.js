const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue ',
            immagine: './img/01.webp'
        }
    }
}).mount('#app')