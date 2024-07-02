import React from 'react'
interface assignSheetCardProps {
    text: string;
    tag: string;
}
const AssignSheetCard: React.FC<assignSheetCardProps> = ({ text, tag }) => {
    return (
        <div className='border border-gray-200 rounded-md p-2 mt-2 w-64 mx-3 h-16'>
            <div className='flex justify-between'>
            <div>
            <div className='text-sm mb-2'>{text}</div>
            <div className='text-sm'>Tag, {tag}</div>
            </div>
            <button className="rounded-md h-fit mt-3 px-2 py-1 text-sm text-green-500 bg-green-50 justify-items-centerr">Assign</button>
            </div>
        </div>
    )
}
export default AssignSheetCard