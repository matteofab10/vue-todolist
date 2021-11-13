const app = new Vue ({

  el: '#app',

  data: {
    itemList: [
      {
      text: "Acquistare le scarpe nuove",
      done: false,
    },
    {
      text: "Portare il giubbotto in lavanderia",
      done: false,
    },
    {
      text: "Fare la spesa",
      done: false,
    }
    ],

    message:"",
    error: false
  },

  methods: {
    removeItem(index){
      this.itemList.splice(index,1);
    },

    addItem(){
      if(this.message.length < 3){
        this.error = true;
      } 
      else
      {
        newItem = {
        text: this.message,
        done: false,
        }
      this.itemList.push(newItem);
      }
      this.message ="";
    },
  },
})