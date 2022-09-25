import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import React from 'react';
import { Authenticator } from '../services/authenticator';
import { IsUser } from '../interfaces/user';
import Router from 'next/router';

interface State {
    email: string;
    password: string;
}

interface Props {}

class RegisterForm extends React.Component<Props, State> { 
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        const authenticator = new Authenticator();

        authenticator.register(this.state.email, this.state.password)
            .then(response => {
                if (response.status === 201) {
                    console.log(1);
                    Router.push('/login');
                } else {
                    console.log(2);
                }
            })
            .catch(error => { 
                console.log(error)
            });
        
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }

    render() {
        return (
            <Sheet
                sx={{
                maxWidth: 400,
                mx: 'auto',
                my: 4,
                py: 3,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
                }}
            >
                <div>
                    <Typography level="h4" component="h1">
                        <b>Welcome!</b>
                    </Typography>
                    <Typography level="body2"> Sign up to continue</Typography>
                </div>
                <TextField
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                />
                <TextField 
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    onChange={this.onChange}
                    value={this.state.password}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    onClick={this.submit}
                    sx={{
                        mt: 1,
                    }}
                >
                    Register
                </Button>
                <Typography
                    endDecorator={<Link href="/login">Sign in</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Already have an account?
                </Typography>
            </Sheet>
        );
    }
}

export default RegisterForm;