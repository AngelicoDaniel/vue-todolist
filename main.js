var app = new Vue({
    el: '#root',
    data: {
      newTodo: [],
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
      ],
      doneTodo: [],
    },
    beforeUpdate() {
        this.todoList.forEach( (elem, index) =>{
            if (elem.done == true){
                this.doneTodo.push( elem );
                this.todoList.splice( index ,1 )
            }
        } );
    },

    methods: {
        remove(index){ 
            this.todoList.splice( index, 1 );
        },
        
        todoCompleted(elem, index){
            if( elem.done == true){
                elem.done = false;
            } else {
                elem.done = true;
            }
        },
        addTodo(){
            if (this.newTodo.trim() != '') {
                this.todoList.push({
                    text: this.newTodo,
                    done: false,
                });
                this.newTodo='';
            }
        },
    }
  })