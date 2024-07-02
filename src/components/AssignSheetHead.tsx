import React from 'react'
import { GoPlus } from 'react-icons/go';
interface assignSheetHeadProps {
    text: string;
}
const AssignSheetHead: React.FC<assignSheetHeadProps> = ({ text }) => {
    return (
        <div className='flex justify-between'>
            <div className='font-bold'>{text}</div>
            <div className='flex'>
                <button><GoPlus className="h-4 w-4 mr-2 mt-1 text-green-500 bg-green-100 rounded-full" /></button>
                <button className='text-green-500 text-sm'>Create New Sheet</button>
            </div>
        </div>
    )
}
export default AssignSheetHead;