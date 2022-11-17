<template>
    <section>
        <div class="text-container">
            <h4 :class="textColorFromMode">{{message}}</h4>
        </div>
        <div class="image-container">
            <img :src="imageFromMode" alt="bot-image">
        </div>
    </section>
</template>

<script>
export default {
  name: 'BotDialog',
  props: {
    message: String,
    mode: String
  },
  methods: { },
  computed: {
    textColorFromMode() {
        if(this.mode == "happy") {
            return 'green-text';
        } else if(this.mode == "angry") {
            return 'red-text';
        } else {
            return '';
        }
    },
    imageFromMode() {
        if(this.mode == "happy") {
            return require('../assets/happy-bot.png');
        }else if(this.mode == "angry") {
            return require('../assets/angry-bot.png');
        } else {
            return require('../assets/normal-bot.png');
        }
    }
  }
}
</script>

<style scoped>
section {
    position: fixed;
    bottom: 30px;
    width: 90%;
    height: 20%;

    display: flex;
    flex-direction: row;
    align-items: center;

    border: 3px solid #ddeeff;
    border-radius: 10px;
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-right: 3px solid #ddeeff;
    height: 100%;
}

h4 {
    font-family: "PressStart2P", Helvetica, Arial, sans-serif;
    margin: 10px;
}

.green-text {
    color: #23c723;
}

.red-text {
    color: #ab1d1d;
}

.image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    height: 100%;
}

img {
    width: 100px;
    height: 100px;
}

@media (max-width: 600px) {
    .text-container {
        width: 70%;
    }

    h4 {
        font-size: 12px;
    }

    .image-container {
        width: 30%;
    }

    img {
        width: 80px;
        height: 80px;
    }
}

@media (min-width: 601px) {
    .text-container {
        width: 80%;
    }

    h4 {
        font-size: 16px;
    }

    .image-container {
        width: 20%;
    }

    img {
        width: 120px;
        height: 120px;
    }
}

</style>