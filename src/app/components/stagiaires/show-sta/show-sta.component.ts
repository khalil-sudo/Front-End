import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-sta',
  templateUrl: './show-sta.component.html',
  styleUrls: ['./show-sta.component.css'],
})
export class ShowStaComponent implements OnInit {
  constructor(private service: SharedService) {}

  StagiairesList: any = [];
  ModalTitle: string | any;
  ActivateAddEditStaComp: boolean = false;
  sta: any;

  ngOnInit(): void {
    this.refreshStaList();
  }
  addClick() {
    this.sta = {
      id: 0,
      nom: '',
      dn: '',
      email: '',
      institut: '',
      specialite: '',
    };

    this.ModalTitle = 'Add stagiaire';
    this.ActivateAddEditStaComp = true;
  }
  updateClick(item: any) {
    this.sta = item;
    this.ModalTitle = 'Update stagiaire';
    this.ActivateAddEditStaComp = true;
  }
  deleteClick(item: any) {
    if (confirm('êtes vous sûre?')) {
      this.service
        .deleteStagiaires(item.id)
        .subscribe((data) => alert('Objet supprimé'));
    }
    console.log('affiche');
    this.refreshStaList();
  }

  closeClick() {
    this.ActivateAddEditStaComp = false;
    this.refreshStaList();
  }

  refreshStaList() {
    this.service.getStagiairesList().subscribe((data) => {
      this.StagiairesList = data;
    });
  }
}
