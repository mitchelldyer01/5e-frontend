import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import React from 'react';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

interface LoginState {
    email: string;
    password: string;
}

interface LoginProps {}

class LoginForm extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.state = {email: '', password: ''};
    }

    changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: e.target.value});
    }

    changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: e.target.value});
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
                    <Typography level="body2"> Sign in to continue</Typography>
                </div>
                <TextField
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    label="Email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                />
                <TextField 
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    onChange={this.changePassword}
                    value={this.state.password}
                />
                <Button
                    variant="outlined"
                    sx={{
                        mt: 1,
                    }}
                >
                    Log in
                </Button>
                <Typography
                    endDecorator={<Link href="/register">Sign up</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    Don&apos;t have an account?
                </Typography>
            </Sheet>
        );
    };
}

export default LoginForm;