import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myForm: FormGroup;//model driven forms
  public submmited: boolean;
  public events: any[] = []; // use later to display form change

  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    // subscribe to form changes
    this.subcribeToFormChanges();
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', <any>Validators.required],
        postcode: ['']
      })
    });
    // the long way
    /*this.myForm = new FormGroup({
        name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
        address: new FormGroup({
            street: new FormControl('', <any>Validators.required),
            postcode: new FormControl('8000')
        })
    });*/
  }

  subcribeToFormChanges() {
    // initialize stream
    //const myFormValueChanges$ = this.myForm.valueChanges;
    //subscribe to the stream
    //myFormValueChanges$.subscribe(x => this.events.push({ event: 'Status Changed', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submmited = true;
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }
}
