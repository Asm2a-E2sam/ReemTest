import React from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import { styled, alpha } from '@mui/material/styles';
import { Sector } from '../types/Sector';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
  color:
    theme.palette.mode === 'light'
      ? theme.palette.grey[800]
      : theme.palette.grey[200],

  [`& .${treeItemClasses.content}`]: {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.5, 1),
    margin: theme.spacing(0.2, 0),
    [`& .${treeItemClasses.label}`]: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
  },
  [`& .${treeItemClasses.iconContainer}`]: {
    borderRadius: '50%',
    backgroundColor:
      theme.palette.mode === 'light'
        ? alpha(theme.palette.primary.main, 0.25)
        : theme.palette.primary.dark,
    color: theme.palette.mode === 'dark' && theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1.2),
  },
  [`& .${treeItemClasses.groupTransition}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

interface TreeViewDialogProps {
  open: boolean;
  onClose: () => void;
  sector: Sector;
}

const TreeViewDialog: React.FC<TreeViewDialogProps> = ({ open, onClose, sector }) => {
  return (
    <Dialog open={open}>
      <h6 className='p-7 pb-0 font-bold text-gray-600'>View Tree</h6>
      <Box sx={{ minHeight: 500, minWidth: 550, padding: 2 }}>
        <Box
          sx={{
            height: 430,
            overflowY: 'auto',
            border: '1px solid #e0e0e0',
            borderRadius: '5px',
            padding: 2,
          }}
        >
          <SimpleTreeView
            defaultExpandedItems={['sector-name']}
            slots={{
              expandIcon: AddBoxIcon,
              collapseIcon: IndeterminateCheckBoxIcon,
            }}
          >
            <CustomTreeItem itemId={`sector-${sector.name}`} label={sector.name}>
              {sector.category.map((cat, catIndex) => (
                <CustomTreeItem key={`category-${catIndex}`} itemId={`category-${catIndex}`} label={cat}>
                  {sector.subCategory.map((subCat, subCatIndex) => (
                    <CustomTreeItem key={`subCategory-${subCatIndex}`} itemId={`subCategory-${catIndex}-${subCatIndex}`} label={subCat}>
                      {sector.division.map((div, divIndex) => (
                        <CustomTreeItem key={`division-${divIndex}`} itemId={`division-${catIndex}-${subCatIndex}-${divIndex}`} label={div}>
                          {sector.subDivision.map((subDiv, subDivIndex) => (
                            <CustomTreeItem key={`subDivision-${subDivIndex}`} itemId={`subDivision-${catIndex}-${subCatIndex}-${divIndex}-${subDivIndex}`} label={subDiv} />
                          ))}
                        </CustomTreeItem>
                      ))}
                    </CustomTreeItem>
                  ))}
                </CustomTreeItem>
              ))}
            </CustomTreeItem>
          </SimpleTreeView>
        </Box>
        <div className='text-end'>
          <button
            role="button"
            onClick={onClose}
            className="my-5 px-5 py-1 bg-gray-200 rounded text-gray-600 font-bold"
          >
            Close
          </button>
        </div>
      </Box>
    </Dialog>
  );
};

export default TreeViewDialog;
