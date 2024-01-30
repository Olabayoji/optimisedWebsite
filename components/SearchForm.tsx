
'use client'
import Image from 'next/image'
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Input } from './ui/input';

type Props = {}

const SearchForm = (props: Props) => {

  
    const [search, setSearch] = useState('');
  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
    <label className="flex-center relative w-full max-w-3xl">
      <Image 
        src="/magnifying-glass.svg"
        className="absolute left-8"
        width={32}
        height={32}
        alt="Search icon"
      />
      <Input 
        className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </label>
  </form>  )
}

export default SearchForm