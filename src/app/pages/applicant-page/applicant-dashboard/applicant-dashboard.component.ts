import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../../../services/guest/search.service';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { ApplyService } from '../../../services/applicant/apply.service';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss']
})
export class ApplicantDashboardComponent implements OnInit {

  @ViewChild(JobDetailsComponent)
  private jobComponent: JobDetailsComponent;

  jobId;
  offers;
  isSelected;

  // todo: store this information in the database
  roles = ['Analyst', 'Developer', 'Tester', 'Management', 'Architect'];
  jobType = ['Full time', 'Part time', 'Contract', 'Temporary', 'Apprentice'];
  languages = ['English', 'Portuguese', 'German', 'French', 'Italian'];

  constructor(private searchService: SearchService,
              private applyService:  ApplyService) { }

  ngOnInit() {
    this.searchService.getAllAvailableOffers().subscribe(
      (offers) => {

        this.offers = offers;

        this.isSelected = Array.apply(null, Array(offers.length))
          .map(function() {
            return false
          });
        this.isSelected[0] = true;
        this.jobComponent.fetchJobDetails(offers[0]._id);
      }
    );

    this.applyService.getAppliedJobs().subscribe(
      () => {
        // todo: store the id of applied jobs
      }
    )
  }

  showDetails(job, index) {
    this.jobId = job._id;

    this.isSelected.forEach((value, i) => {
      this.isSelected[i] = i === index;
    });
  }

  toggleStyle(index) {
    return this.isSelected[index];
  }
}
