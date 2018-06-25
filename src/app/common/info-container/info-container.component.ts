import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit {

  constructor() { }

  @Input() projectName: any;
  @Input() projectDescription: any;
  // @Input() teamSize: any;
  // @Input() numberOfBacklogs: number;
  // @Input() numberOfIterations: number;
  @Input() startDate: any;
  @Input() projectStatus: any;
  private statusColor: any;

  ngOnInit() {
    if (this.projectStatus == 'New') this.statusColor = "#5DADE2";
    if (this.projectStatus == 'In Progress') this.statusColor = "#DC7633";
    if (this.projectStatus == 'Completed') this.statusColor = "#2ECC71";

  }
}
