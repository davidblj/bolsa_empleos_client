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

    // todo: verify signed user
    this.applyService.getAppliedJobs().subscribe(
      (appliedJobs) => {

        this.searchService.getAllAvailableOffers().subscribe(
          (offers) => {

            this.hideAppliedJobs(appliedJobs, offers);

            // create an empty array to store the available jobs
            this.isSelected = Array.apply(null, Array(this.offers.length))
              .map(function() {
                return false
              });

            // change the highlighted job tile style
            this.isSelected[0] = true;
            this.jobComponent.fetchJobDetails(this.offers[0]._id);
          }
        );
      }
    );
  }

  hideAppliedJobs(appliedJobs, offers) {

    if (appliedJobs) {

      offers = offers.filter((offer) => {

        for (const appliedJob of appliedJobs.jobs) {
          if (appliedJob === offer._id) {
            return false;
          }
        }
        return true;
      });
    }

    this.offers = offers;
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

  add() {

    // todo: build query
  }
}
