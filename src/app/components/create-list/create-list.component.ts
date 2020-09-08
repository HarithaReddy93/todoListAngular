import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { todoform } from 'src/app/models/todoform';
import {map} from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  @ViewChild('myForm') formValues; 
  todolist:Observable<any>;
  todoColl:AngularFirestoreCollection<todoform>
  todoDoc:AngularFirestoreDocument<todoform>
  flag=false;
  // listId;
  // priority:string;
  priorities: string[] = ['Low', 'Medium', 'High'];
  // taskname;
  // Sdate:Date;
  // Edate:Date;;
  // myTextarea;
  // category;
  categories:string[];
//  private options = [
//    { key: 'Events' },
//    { key: 'Birthday'},
//    { key: 'Meeting' },
//    { key: 'Shopping' },
//    { key: 'Study' },

//  ];
//  firstValue = 'Events';
//  get SelectOptions() {
//    return this.options.map(({key}) => key);
//  }
// newlist:todoform;





  constructor(private db:AngularFirestore, private service:TodoService){

    // this.todolist=this.db.collection('todoList').valueChanges().subscribe(result=>{
    // console.log(result);
    // this.todolist=result;})

      // this.todolist=this.db.collection('todoList').valueChanges();

    // this.todoColl=this.db.collection('todoList')
  //   this.todolist=this.db.collection('todoList').snapshotChanges().pipe(map(
  //     data=>data.map(result=>{const id=result.payload.doc.id;
  //     let data =result.payload.doc.data() as todoform;
  //   return {id, ...data}
  // })))
  }
  ngOnInit(): void {
  
  this.categories=[
    'Birthday',
    'Shopping',
    'Study',
    'Meeting'
  ]
  };
  submit(myForm){
    console.log(myForm);
   this.service.addData(myForm);
   this.formValues.resetForm();
  }

  // addList(){
  //   // const docId=this.db.createId();
  //  this.newlist={
  //    taskname:this.taskname,
  //    category:this.category,
  //    startDate:this.Sdate,
  //    endDate:this.Edate,
  //    textArea:this.myTextarea,
  //    priority:this.priority,
  //   //  id:docId,
  //  }
   
  
  //  console.log("addition called")
  //  this.service.addData(this.newlist);
  // //  this.todoColl.doc(docId).set(this.newlist );
  //  console.log(this.newlist)

  //  this.taskname="";
  //  this.category="";
  //  this.Sdate=undefined;
  //  this.Edate=undefined;
  //  this.myTextarea="";
  // this.priority="";
  // this.flag=!this.flag;
   
  // }
  
//   deleteList(list:todoform){
//     console.log("delete called");
//     this.service.delete(list);
//     // this.todoDoc=this.db.doc(`todoList/${list.id}`);
//     // this.todoDoc.delete();
//   }
//  updateList(list:todoform){
//    this.flag=!this.flag;
//    this.taskname=list.taskname;
//    this.firstValue=list.category;
//    this.Sdate=list.startDate;
//    this.Edate=list.endDate;
//    this.myTextarea=list.textArea;
//    this.priority=list.priority;
//    this.listId=list.id;
//  }
//  updateListfb(){
//    this.flag=!this.flag;
//    this.newlist ={
//     taskname:this.taskname,
//      category:this.firstValue,
//      startDate:this.Sdate,
//      endDate:this.Edate,
//      textArea:this.myTextarea,
//      priority:this.priority,
//        }
//   this.service.update(this.newlist);
//   // this.todoDoc =this.db.doc(`todoList/${this.listId}`);
//   // this.todoDoc.update(this.newlist);
//   this.taskname="";
//    this.firstValue="";
//    this.Sdate=undefined;
//    this.Edate=undefined;
//    this.myTextarea="";
//   this.priority="";


//  }

}
