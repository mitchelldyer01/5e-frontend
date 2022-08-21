import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

export default function RegisterForm() {
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
            />
            <TextField 
                name="password"
                type="password"
                placeholder="password"
                label="Password"
            />
            <Button
                variant="outlined"
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