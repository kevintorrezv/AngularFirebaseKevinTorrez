import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Posts: Post[] //inicializamos un arreglo de tipo Post (que es la clase que importamos). De esta forma se respeta el formato si o si

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
