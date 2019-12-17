import { Component, OnInit } from '@angular/core';
import { Posts } from './../model/posts';
import { PostsService } from './../service/posts.service';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {

  id: number;
  post: Posts = new Posts(0, 0, '', '');
  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  onkeyup(event: any) {
    if (event.key == "Enter") {
      this.postService.getById(this.id).subscribe((postOut: Posts) => {
        this.post = postOut;
      });
    }
  }
}
