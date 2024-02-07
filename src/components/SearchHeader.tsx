import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoLogoYoutube } from 'react-icons/io';
import { HiOutlineSearch } from "react-icons/hi";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='w-full justify-between flex p-4 border-b-1 border-neutral-700 mb-4 gap-4'>
      <Link to="/" className='flex items-center'>
        <IoLogoYoutube className='text-brand text-2xl flex self-center'/>
      </Link>
      <form onSubmit={handleSubmit} className='flex w-full items-center gap-4 md:justify-center'>
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='w-full rounded-full p-1 bg-neutral-950 border-neutral-700 border-1 md:w-1/2'
        />
        <button aria-label='search'>
          <HiOutlineSearch className='text-2xl'/>
        </button>
      </form>
    </header>
  );
}
