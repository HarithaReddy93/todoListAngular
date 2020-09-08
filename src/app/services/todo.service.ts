import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { todoform } from '../models/todoform';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list;
  listId;
  todoColl:AngularFirestoreCollection<todoform>
  todoDoc:AngularFirestoreDocument<todoform>
  constructor(private db:AngularFirestore) {
    this.todoColl=this.db.collection('todoList')
    
   }
   getdata(){
    return this.db.collection('todoList');
   }
   
addData(list:todoform){
    const docId=this.db.createId();
  console.log('list added');
  // this.listId=docId;
  console.log(list)
  // this.todoColl.doc(docId).set(this.list );
   this.todoColl.add(list );
  }
delete(list:todoform){
  this.todoDoc=this.db.doc(`todoList/${list.id}`);
  this.todoDoc.delete();
}
update(list:todoform){
  console.log("update initiated")
  console.log(list.id)
  this.todoDoc =this.db.doc(`todoList/${list.id}`);
  this.todoDoc.update(list);
  
}
} // this.todoDoc =this.db.doc(`todoList/${this.listId}`);
// this.todoDoc.update(this.newlist);