import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mol-login-form',
  // standalone: true,
  // imports: [],
  templateUrl: './mol-login-form.component.html',
  styleUrl: './mol-login-form.component.scss'
})
export class MolLoginFormComponent {
  @Output() login = new EventEmitter<{email: string; password:string}>();

  loginForm: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  
      // console.log(this.loginForm);
      // console.log(this.loginForm.get('username')?.disabled);
    }
  
    onSubmit(): void {
      if (this.loginForm.valid) {
        this.login.emit(this.loginForm.value);
      }
    }
  
    get emailControl(): FormControl {
      return this.loginForm.get('email') as FormControl;
    }
    
    get passwordControl(): FormControl {
      return this.loginForm.get('password') as FormControl;
    }
}
