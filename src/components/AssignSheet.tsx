import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Sector } from '../types/Sector';
import { MdArrowForwardIos } from 'react-icons/md';
import AssignSheetHead from './AssignSheetHead';
import AssignSheetCard from './AssignSheetCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};
interface assignSheetProps {
    sector: Sector;
}
const AssignSheet: React.FC<assignSheetProps> = ({ sector }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen} className="rounded-md px-2 py-1 text-sm text-green-500 bg-green-100">Assign Sheet</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 850 }} className={`bg-white shadow-lg rounded-md`}>
                    <h1 id="parent-modal-title" className='border-b-2 p-3 font-bold'>Assign Sheet</h1>
                    {sector.category.length !== 0 &&
                        <p id="parent-modal-description" className='flex m-5 bg-neutral-100 p-2 rounded-sm'>
                            <div className="text-sm text-gray-400 mx-3">{sector.category}</div>
                            {sector.field.length !== 0 && <div className="text-sm font-bold mt-1 text-gray-400"><MdArrowForwardIos /></div>}
                            <div className="text-sm text-gray-400 mx-3">{sector.field}</div>
                            {sector.subCategory.length !== 0 && <div className="text-sm font-bold mt-1 text-gray-400"><MdArrowForwardIos /></div>}
                            <div className="text-sm text-gray-400 mx-3">{sector.subCategory}</div>
                            {sector.division.length !== 0 && <div className="text-sm font-bold mt-1 text-gray-400"><MdArrowForwardIos /></div>}
                            <div className="text-sm text-gray-400 mx-3">{sector.division}</div>
                            {sector.subDivision.length !== 0 && <div className="text-sm font-bold mt-1 text-gray-400"><MdArrowForwardIos /></div>}
                            <div className="text-sm text-gray-400 mx-3">{sector.subDivision}</div>
                        </p>
                    }
                    <div className='p-4'>
                        <AssignSheetHead text="Tier 1" />
                        <div className='flex justify-between'>
                            <AssignSheetCard text="Custom Sheet A" tag='Tier 1' />
                            <AssignSheetCard text="Custom Sheet B" tag='Tier 2' />
                            <AssignSheetCard text="Custom Sheet C" tag='Tier 3' />
                        </div>
                    </div>
                    <div className='p-4'>
                        <AssignSheetHead text="Tier 1" />
                        <div className='flex justify-between'>
                            <AssignSheetCard text="Custom Sheet A" tag='Tier 1' />
                            <AssignSheetCard text="Custom Sheet B" tag='Tier 2' />
                            <AssignSheetCard text="Custom Sheet C" tag='Tier 3' />
                        </div>
                    </div>
                    <div className='p-4'>
                        <AssignSheetHead text="Tier 1" />
                        <div className='flex'>
                            <AssignSheetCard text="Custom Sheet A" tag='Tier 1' />
                            <AssignSheetCard text="Custom Sheet B" tag='Tier 2' />
                        </div>
                    </div>
                    <div className='p-4 flex justify-end border-t-2'>
                        <div>
                            <button
                                data-ripple-dark="true"
                                data-dialog-close="true"
                                className="px-6 py-3 mr-4 font-sans text-xs font-bold text-gray-400 bg-gray-100 uppercase transition-all rounded-lg
            middle none center hover:bg-grey-500/10 active:bg-grey-500/30 disabled:pointer-events-none disabled:opacity-50
            disabled:shadow-none"
                                onClick={handleClose}
                            >
                                Discard
                            </button>
                            <button
                                data-ripple-light="true"
                                data-dialog-close="true"
                                className="middle none center rounded-lg bg-gradient-to-tr bg-green-500  py-3 px-8 font-sans text-xs font-bold uppercase
                text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-600/40
                active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
export default AssignSheet