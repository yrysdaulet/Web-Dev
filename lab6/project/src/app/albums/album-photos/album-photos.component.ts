import { Component } from '@angular/core';
import { photo } from 'src/app/types/photos';
import { AlbumsPhotosService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  photos : photo[] ;
  photosFil : photo[] ;
  id ;
  
  constructor(private route: ActivatedRoute , private Photos : AlbumsPhotosService) {
    this.id = this.route.snapshot.paramMap.get('albumId');
    this.photos = [];
    this.photosFil = this.photos;
  }  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('albumId');
    this.Photos.getPhotos(this.id).subscribe((photos)=>{
      this.photos = photos;
      this.photosFil = this.photos;
    })
    
  }
  getPhotosInfo(){
    return this.photos;
  }
  set setSearchTerm(value: string ) {
    this.photosFil = this.filterAlbums(value);
  }
  filterAlbums(searchString: string ) {
    return this.photos.filter(album =>album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
}
