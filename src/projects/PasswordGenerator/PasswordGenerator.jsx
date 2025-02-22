import React, { useState, useCallback, useEffect, useRef } from "react";


function PasswordGenerator() {
    
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("ILoveReact");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()_+=-[]{}|;:'\",.<>/?";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, number, char]);

  useEffect(() => {
    if (length !== 8 || number || char) {
      generatePassword();
    }
  }, [length, number, char, generatePassword]);

  return (

    
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 pt-0 -mt-20">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-6 bg-gray-800 text-orange-500">
        <h1 className="text-3xl font-bold text-center text-white mb-5">Password Generator</h1>

        <div className="flex items-center shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-600 rounded-lg"
            readOnly
          />
          <button onClick={copyToClipboard} className="ml-3 px-4 py-2 bg-orange-500 text-white font-semibold">
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="text-white">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
              className="accent-orange-500"
            />
            <label className="text-white">Include Numbers</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={char}
              onChange={() => setChar((prev) => !prev)}
              className="accent-orange-500"
            />
            <label className="text-white">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
