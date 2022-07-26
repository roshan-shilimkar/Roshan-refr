import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  imageurl: string = 'asdadng';
  createblogs: FormGroup = new FormGroup({
    Title: new FormControl(),
    Sub_title: new FormControl(),
    description: new FormControl(),
    author: new FormControl(),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  async choosepic() {
    const image = await Camera.pickImages({
      quality: 100,
      height: 300,
      width: 300,
      limit: 1,
    });
    console.log(image);
    const imageUrl = image.photos[0].webPath || "";
    this.imageurl = imageUrl;
  }

  CreateBlog() {
    if (this.createblogs.value.Title.trim() == "") {
      // this.auth.resource.startSnackBar("Please Enter Blog Title.");
      console.log("Please Enter Blog Title.");
    }
    else if (this.createblogs.value.Sub_title.trim() == "") {
      // this.auth.resource.startSnackBar("Please Enter Blog Title.");
      console.log("Please Enter Blog Sub-Title.");
    }
    else if (this.createblogs.value.description.trim() == "") {
      // this.auth.resource.startSnackBar("Please Enter Blog Title.");
      console.log("Please Enter Blog Description.");
    }
    else if (this.createblogs.value.Sub_title.trim() == "") {
      // this.auth.resource.startSnackBar("Please Enter Blog Title.");
      console.log("Please Enter Blog Author.");
    }
    else {
      console.log("All Ok");
    }
    // console.log(this.Bauthor);
  }

}
