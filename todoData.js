 let todos =[{"content":"hello zero","id":0},{"content":"hello one","id":1},{"content":"hello two","id":2},{"content":"hello three","id":3}]; 
 export class Store{
    get(){
        return todos;
    }
    set(newTodos){
        todos = newTodos;
    }
    delete(id){
        todos = todos.filter(todo=>todo.id!==id);
    }
    post(todo){
        todos = [...todos,todo];
    }
}