 let todos =[{"content":"hello zero","id":0},{"content":"hello one","id":1},{"content":"hello two","id":2},{"content":"hello three","id":3}]; 
 export class Store{
    get(){
        return todos;
    }
    set(newTodos){
        todos = newTodos;
    }
    delete(id){
        const newTodos = todos.filter(todo=>todo.id!==id);
        todos = newTodos;
    }
    post(todo){
        todos = [...todos,todo];
    }
}