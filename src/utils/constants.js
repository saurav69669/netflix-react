export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/52590691?v=4";

// export const API_OPTIONS = curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjk1MmM2MDdkNWQyZjYxNGM1OWVjY2RhYjYwMmQzNCIsIm5iZiI6MTc3NTg5NjczMi41ODgsInN1YiI6IjY5ZGEwODljMmZiMmUyMmRhNzM1N2ExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZAFiHhYeie6TMb6tBvERM-ZWdS4ZyXvjrheYBc_jsA' \
//      --header 'accept: application/json'

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjk1MmM2MDdkNWQyZjYxNGM1OWVjY2RhYjYwMmQzNCIsIm5iZiI6MTc3NTg5NjczMi41ODgsInN1YiI6IjY5ZGEwODljMmZiMmUyMmRhNzM1N2ExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SZAFiHhYeie6TMb6tBvERM-ZWdS4ZyXvjrheYBc_jsA",
  },
};
