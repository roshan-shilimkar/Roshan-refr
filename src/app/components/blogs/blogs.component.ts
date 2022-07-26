import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from './blog/create-blog/create-blog.component';

export interface blogs {
  imgurl: string;
  Title: string;
  Description: string;
  Author: string;
}
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogsarr: Array<blogs> = [];
  constructor(public dialog: MatDialog) { 
    console.log("asdasdasdsassdadsadsa");
  }

  ngOnInit(): void {
    this.getblogdata();
  }


  getblogdata() {
    // const unsub = onSnapshot(doc(this.firestore, `${gWay}`, `${id}`), (doc) => {
    let doc: Array<blogs> = [];
    doc.length = 10
    for (let i = 0; i < doc.length; i++) {
      this.blogsarr.push({
        imgurl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        Title: i.toString() + " Social commerce is at the heart of online shopping for tomorrow's consumers",
        Description: i.toString() + " This is Discrption",
        Author: "Refr Team",
      })
    }
    // console.log(this.blogsarr);
  }


  newBlogs() {
    const dialogRef = this.dialog.open(CreateBlogComponent, {
      panelClass:"blogcreate",
      // height: '400px',
      width: '600px',
    });
  }
}
