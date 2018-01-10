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

  // jobList
  jobId;
  offers;
  jobSelection;

  // sidebar rendering
  categorySelection = Array(3).fill(false);   // 3 categories
  query = {};

  // todo: store this information in the database
  roles = ['Analyst', 'Developer', 'Tester', 'Management', 'Architect'];
  jobType = ['Full time', 'Part time', 'Contract', 'Temporary', 'Apprentice'];
  languages = ['English', 'Portuguese', 'German', 'French', 'Italian'];

  constructor(private searchService: SearchService,
              private applyService:  ApplyService) { }

  ngOnInit() {

    // todo: verify signed user, async-await
    this.applyService.getAppliedJobs().subscribe(
      (appliedJobs) => {

        this.searchService.getAllAvailableOffers().subscribe(
          (offers) => {

            this.hideAppliedJobs(appliedJobs, offers);

            // create an empty array to store the available jobs
            this.jobSelection = Array.apply(null, Array(this.offers.length))
              .map(function() {
                return false
              });

            // change the highlighted job tile style
            this.jobSelection[0] = true;
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

    this.jobSelection.forEach((value, i) => {
      this.jobSelection[i] = i === index;
    });
  }

  // job selection
  toggleStyle(index): any {
    return this.jobSelection[index];
  }

  // category selection
  toggleContent(index) {
    this.categorySelection[index] = !this.categorySelection[index];
  }

  shouldFold(index) {
    return this.categorySelection[index];
  }

  // option selection
  toggleCheck(option: string, category: string) {

    const queryByField = this.query[category];

    if (queryByField) {

      // todo: refactor in to an standalone method
      const queryByFieldArray = queryByField.split(',');
      const index = queryByFieldArray.findIndex((element) => {
        return element === option;
      });

      if (index !== -1) {
        queryByFieldArray.splice(index, 1);

      } else {
        queryByFieldArray.push(option);
      }

      this.query[category] = queryByFieldArray.join(',');

    } else {

      this.query[category] = option;
    }

    // todo: send request
  }

  shouldDisplayBlock(option: string, category: string) {

    const queryByField = this.query[category];

    if (queryByField) {

      const queryByFieldArray = queryByField.split(',');
      const index = queryByFieldArray.findIndex((element) => {
        return element === option;
      });

      return (index === -1);

    } else {

      return true;
    }
  }
}
