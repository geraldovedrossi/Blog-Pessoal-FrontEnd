import React, {ChangeEvent, useState, useEffect} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';
import { toast } from 'react-toastify';

function Login() {

    let history = useHistory();

    const [token, setToken] = useState('');

    const dispatch = useDispatch();

    dispatch(addToken(token))

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id:0,
        nome: "",
        usuario:"",
        senha:"",
        foto: "",
        token:""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

        useEffect(()=> {
            if(token !== "") {
                history.push('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();

        try{
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }catch(error){
            toast.error("Dados do usuário inconsistentes, erro ao logar.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imagem'>
            <Grid item xs={6} className='bg-text'>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textosL'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' className='textBoxL' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' className='textBoxL' fullWidth />
                        <Box marginTop={2} textAlign='center'>

                                <Button type='submit' variant='contained' className='button'>
                                    Logar
                                </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                                Cadastre-se
                            </Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid xs={6}  />
        </Grid>
    );
}

export default Login;