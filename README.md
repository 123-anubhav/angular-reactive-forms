# angular-reactive-forms
angular-reactive-forms

# Angular 18 Reactive Forms Validation Example

## Overview
This project demonstrates how to implement **Reactive Forms** in **Angular 18** with built-in validation using `FormGroup`, `FormControl`, and `Validators`.

## Features
✅ Implements **Reactive Forms** in Angular 18.  
✅ Provides **form validation** for required fields, minimum length, and valid email format.  
✅ Uses **Bootstrap 3.4.1** for responsive UI design.  
✅ Simplifies form control access using a getter function `f()`.  
✅ Displays validation error messages dynamically.  
✅ Prevents form submission if validation fails.  

## Technologies Used
- **Angular 18**
- **Reactive Forms Module**
- **Bootstrap 3.4.1**
- **HTML & CSS**

---

## Installation & Setup
### 1. Clone the Repository
```sh
 git clone https://github.com/your-repo/angular-reactive-forms.git
 cd angular-reactive-forms
```

### 2. Install Dependencies
```sh
 npm install
```

### 3. Run the Application
```sh
 ng serve
```
The application will be available at:  
👉 `http://localhost:4200/`

---

## Code Explanation

### **1. HTML - Form Template (`app.component.html`)**
```html
<form [formGroup]="form" (ngSubmit)="submit()">
  <div class="form-group">
    <label for="name">Name</label>
    <input formControlName="name" id="name" type="text" class="form-control">
    <div *ngIf="f['name'].touched && f['name'].invalid" class="alert alert-danger">
      <div *ngIf="f['name'].errors?.['required']">Name is required.</div>
      <div *ngIf="f['name'].errors?.['minlength']">Name should be at least 3 characters.</div>
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input formControlName="email" id="email" type="text" class="form-control">
    <div *ngIf="f['email'].touched && f['email'].invalid" class="alert alert-danger">
      <div *ngIf="f['email'].errors?.['required']">Email is required.</div>
      <div *ngIf="f['email'].errors?.['email']">Please enter a valid email address.</div>
    </div>
  </div>

  <button class="btn btn-primary" [disabled]="form.invalid" type="submit">Submit</button>
</form>
```

### **2. TypeScript - Component (`app.component.ts`)**
```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive Forms in Angular';
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    alert("Form submitted successfully! Check the console for details.");
  }
}
```

### **3. CSS - Styling (`app.component.css`)**
```css
.form-group {
  margin-bottom: 15px;
}
.alert-danger {
  color: red;
  font-size: 14px;
}
```

---

## How Validation Works
1. **Name Field:**
   - Required ✅
   - Minimum Length: 3 characters ✅
   - Displays appropriate error messages.
2. **Email Field:**
   - Required ✅
   - Must be a valid email ✅

---

## Benefits of the `f()` Getter Function
✔ **Code Simplification** - Instead of writing `form.controls['name']` multiple times, we use `f['name']`.  
✔ **Improved Readability** - The template becomes cleaner and easier to maintain.  
✔ **Reusability** - Works for multiple form fields without modifying the template structure.  

---

## Author
👨‍💻 **ANUBHAV SRIVASTAVA**  
🔗 [GitHub Profile](https://github.com/123-anubhav/)

