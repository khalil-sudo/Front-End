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

  ngOnInit(): void {
    this.refreshSujList();
  }
  refreshSujList() {
    this.service.getSujetsList().subscribe((data) => {
      this.SujetsList = data;
    });
  }
}
