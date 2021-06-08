import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sta',
  templateUrl: './add-edit-sta.component.html',
  styleUrls: ['./add-edit-sta.component.css'],
})
export class AddEditStaComponent implements OnInit {
  constructor(private service: SharedService) {}
  @Input() sta: any;
  id: Number | any;
  nom: String | any;
  dn: String | any;
  email: String | any;
  institut: String | any;
  specialite: String | any;

  ngOnInit(): void {
    this.id = this.sta.id;
    this.nom = this.sta.nom;
    this.dn = this.sta.dn;
    this.email = this.sta.email;
    this.institut = this.sta.institut;
    this.specialite = this.sta.specialite;
  }
  addStagiaire() {
    var value = {
      id: this.id,
      nom: this.nom,
      dn: this.dn,
      email: this.email,
      institut: this.institut,
      specialite: this.specialite,
    };
    this.service.addStagiaires(value).subscribe((res) => {
      alert('Nouvel objet ajouté !');
    });
  }
  updateStagiaire() {
    var value = {
      id: this.id,
      nom: this.nom,
      dn: this.dn,
      email: this.email,
      institut: this.institut,
      specialite: this.specialite,
    };
    this.service.updateSujets(value).subscribe((res) => {
      alert('Base mise à jour !');
    });
  }
}
