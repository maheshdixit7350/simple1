import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

  studentDetails : any= [] ;

  constructor(private studentService: StudentService) {
    this.getStudentDetails();
  }
  register(registerForm:NgForm){
    this.studentService.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getStudentDetails(){
    this.studentService.getStudent().subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteStudent(student:any){
    this.studentService.deleteStudent(student.rollNo).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
       
      },
      (err) => {
        console.log(err);
      }
    );
  }

}



