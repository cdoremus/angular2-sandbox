import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dyna-form',
  template: `
  <h3>Please Enter Questions</h3>
  <form [formGroup]="questionForm" (ngSubmit)="save(questionForm)">
    <div formArrayName="questions"> <!-- setup in initForm() -->
      <div *ngFor="let question of questionForm.controls.questions.controls; let i=index">
        <fieldset [formGroupName]="i">
          <label>Question {{i + 1}}</label>
          <input type="text" formControlName="question"/>
        </fieldset>
      </div>
    </div>
    <button (click)="addQuestion()" >Add Question</button>
    <button type="submit">Submit</button>

    <div class="formValues">
        <div>Question Form Details</div>
        <pre>Is questionForm valid?: {{questionForm.valid | json}}</pre>
        <pre>form value: <br>{{questionForm.value | json}}</pre>
    </div>
  </form>
  `,
  styles: [`
    h3 {
      font-weight: bold;
      font-size: 22px;
    }
    label {
      font-weight: bold;
      font-size: 16px;
    }
    fieldset {
      width: 300px;
      margin: auto;
    }
    .formValues {
      border: 2px solid black;
      margin: 20px auto;
      padding: 5px;
      width: 300px;

    }
  `
  ]
})
export class QuestionFormComponent implements OnInit {
  public questionForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
      this.initForm();
   }

   initForm() {
     this.questionForm = this.fb.group({
       // 'questions' is the formArrayName reference
       questions: this.fb.array([
         this.initQuestion()
         ])
     });
   }

   initQuestion(question: string = '') {
     return this.fb.group({
        question: [question, Validators.required]
     });
   }

   addQuestion() {
     const questionControl = this.getQuestionControl();
     questionControl.push(this.initQuestion());
   }

   deleteQuestion(index: number) {
     const questionControl = this.getQuestionControl();
     questionControl.removeAt(index);
   }

   updateQuestion(index: number) {
     const questionControl = this.getQuestionControl();
     questionControl.removeAt(index);
   }

   private getQuestionControl() {
     return <FormArray>this.questionForm.controls['questions'];
   }

   save(formModel) {
     console.log('Question Form: ', formModel);
     console.log('Questions array: ', formModel.value.questions);
   }
}



