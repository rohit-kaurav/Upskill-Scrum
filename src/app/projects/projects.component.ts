import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectservice: ProjectService) { }

  private projects:any[] = [
                            // {
                            //   name:"Project A",
                            //   description:"This is Project A.",
                            //   teamsize:8,
                            //   backlogs: 4,
                            //   iterations: 2,
                            //   created: "01/01/2018",
                            //   status: 'In Progress'
                            // },
                            // {
                            //   name:"Project B",
                            //   description:"This is Project B.",
                            //   teamsize:8,
                            //   backlogs: 10,
                            //   iterations: 6,
                            //   created: "02/02/2018",
                            //   status: "In Progress"
                            // },
                            // {
                            //   name:"Project C",
                            //   description:"This is Project C.",
                            //   teamsize:8,
                            //   backlogs: 14,
                            //   iterations: 12,
                            //   created: "03/03/2018",
                            //   status: "New"
                            // },
                            // {
                            //   name:"Project D",
                            //   description:"This is Project D.",
                            //   teamsize:8,
                            //   backlogs: 5,
                            //   iterations: 2,
                            //   created: "04/04/2018",
                            //   status: "In Progress"
                            // },
                            // {
                            //   name:"Project E",
                            //   description:"This is Project E.",
                            //   teamsize:8,
                            //   backlogs: 10,
                            //   iterations: 4,
                            //   created: "05/05/2018",
                            //   status: "Completed"
                            // },
                            // {
                            //   created:"010223",
                            //   date_modified:"0298823",
                            //   description:"this is created project",
                            //   employee_id:"sasds",
                            //   project_id:"233",
                            //   project_name:"blue",
                            //   status:"completed"
                            // }
                          ]
  ngOnInit() {
    this.projectservice.getAllProjects()
      .subscribe(
        response => {
          console.log("project response ",response)
          this.projects = response
        },
        error => {
          console.log("project error ",error)
        }
      )
  }

}
