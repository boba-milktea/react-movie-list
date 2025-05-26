type InputProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ handleSubmit, query, setQuery }: InputProps) => {
  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-5 w-full px-4"
    >
      <label htmlFor="task" className="sr-only">
        Search Movie
      </label>
      <input
        value={query}
        type="text"
        id="task"
        name="task"
        className="border-2 p-2 rounded-2xl w-full my-8 md:w-3/5 lg:w-2/5 "
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="p-2 bg-popcorn-yellow rounded-2xl font-bold uppercase border-2 ease-in border-graphite-gray shadow-sm shadow-cloud-gray active:shadow-graphite-gray active:shadow-md active:-translate-y-0.5"
      >
        Search
      </button>
    </form>
  );
};

export default Input;
