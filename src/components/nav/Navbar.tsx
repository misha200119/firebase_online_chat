/* eslint-disable no-shadow */
import React, { FC, memo } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChatIcon from '@mui/icons-material/Chat';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useAuth } from '../../hooks/useAuth';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/typedReduxHooks';
import { RoutesURLs } from '../../utils/routes';

enum Pages {
  CHAT = 'Chat',
  HOME = 'Home',
  VIDEOCHAT = 'Videochat',
}

enum UserSettingsDropdown {
  PROFILE = 'Profile',
  LOGOUT = 'Logout',
}

export const Navbar: FC<{}> = memo(() => {
  const { isAuth: isLoggedIn, user, auth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: Pages | null) => {
    if (page) {
      navigate(page.toLowerCase());
    }

    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = async (setting: UserSettingsDropdown) => {
    switch (setting) {
      case UserSettingsDropdown.LOGOUT:
        if (auth) {
          await auth.signOut();
          dispatch(removeUser());
        }

        break;
      default:
        // throw new Error('unexpected selected menu option');
        break;
    }

    setAnchorElUser(null);
  };

  return (
    <header>
      <AppBar
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ChatIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Chat
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => {
                  handleCloseNavMenu(null);
                }}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {Object.values(Pages).map((page) => (
                  <MenuItem
                    key={nanoid()}
                    onClick={() => {
                      handleCloseNavMenu(page);
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ChatIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Chat
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Object.values(Pages).map((page) => (
                <MenuItem
                  key={nanoid()}
                  onClick={() => {
                    handleCloseNavMenu(page);
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {
                isLoggedIn && user
                  ? (
                    <>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                          <Avatar alt="User Avatar" src={user.photoURL || ''} />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                        {Object.values(UserSettingsDropdown).map((setting) => (
                          <MenuItem
                            key={nanoid()}
                            onClick={() => {
                              handleCloseUserMenu(setting);
                            }}
                          >
                            <Typography textAlign="center">{setting}</Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  )
                  : (
                    <NavLink
                      to={RoutesURLs.LOGIN}
                      style={() => (
                        {
                          color: '#fff',
                        }
                      )}
                    >
                      <LoginIcon />
                    </NavLink>
                  )
              }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
});
