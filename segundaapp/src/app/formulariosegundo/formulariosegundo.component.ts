import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// importamos nuestro validador creado
import { ValidateUrl } from '../validators/url.validator';

@Component({
  selector: 'app-formulariosegundo',
  templateUrl: './formulariosegundo.component.html',
  styleUrls: ['./formulariosegundo.component.css']
})
/** FORMULARIO REACTIVO */
export class FormulariosegundoComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // esto forma un constructor de formulario
    // Validators es un array
    this.formulario = this.formBuilder.group({
      user: ['Miusuario', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z]*'), ValidateUrl]],
      password: ['', Validators.required]
    });
  }

  // en los formularios reactivos no podemos hacer las validaciones en la vista,
  // por lo que las hacemos desde el componente
  // hay dos tipos de validaciones: las de angular, y las que te puedes crear tu mismo



  onSubmit(formulario) {
    alert('Has enviado el formulario!');
    // vaciamos los campos del formulario al enviarlo
    this.formulario.reset();
  }
}
