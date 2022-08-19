<template>
  <div class="app">
    <illustration-form
      @add="addIllustration"
    />
    <illustrations-list
      :illustrations="illustrations"
      @remove="removeIllustration"
    /> 
  </div>
</template>
<script>
  import IllustrationForm from "@/components/IllustrationForm";
  import IllustrationsList from "@/components/IllustrationsList";
  export default {
    components: {
      IllustrationsList, IllustrationForm
    },
    data() {
      return {
        illustrations: [
          { id: 1, title: "Masha eating the Baby Bear's porridge", description: 'An A3 illustration made for the picture book', media: 'Watercolours', price: '$140'},
          { id: 2, title: "Easter Bunny answering children's letters", description: 'An A4 illustration to be used in a post card', media: 'Watercolour', price: '$90' },
          { id: 3, title: "The girl on a ball is helping the little bear to find his dad", description: 'An A3 illustration made for a future picture book', media: 'Acrylics', price: '$140' }
        ],
      }
    }, 
    methods: {
      addIllustration(illustration) {
        this.illustrations.push(illustration);
      },
      removeIllustration(illustration) {
        this.illustrations = this.illustrations.filter( item => item.id !== illustration.id);
      }
    },
  }
</script>
<style>
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    max-width: 1440px;
    width: 100%;
    padding: 1rem;
  }
</style>