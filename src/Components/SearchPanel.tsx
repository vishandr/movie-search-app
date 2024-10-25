import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';

interface SearchPanelProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (e: React.FormEvent) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({
  query,
  setQuery,
  onSearch,
}) => {
  return (
    <div className='w-full h-64 bg-sky-300 p-8 text-center'>
      <h1>Movie Search Application</h1>
      <h3 className='mt-4'>By Vishandr</h3>
      <form
        onSubmit={onSearch}
        className='flex w-full max-w-sm items-center space-x-2 mx-auto my-4'
      >
        <Input
          type='text'
          placeholder='What you are looking for?'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type='submit'>Search</Button>
      </form>
    </div>
  );
};

export default SearchPanel;
