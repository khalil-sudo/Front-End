import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-suj',
  templateUrl: './show-suj.component.html',
  styleUrls: ['./show-suj.component.css'],
})
export class ShowSujComponent implements OnInit {
  constructor(private service: SharedService) {}

  SujetsList: any = [];
  ModalTitle: string | any;
  ActivateAddEditSujComp: boolean = false;
  suj: any;

  ngOnInit(): void {
    this.refreshSujList();
  }
  addClick() {
    this.suj = {
      id: 0,
      nom: '',
      description: '',
      difficulte: '',
    };

    this.ModalTitle = 'Add sujet';
    this.ActivateAddEditSujComp = true;
  }
  updateClick(item: any) {
    this.suj = item;
    this.ModalTitle = 'Update sujet';
    this.ActivateAddEditSujComp = true;
  }
  deleteClick(item: any) {
    if (confirm('êtes vous sûre?')) {
      this.service
        .deleteSujets(item.id)
        .subscribe((data) => alert('Objet supprimé'));
      this.refreshSujList();
    }
  }

  closeClick() {
    this.ActivateAddEditSujComp = false;
    this.refreshSujList();
  }

  refreshSujList() {
    this.service.getSujetsList().subscribe((data) => {
      this.SujetsList = data;
    });
  }
}
