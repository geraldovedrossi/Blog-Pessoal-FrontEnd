import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens

    //const token = store.token
    )

    const dispatch = useDispatch();

    let history = useHistory();

    function goLogout() {
        dispatch(addToken(''));
        toast.error('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login');
    }

    var navbarComponent

    if(token !== "") {
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense">
            <Box className='cursor' >
                <Typography variant="h5" color="inherit">
                    BlogPessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to='/home' className='text-decorator-none'>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Box>
                </Link>
                <Link to='/posts' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to='/temas' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                </Link>
                <Link to='/formularioTema' className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

            </Box>

        </Toolbar>
    </AppBar>
    }

    return (
        <>
            { navbarComponent }
        </>
    )
}

export default Navbar;