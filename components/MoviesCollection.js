import MovieThumbnail from './MovieThumbnail';

function MoviesCollection({ results, title }) {
  return (
    <div className="relative my-10 mx-auto flex max-w-[1400px] flex-col space-y-2 px-8">
      <h2 className="font-semibold">{title}</h2>
      <div className="scrollbar-hide -m-2 flex space-x-6 overflow-y-hidden overflow-x-scroll p-2">
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection;
