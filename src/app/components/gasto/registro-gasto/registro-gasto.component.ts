import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GastoService } from 'src/app/gasto.service';
import { Gasto } from 'src/app/models/Gasto';

@Component({
  selector: 'app-registro-gasto',
  templateUrl: './registro-gasto.component.html',
  styleUrls: ['./registro-gasto.component.css']
})
export class RegistroGastoComponent implements OnInit {

  form: FormGroup;
  gasto: Gasto;

  constructor(private fb: FormBuilder, private gastoService: GastoService, private router: Router, private location: Location) {
    this.form = this.fb.group({
      monto: ['', Validators.required],
      detalle: ['', Validators.required]
    });
    this.gasto = new Gasto();
  }

  ngOnInit(): void {
  }

  guardarGasto() {
    this.gasto.detail = this.form.value.detalle;
    this.gasto.amount = this.form.value.monto;

    this.gastoService.saveGastos(this.gasto).subscribe(data => {
      this.router.navigateByUrl('/gastos');
    }, err => console.log);
  }

  back() {
    this.location.back();
  }

}
