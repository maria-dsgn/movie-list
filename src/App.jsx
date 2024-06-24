import { useState } from "react";
import "./App.css";
import { initialMovies } from "./data/initial-movies.js";
import MovieCard from "./components/MovieCard.jsx";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  function handleToggleFavorite(id) {
    setMovies(
      movies.map((movie) => {
        return movie.id === id
          ? {
              ...movie,
              favorite: !movie.favorite,
            }
          : movie;
      })
    );
  }

  function handleAddMovie() {
    setMovies([
      ...movies,
      {
        id: Math.random().toString(36).substring(2),
        title: "Mad Max: Fury Road",
        favorite: false,
        director: "George Miller",
        released: 2015,
      },
    ]);
  }

  function handleRemoveCard(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  //sort functions
  const [activeSort, setActiveSort] = useState("title");
  let moviesToDisplay = movies.slice();

  const sortByTitle = (moviesToDisplay) => {
    return moviesToDisplay
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  };

  const sortByYear = (moviesToDisplay) => {
    return moviesToDisplay.slice().sort((a, b) => b.released - a.released);
  };

  const sortByFavorite = (moviesToDisplay) => {
    return moviesToDisplay.sort((a, b) =>
      a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
    );
  };

  //sort-buttons logic:
  if (activeSort === "released") {
    moviesToDisplay = sortByYear(moviesToDisplay);
  } else if (activeSort === "favorite") {
    moviesToDisplay = sortByFavorite(moviesToDisplay);
  } else if (activeSort === "title") {
    moviesToDisplay = sortByTitle(moviesToDisplay);
  }

  //search feature
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the movies based on the search query
  const filteredMovies = moviesToDisplay.filter((moviesToDisplay) =>
    moviesToDisplay.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h2>My list of movies 🍿</h2>
      <input
        type="text"
        placeholder="Start search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="sort-container">
        <button onClick={() => setActiveSort("title")}>A-B ↓</button>
        <button onClick={() => setActiveSort("released")}>
          Release year ↓
        </button>
        <button onClick={() => setActiveSort("favorite")}>Favorite ↓</button>
      </div>

      <div className="movies-container">
        {filteredMovies.map((movie) => {
          return (
            <MovieCard
              onToggleFavorite={() => handleToggleFavorite(movie.id)}
              onToggleRemoveCard={() => handleRemoveCard(movie.id)}
              key={movie.id}
              movie={movie}
              favorite={movie.favorite}
              genre={movie.genre}
            />
          );
        })}
      </div>
      <button className="addMovie-btn" onClick={handleAddMovie}>
        ➕
      </button>
    </>
  );
}

export default App;

// const [students, setStudents] = useState([
//   { id: 1, firstname: "John", lastname: "Doe", absent: undefined },
//   { id: 2, firstname: "Jane", lastname: "Doe", absent: undefined },
//   { id: 3, firstname: "Nick", lastname: "Smith", absent: undefined },
// ]);

// // const [count, setCount] = useState(0);

// // function handleOnClick() {
// //   setCount((count) => count + 1);
// // }
//update
// function toggleAbsent(id) {
//   //we want to toggle the absent property of the student
//   //challenge: we have to set the entire list anew + the change within the list
//   console.log("clicked:", id);

//   const newList = students.map((student) => {
//     console.log(`${student.id} === ${id}`);
//     return student.id === id
//       ? {
//           ...student,
//           absent:
//             student.absent === undefined || student.absent === true
//               ? false
//               : true,
//         }
//       : student;
//   });

//   console.log(newList);
//   setStudents(newList);
// }

// function handleAddStudent() {
//   setStudents([
//     ...students,
//     {
//       id: Math.random().toString(36).substring(2),
//       firstname: "Kent",
//       age: 29,
//       absent: undefined,
//     },
//   ]);
// }

// function handleRemoveStudent(id) {
//   console.log(id);
//   setStudents(
//     students.filter((student) => (student.id === id ? false : true))
//   );

//<h1>State lifting up vol. 2</h1>
{
  /* count={count} */
}
{
  /* we can use state only within component - uplift State is the solution */
}
{
  /* <Counter displayValue={count} onTofu={handleOnClick} /> */
}
{
  /* displayValue usually will be count, onTofu is onClick */
}
{
  /* <div className="card">
        <p> */
}
{
  /* if we want to use state of the component elsewhere outside componentelement, 
           we need to up uplift state have state in main app.jsx
            "give it as parameter to a component function" */
}
{
  /* Current count is at: <code>{count}</code>
        </p>
      </div> */
}

// <ul>
//   {students.map((student) => (
//     <li key={student.id}>
//       {student.firstname} {student.lastname}{" "}
//       <span onClick={() => toggleAbsent(student.id)}>
//         {student.absent === true
//           ? "✅"
//           : student.absent === false
//           ? "✖️"
//           : "🟣"}
//       </span>
//       <button onClick={() => handleRemoveStudent(student.id)}>
//         Remove
//       </button>
//     </li>
//   ))}
// </ul>
// <button onClick={handleAddStudent}>add new student</button>
