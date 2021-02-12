import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-instrucoes',
  templateUrl: './modal-instrucoes.component.html',
  styleUrls: ['./modal-instrucoes.component.css']
})
export class ModalInstrucoesComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalInstrucoesComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){

  }

}
