import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

//Importamos el router para movernos al dashboard
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){}

  onLogin(credentials: { email: string; password: string }): void {
    // this.router.navigate(['/dashboard']);

    this.authService.login(credentials).subscribe({
      next: (res) => {
        if(this.authService.userVerify(res)){
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
    
    // console.log(credentials);
  }
}
