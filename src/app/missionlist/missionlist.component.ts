import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  data:any;
  constructor(private postData:PostsService) { }

  ngOnInit(): void {
    this.postData.getPosts().subscribe((result)=>{
      console.log("result",result)
      this.data=result
    })
  }

}
