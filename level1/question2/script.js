//Console.log out elements in JSON file
var info = {
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
}

//For each array element
var output = "";
  for (var i = 0; i <= info.video.length-1; i++) {
     for (key in info.video[i]) {
       if (info.video[i].hasOwnProperty(key)) {
          console.log(output);
       if (info.video.author.hasOwnProperty(key)) {
         for (key in info.video.author.data[i]) {
             console.log(output);
    }
   }
  }
 }
}
