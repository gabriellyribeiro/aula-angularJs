import { Component, OnInit } from '@angular/core';
import { Posts } from './../model/posts';
import { PostsService } from './../service/posts.service';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  posts: Posts[];
  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.postsService.getAll().subscribe((postsOut: Posts[]) => {
      this.posts = postsOut;
    });
  }

}

