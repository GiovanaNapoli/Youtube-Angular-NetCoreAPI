import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { Util } from 'src/app/util/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-alunos',
  templateUrl: './professor-alunos.component.html'
})
export class ProfessorAlunosComponent implements OnInit {

  @Input() public alunos: Aluno[];
  @Output() closeModal = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  alunoSelect(id: number) {
    this.closeModal.emit(null);
    this.router.navigate(['/alunos', id]);
  }

}