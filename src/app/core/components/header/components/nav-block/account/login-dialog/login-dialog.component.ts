import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserAuthService } from 'src/app/user/services/user-auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent  {

  formGroup = this.formBuilder.group({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login = new FormControl('');

  password = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private formBuilder: FormBuilder,
    private userAuthService: UserAuthService,
    private snackBar: MatSnackBar,
  ) { }



  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const login = <string> this.formGroup.get('login')?.value;
      const password = <string> this.formGroup.get('password')?.value;
      this.userAuthService.login({ login, password }).subscribe(
        () => this.dialogRef.close(),
        () => this.snackBar.open('Неудачная попытка входа', undefined, { duration: 2000 }),
      );
    }
  }

  canSubmit() {
    return this.formGroup.valid;
  }
}
