export const filterMovies = (movies, keyWord, isShort) => {
  const filteredMovies = movies.filter((movie) => {
    const nameRu = movie.nameRU && movie.nameRU.toLowerCase().trim();
    const nameEn = movie.nameEN && movie.nameEN.toLowerCase().trim();
    return (
      nameRu.match(keyWord.toLowerCase().trim()) ||
      nameEn.match(keyWord.toLowerCase().trim())
    );
  });

  if (isShort) return filteredMovies.filter((movie) => movie.duration <= 40);

  return filteredMovies;
};
