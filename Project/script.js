let movies = [
    {
name: "Inception",
rating: 8.8,
poster:"https://4.bp.blogspot.com/-L80GvZteuZQ/T8iT9fY-LHI/AAAAAAAAAKs/SXTF2pEK9Ao/s1600/inception-movie-poster.jpg",
cast:"Leonardo di Capri"
}
,
{
name: "The Shawshank Redemption",
rating: 9.3,
poster:"https://th.bing.com/th/id/OIP.w0SK_ZRdaWbnC2goV4kbYAHaLH?rs=1&pid=ImgDetMain",
cast:"Tim Robbins, Morgan Freeman, Bob Gunton"
},
{
name: "The Dark Knight",
rating: 9.0,
poster: "https://1.bp.blogspot.com/-EvohYm6e4mY/XdhJgBhHcLI/AAAAAAAABik/HuOXcDFBIyQOAtd6BPAEL9hd-K73nek_gCLcBGAsYHQ/s1600/The%2BDark%2BKnight.jpg",
cast:" Christian Bale, Heath Ledger, Aaron Eckhart"
},
{
name: "Pulp Fiction",
rating: 8.9,
poster: "https://th.bing.com/th/id/OIP.tdzyyWz1xlkJ9lChslvCRwHaKa?rs=1&pid=ImgDetMain",
cast:"John Travolta, Uma Thurman, Samuel L. Jackson"

},{
name: "Forrest Gump",
rating: 8.8,
poster: "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
cast:"Tom Hanks, Robin Wright, Gary Sinise"

}
,{
name: "Fight Club",
rating: 8.8,
poster: "https://th.bing.com/th/id/OIP.sw0-tZdemZsh1uORjBp68gHaKe?rs=1&pid=ImgDetMain",
Description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
cast:" Brad Pitt, Edward Norton, Helena Bonham Carter"
},
{
name: "The Godfather",
rating: 9.2,
poster: "https://posterspy.com/wp-content/uploads/2019/04/godfather.jpg",
Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
cast:"Marlon Brando, Al Pacino, James Caan"},
{
name: "Interstellar",
rating: 8.6,
poster: "https://th.bing.com/th/id/OIP.uiaj_IMaC7h3NoieAhcmVwHaLG?rs=1&pid=ImgDetMain",
Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
cast:"Matthew McConaughey, Anne Hathaway, Jessica Chastain"
},
{
name: "DEADPOOL",
rating: 8.7,
poster: "https://th.bing.com/th/id/R.ff51cf33dad6deb97eb5386cc620783a?rik=kQnr9Fb%2bgvIyXw&riu=http%3a%2f%2fcdn.traileraddict.com%2fcontent%2f20th-century-fox%2fdeadpool-poster-10.jpg&ehk=TKXp%2fzST6r8gHxDYwwM%2bD8Yv6%2fm7nB7dQUcComRgikc%3d&risl=&pid=ImgRaw&r=0",
Description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
cast:"Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller, Gina Carano, Brianna Hildebrand"},
{
name: "Schindler's List",
rating: 8.9,
poster: "https://th.bing.com/th/id/OIP.fbl_Qz8avmhYIfIaRWjwbwHaLG?w=683&h=1024&rs=1&pid=ImgDetMain",
Description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
cast:" Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall, Jonathan Sagall, Embeth Davidtz"
},
{
    name:"Avengers Endgame",
    poster:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
    rating:8.7,
    cast:"Robert Downey Jr., Chris Evans, Mark Ruffalo"
},
{
    name:"Lagaan",
    poster:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    rating:9.1,
    cast:"Amir Khan"
},
{
    name:"Oppenheimer",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTox5N6MOrwaGAZ-QvCIphCVOz7o4uhW_BBcpWqZiBuhHgbw_A7K7amjqNrIcfVp1a3vik&usqp=CAU",
    rating:9.2,
    cast:"Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich"
},
{
    name:"Moon Light",
    poster:"https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
    rating:7.2,
    cast:" Trevante Rhodes, Mahershala Ali, Naomie Harris, Ashton Sanders, Jharrel Jerome, Janelle Monáe, and André Holland."
},
{
    name:"Bohemian Raphsody",
    poster:"https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg",
    rating:6.5,
    cast:"Rami Malek, Lucy Boynton, Gwilym Lee"
},
{
    name:"The Avengers",
    poster:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
    rating:7.6,
    cast:"Robert Downey Jr, Chris Evans, Steve Rogers, Mark Ruffal, Bruce Banner, Chris Hemsworth"
},
{
    name:"John Wick 2",
    poster:"https://rukminim2.flixcart.com/image/850/1000/k0lbdzk0/poster/4/w/g/medium-john-wick-poster-for-room-office-13-inch-x-19-inch-rolled-original-imafkc6fd8mc6jga.jpeg?q=90",
    rating:7.9,
    cast:"Keanu Charles Reeves"
},
{
    name:"Maleficient",
    poster:"https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_.jpg",
    rating:6.4,
    cast:"Angelina Jolie, Sharlto Copley, Elle Fanning, Sam Riley, Imelda Staunton, Juno Temple, Lesley Manville"
},
{
    name:"Leo",
    poster:"https://m.media-amazon.com/images/I/71c2cxxNQIL._AC_UF894,1000_QL80_.jpg",
    rating:8.7,
    cast : "Vijay Thalapathy, Sunjay Dutt"
}];


function searchMovie()
{
    let movieName = document.getElementById('search').value;
    
    if(movieName!=="")
    {

        let result =movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase())
                    })

        if(result.length==0)
        {
            
        }


       displayMovies(result);


    }
    else 
    {
        displayMovies(movies);
    }
    


}


function displayMovies(data)
{
    
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;


    for(let i=0;i<data.length;i++)
    {


        htmlString=htmlString+`
            <div class="movie">
                <div class="overlay">

                    <div class="video">
                    
                        </div>

                    <div class="details">

                        <h1>${data[i].name}</h1>
                        <h2>IMDB : ${data[i].rating}</h2>
                        <p> Cast : ${data[i].cast} </p>

                    </div>

                </div>
                <img class="poster" src="${data[i].poster}" alt="poster">
            </div>
        `
    }

    console.log(htmlString);

    document.getElementById("movies").innerHTML=htmlString;

}


displayMovies(movies);



