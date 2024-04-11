"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [input, setInput] = useState('');
  const [results, setResults] = useState<{
    results: string[];
    duration: number
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if(!input) return setResults(undefined);

      const res = await fetch(`/api/search?q=${input}`);
    }
    fetchData()
  }, [input])

  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="text-zinc-500"
      />
    </div>
  );
    
}
