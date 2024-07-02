import React, { useState } from 'react';
import SectorRow from './SectorRow';
import { Sector } from '../types/Sector';
import TreeViewDialog from './TreeViewDialog';
import TreeViewIcon from '@mui/icons-material/AccountTree';
import { IoEyeOffOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";
import AssignSheet from './AssignSheet';


interface SectorTableProps {
  sectors: Sector[];
  setSectors: React.Dispatch<React.SetStateAction<Sector[]>>;
}

const SectorTable: React.FC<SectorTableProps> = ({ sectors, setSectors }) => {
  const treeEx: Sector = {
    name: "Custom Sector A",
    category: [
      "custom category A",
      "custom category B",
      "custom category C",
      "custom category D",
    ],
    field: [
      "custom field A",
      "custom field B",
      "custom field C",
    ],
    subCategory: [
      "custom subcategory A",
      "custom subcategory B",
      "custom subcategory C",
    ],
    division: [
      "custom division A",
      "custom division B",
    ],
    subDivision: [
      "custom subDivision A",
    ]

    // 		{
    // 		custom field A	{}
    // 		custom field B	
    // 			{
    // 			custom subcategory A
    // 			custom subcategory B
    // 			custom subcategory C
    // 				{
    // 				custom division A
    // 				custom division B
    // 				}
    // 			}
    // 		custom field C {}
    // 		}
    // 	custom category B {}	
    // 	custom category C {}	
    // 	custom category D {}
    // }
  }
  const [editingIndex, setEditingIndex] = useState<{ field: keyof Sector, index: number } | null>(null);
  const [filledFields, setFilledFields] = useState<Record<number, Set<keyof Sector>>>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null);

  const handleAddItem = (field: keyof Sector, name: string, index: number) => {
    const updatedSectors = sectors.map((sector, i) => {
      if (i === index) {
        let updatedField: string[];
        if (Array.isArray(sector[field])) {
          updatedField = [...sector[field] as string[], name];
        } else {
          updatedField = [sector[field] as string, name];
        }
        return { ...sector, [field]: updatedField };
      }
      return sector;
    });
    setSectors(updatedSectors);
    setEditingIndex(null);

    setFilledFields(prev => {
      const newFilledFields = { ...prev };
      if (!newFilledFields[index]) {
        newFilledFields[index] = new Set<keyof Sector>();
      }
      newFilledFields[index].add(field);
      return newFilledFields;
    });
  };


  const isFieldFilled = (index: number, field: keyof Sector) => {
    return filledFields[index]?.has(field);
  };

  const handleTreeViewClick = (sector: Sector) => {
    setSelectedSector(sector);
    setDialogOpen(true);
  };

  return (
    <div className="container mx-auto px-4 ms-14 w-[95vw]">
      {sectors.map((sector, index) => (
        <div key={index} className="mb-4 bg-white p-2 shadow-md rounded-md hover:border-2 border-green-500">
          <div className="flex justify-between items-center mb-2">
            <div className="flex">
              <div className="text-lg font-bold mt-2 text-gray-400"><MdArrowForwardIos /></div>
              <div className="text-xl font-bold mx-3">{sector.name}</div>
              {sector.category.length !== 0 && <div className="text-sm font-bold mt-2 text-gray-400"><MdArrowForwardIos /></div>}
              <div className="text-sm text-gray-400 mx-3">{sector.category}</div>
              {sector.field.length !== 0 && <div className="text-sm font-bold mt-2 text-gray-400"><MdArrowForwardIos /></div>}
              <div className="text-sm text-gray-400 mx-3">{sector.field}</div>
              {sector.subCategory.length !== 0 && <div className="text-sm font-bold mt-2 text-gray-400"><MdArrowForwardIos /></div>}
              <div className="text-sm text-gray-400 mx-3">{sector.subCategory}</div>
              {sector.division.length !== 0 && <div className="text-sm font-bold mt-2 text-gray-400"><MdArrowForwardIos /></div>}
              <div className="text-sm text-gray-400 mx-3">{sector.division}</div>
              {sector.subDivision.length !== 0 && <div className="text-sm font-bold mt-2 text-gray-400"><MdArrowForwardIos /></div>}
              <div className="text-sm text-gray-400 mx-3">{sector.subDivision}</div>
            </div>
            <div className="flex">
              <AssignSheet sector={sector} />
              <button onClick={() => handleTreeViewClick(sector)} className="mr-2">
                <TreeViewIcon className="h-6 w-6 bg-gray-200 p-1 ml-5 text-gray-700" />
              </button>
              <div>
                <IoEyeOffOutline className="h-6 w-6 bg-gray-200 p-1 mt-1 text-gray-700" role='button' />
              </div>
            </div>
          </div>
          <table className="min-w-full bg-white border border-gray-300 px-4 py-2">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-[.8vw] text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Category</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'category', index })}
                      className={isFieldFilled(index, 'category') ? 'hidden' : ''}
                    >
                      <GoPlus className="h-6 w-6 text-green-500 bg-green-100" />
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2 text-[.8vw] text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Field</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'field', index })}
                      className={isFieldFilled(index, 'category') && !isFieldFilled(index, 'field') ? '' : 'hidden'}
                    >
                      <GoPlus className="h-6 w-6 text-green-500 bg-green-100" />
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2 text-[.8vw] text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Sub Category</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'subCategory', index })}
                      className={isFieldFilled(index, 'field') && !isFieldFilled(index, 'subCategory') ? '' : 'hidden'}
                    >
                      <GoPlus className="h-6 w-6 text-green-500 bg-green-100" />
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2 text-[.8vw] text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Division</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'division', index })}
                      className={isFieldFilled(index, 'subCategory') && !isFieldFilled(index, 'division') ? '' : 'hidden'}
                    >
                      <GoPlus className="h-6 w-6 text-green-500 bg-green-100" />
                    </button>
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2 text-[.8vw] text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Sub Division</span>
                    <button
                      onClick={() => setEditingIndex({ field: 'subDivision', index })}
                      className={isFieldFilled(index, 'division') && !isFieldFilled(index, 'subDivision') ? '' : 'hidden'}
                    >
                      <GoPlus className="h-6 w-6 text-green-500 bg-green-100" />
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <SectorRow
                sector={sector}
                index={index}
                onAddItem={handleAddItem}
                editingIndex={editingIndex}
                setEditingIndex={setEditingIndex}
              />
            </tbody>

          </table>
        </div>
      ))}
      {dialogOpen && selectedSector && (
        <TreeViewDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          sector={treeEx}
        />
      )}
    </div>
  );
};

export default SectorTable;
