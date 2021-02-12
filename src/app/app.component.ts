import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTabChangeEvent, MatTableDataSource } from '@angular/material';
import { ModalInstrucoesComponent } from './modal/modal-instrucoes/modal-instrucoes.component';
import { MealsService } from './services/meals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //title = 'TOPi-Front';
  mealDigitado: string="";
  tabela: MatTableDataSource<any> = new MatTableDataSource();
  tabelaPesquisada: MatTableDataSource<any> = new MatTableDataSource();
  colunasTabela = ['name','category','area','thumbnail','instructions'];
  private paginator: MatPaginator;
  tabAtual=0;
  @ViewChild(MatPaginator , {static:false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.tabela.paginator = this.paginator;
  }
  constructor(private mealsService:MealsService,public dialog: MatDialog){}

  ngOnInit() {

  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabAtual = tabChangeEvent.index;
    if(this.tabAtual == 1){
      this.buscarMealsPesquisados();
    }
  }

  pesquisarMeal(){
    this.mealsService.buscarMeals(this.mealDigitado).subscribe(meals=>{
      this.tabela = new MatTableDataSource<any>(meals);
      this.tabela.paginator = this.paginator;
    })
  }

  abrirInstrucoes(instrucao,imagem){
    let dialogo = this.dialog.open(ModalInstrucoesComponent, {
      width: '800px', height: 'auto', disableClose: false, data: {
        instrucoes:instrucao,
        imagem:imagem
      }
    });
  }

  buscarMealsPesquisados(){
    this.mealsService.buscarMealsPesquisados().subscribe(meals=>{
      this.tabelaPesquisada = new MatTableDataSource<any>(meals);
    })
  }
}
