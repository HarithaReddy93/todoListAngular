import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { todoform } from 'src/app/models/todoform';
import {map} from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  todolist:Observable<any>;
  todoColl:AngularFirestoreCollection<todoform>
  todoDoc:AngularFirestoreDocument<todoform>
  priority:string;
  priorities: string[] = ['Low', 'Medium', 'High'];
 
  taskname;
  Sdate:Date;
  Edate:Date;;
  myTextarea;
 private options = [
   { key: 'Events' },
   { key: 'Birthday'},
   { key: 'Meeting' },
   { key: 'Shopping' },
   { key: 'Study' },

 ];
 firstValue = 'Events';
 get SelectOptions() {
   return this.options.map(({key}) => key);
 }
newlist:todoform;
flag=false;
listId;



  constructor(private service:TodoService) { }

  ngOnInit(): void {
    this.todolist=this.service.getdata().snapshotChanges().pipe(map(
      data=>data.map(result=>{const id=result.payload.doc.id;
      let data =result.payload.doc.data() as todoform;
    return {id, ...data}
  })))
  }

  deleteList(list:todoform){
    console.log("delete called");
    this.service.delete(list);
    // this.todoDoc=this.db.doc(`todoList/${list.id}`);
    // this.todoDoc.delete();
  }
 updateList(list:todoform){
   this.flag=!this.flag;
   this.taskname=list.taskname;
   this.firstValue=list.category;
   this.Sdate=list.startDate;
   this.Edate=list.endDate;
   this.myTextarea=list.textArea;
   this.priority=list.priority;
   this.listId=list.id;
 }
 updateListfb(){
   this.flag=!this.flag;
   this.newlist ={
    taskname:this.taskname,
     category:this.firstValue,
     startDate:this.Sdate,
     endDate:this.Edate,
     textArea:this.myTextarea,
     priority:this.priority,
      id:this.listId
       }
       console.log(this.todolist)
  this.service.update(this.newlist);
  // this.todoDoc =this.db.doc(`todoList/${this.listId}`);
  // this.todoDoc.update(this.newlist);
  this.taskname="";
   this.firstValue="";
   this.Sdate=undefined;
   this.Edate=undefined;
   this.myTextarea="";
  this.priority="";


 }
}
