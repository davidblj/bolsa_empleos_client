import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss']
})
export class SearchJobComponent implements OnInit, OnChanges {

  @Input()
  id = null;

  dummy;
  resolvedDummy = {

    name: 'Web developer',
    owner: 'Google',
    expiry: '24/06/2018',
    role: 'developer',
    description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate sed mi id porta. ' +
    'Suspendisse semper consectetur nisi, dapibus eleifend mi pharetra in. Mauris ut eros sollicitudin, ultricies ' +
    'leo vel, interdum odio. Ut blandit eu odio quis tempor. Nunc quis convallis mi. Pellentesque faucibus in sapien ' +
    'non porttitor. Nulla in nibh eget ex rhoncus vulputate. Aenean quis nisi eget purus pulvinar posuere. Integer sem' +
    'sem, euismod non eros a, porttitor imperdiet felis. Quisque efficitur nulla sit amet augue finibus, a molestie' +
    ' turpis consequat. Ut molestie risus at erat tristique semper.\n' +
    'Suspendisse sem erat, eleifend non mattis in, mattis ut elit. Morbi ipsum nunc, imperdiet eget nisi id, feugiat ' +
    'dictum diam. Praesent in urna id purus convallis blandit. Curabitur nec laoreet libero, eu interdum ipsum. Nulla ' +
    'porttitor dolor feugiat, porta eros ultrices, sodales sem. Ut vitae tincidunt velit. Vivamus in orci eget justo ' +
    'luctus eleifend in ac augue. Aliquam vehicula varius lorem, non molestie urna ullamcorper ut. Quisque a magna id' +
    ' orci euismod porttitor. Vestibulum accumsan consectetur sagittis. Sed sit amet auctor odio, dictum pretium magna.' +
    ' Pellentesque quis sapien rutrum, bibendum lacus in, tempus diam. Nam bibendum maximus lacus, et dignissim mauris' +
    ' porta non. Cras sit amet dictum dolor, sit amet euismod metus. Fusce sodales elit nec elit tincidunt molestie. '
  };

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.id && (changes.id.currentValue === 1)) {
      this.dummy = this.resolvedDummy;
    }
  }
}
