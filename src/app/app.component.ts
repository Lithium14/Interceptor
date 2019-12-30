import { Component, OnInit } from '@angular/core';
import { FakeApiService } from './shared/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data;
  constructor(private api: FakeApiService) {

  }
  ngOnInit() {
    this.api.getTime().subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
