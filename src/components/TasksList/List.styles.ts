import { ListItem, ListItemText } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { styled } from '@mui/system';

export const StyledListItem = styled(ListItem)`
  &:hover {
    background-color: #f3f3f3;
  }
`;

export const StyledListItemText = styled(ListItemText)(({ checked }) => ({
	textDecoration: checked ? 'line-through' : 'none',
}));

export const DeleteIcon = styled(DeleteForeverIcon)`
  color: #f33a3d;
`;