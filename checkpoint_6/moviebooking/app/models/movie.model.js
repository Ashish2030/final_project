
// Here we would define the Schema of a Online Course

module.exports = mongoose => {
  const Movie = mongoose.model(
      "movie",
      mongoose.Schema(
        {
          movieid : {type: Number},
          title: String,
          published:Boolean,
          released: Boolean,
          poster_url : { type: String, default: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg' },
          trailer_url : { type: String, default: 'https://www.youtube.com/watch?v=MTdpHs6HWwM' },
          wiki_url : { type: String, default: 'https://www.mongodb.com/mern-stack' },
          release_date : {type:String},
          publish_date : {type:String},
          duration : { type: Number, default: 60 , min : 0, max: 1200 },  // duration is in minutes
          critic_rating : { type: Number, default: 4.0 },  // lets start the popularity Index from 4.0 on  5
          story_line: String,
          artists : {type: Array},
          genres : {type: Array},
          shows:Array
        },
        { timestamps: true }
      )
    );
  
    return Movie;
  };

//Sample
//   {
//     "movieid":1,
//     "title":"The Lodgers",
//     "published":true,
//     "released": true,
//     "poster_url":"https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg",
//     "release_date":"1/1/2020",
//     "publish_date": "2/2/2020",
//     "artists":["1", "2"],
//     "genres":["1", "2"],
//     "duration": 200,
//     "critic_rating": 3,
//     "trailer_url":"https://www.youtube.com/watch?v=ltIcW2xMuzs",
//     "wiki_url":"https://en.wikipedia.org/wiki/Main_Page",
//     "story_line":"1920, rural Ireland. Anglo Irish twins Rachel and Edward share a strange existence in their crumbling family estate. Each night, the property becomes the domain of a sinister presence (The Lodgers) which enforces three rules upon the twins: they must be in bed by midnight; they may not permit an outsider past the threshold; if one attempts to escape, the life of the other is placed in jeopardy. When troubled war veteran Sean returns to the nearby village, he is immediately drawn to the mysterious Rachel, who in turn begins to break the rules set out by The Lodgers. The consequences pull Rachel into a deadly confrontation with her brother - and with the curse that haunts them."
// }
