import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-suj',
  templateUrl: './add-edit-suj.component.html',
  styleUrls: ['./add-edit-suj.component.css'],
})
export class AddEditSujComponent implements OnInit {
  constructor(private service: SharedService) {}
  @Input() suj: any;
  id: Number | any;
  nom: String | any;
  description: String | any;
  difficulte: String | any;

  ngOnInit(): void {
    this.id = this.suj.id;
    this.nom = this.suj.nom;
    this.description = this.suj.description;
    this.difficulte = this.suj.difficulte;
  }
  addSujet() {
    var value = {
      id: this.id,
      nom: this.nom,
      description: this.description,
      difficulte: this.difficulte,
    };
    this.service.addSujets(value).subscribe((res) => {
      alert(res.toString());
    });
  }
  updateSujet() {
    var value = {
      id: this.id,
      nom: this.nom,
      description: this.description,
      difficulte: this.difficulte,
    };
    this.service.updateSujets(value).subscribe((res) => {
      alert('Base mise à jour !');
    });
  }
}
