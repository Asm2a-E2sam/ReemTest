import React, { useState } from 'react';
import { Sector } from '../types/Sector';
import { MdOutlineCheck } from "react-icons/md";
import { IoClose } from "react-icons/io5";
interface SectorInputRowProps {
  field: keyof Sector;
  index: number;
  onAddItem: (field: keyof Sector, name: string, index: number) => void;
  onCancel: () => void;
}

const SectorInputRow: React.FC<SectorInputRowProps> = ({ field, index, onAddItem, onCancel }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAddItem(field, name, index);
      setName('');
    }
  };

  return (
    <div className="w-16 bg-gray-100 px-4">
    <div className="flex w-fit bg-gray-100 px-4">
      <input
        type="text"
        className="w-fit outline-none bg-gray-100"
        placeholder={`Add ${String(field)}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div >
      </div>
      <button onClick={onCancel} className="close-btn mr-2">
        <IoClose className="text-white bg-gray-700 rounded-full text-lg" />
      </button>
      <button onClick={handleAdd} className="check-btn">
        <MdOutlineCheck className="text-white bg-green-500 rounded-full text-lg" />
      </button>
    </div>
    </div>
  );
};

export default SectorInputRow;
