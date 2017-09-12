import { Injectable } from '@angular/core';

@Injectable()
export class ImageService{
  visibleImages = [];
  getImages(){
    return  this.visibleImages = Images.slice(0);
  }

  getImage(id: number){
    return Images.slice(0).find(image => image.id == id)
  }

}

const Images = [
{"id":0, "category":"buildings", "caption":"building_01", "url":"assets/img/buildings_1.jpg"},
{"id":1, "category":"buildings", "caption":"building_02", "url":"assets/img/buildings_2.jpg"},
{"id":2, "category":"buildings", "caption":"building_03", "url":"assets/img/buildings_3.jpg"},
{"id":3, "category":"buildings", "caption":"building_04", "url":"assets/img/buildings_4.jpg"},
{"id":4, "category":"buildings", "caption":"building_05", "url":"assets/img/buildings_5.jpg"},
{"id":5, "category":"buildings", "caption":"building_06", "url":"assets/img/buildings_6.jpg"},
{"id":6, "category":"mountains", "caption":"mountains_01", "url":"assets/img/mountains_1.jpg"},
{"id":7, "category":"mountains", "caption":"mountains_02", "url":"assets/img/mountains_2.jpg"},
{"id":8, "category":"mountains", "caption":"mountains_03", "url":"assets/img/mountains_3.jpg"},
{"id":9, "category":"mountains", "caption":"mountains_04", "url":"assets/img/mountains_4.jpg"},
{"id":10, "category":"mountains", "caption":"mountains_05", "url":"assets/img/mountains_5.jpg"},
{"id":11, "category":"wonders", "caption":"wonders_01", "url":"assets/img/wonder_1.jpg"},
{"id":12, "category":"wonders", "caption":"wonders_02", "url":"assets/img/wonder_2.jpg"},
{"id":13, "category":"wonders", "caption":"wonders_03", "url":"assets/img/wonder_3.jpg"},
{"id":14, "category":"wonders", "caption":"wonders_04", "url":"assets/img/wonder_4.jpg"},
{"id":15, "category":"wonders", "caption":"wonders_05", "url":"assets/img/wonder_5.jpg"},
{"id":16, "category":"boats", "caption":"boats_01", "url":"assets/img/boats_1.jpg"},
{"id":17, "category":"boats", "caption":"boats_02", "url":"assets/img/boats_2.jpg"},
{"id":18, "category":"boats", "caption":"boats_03", "url":"assets/img/boats_3.jpg"},
{"id":19, "category":"boats", "caption":"boats_04", "url":"assets/img/boats_4.jpg"}
]
