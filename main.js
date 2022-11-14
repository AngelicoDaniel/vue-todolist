var app = new Vue({
    el: '#root',
    data: {
      doneTodo: '',
      todoList: [
        {
            text: 'comprare il pane',
            done: false,
        },
        {
            text: 'comprare il latte',
            done: false,
        },
        {
            text: 'comprare l\'acqua',
            done: false,
        }
      ]
    },
    methods: {
        remove(index){
            this.todoList.splice( index, 1 );
        },
    }
  })