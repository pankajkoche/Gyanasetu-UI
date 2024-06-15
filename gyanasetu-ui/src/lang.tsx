import React, { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Popover, MenuItem, List, ListItem, ListItemText, colors } from '@mui/material';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string>(i18n.language);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lng: string) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'language-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {language==='hi'?("hindi"):('English')}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem onClick={() => handleLanguageChange('en')}>
            <ListItemText primary="English" />
          </ListItem>
          <ListItem onClick={() => handleLanguageChange('hi') }>
            <ListItemText primary="Hindi" />
          </ListItem>
        </List>
      </Popover>
    </div>
  );
};

export default LanguageSwitcher;
