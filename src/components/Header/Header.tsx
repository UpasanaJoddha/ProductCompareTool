
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Moon, Sun, Smartphone, Search as SearchIcon } from 'lucide-react';
import styles from './Header.module.css';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ searchTerm, setSearchTerm, darkMode, toggleDarkMode }:HeaderProps) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`${styles.headerRoot} ${darkMode ? styles.dark : styles.light}`}
    >
      <Toolbar className={styles.toolbar}>
      
        <div className={styles.brand}>
          <Smartphone size={26} className={styles.brandIcon} />
          <Typography variant="h6" className={styles.brandText}>
            SmartPhone Compare
          </Typography>
        </div>

       
        <div className={styles.actions}>
          <TextField
            // variant="outlined"
            placeholder="Search Phones..."
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchField}
            sx={{'& .MuiOutlinedInput-notchedOutline': { border: 'none' }}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon size={18} className={styles.searchIcon} />
                </InputAdornment>
              ),
            }}
          />

          <IconButton onClick={toggleDarkMode} aria-label="toggle theme" className={styles.themeBtn}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
