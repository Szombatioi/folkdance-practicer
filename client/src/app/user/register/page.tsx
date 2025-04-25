"use client";

import CustomSnackbar from "@/app/components/customSnackbar";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useState } from "react";

export default function Register() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"error" | "warning" | "info" | "success">("error");

    const router = useRouter();

    const isInputValid = () => {
        if (password !== passwordAgain) {
            setSnackbarMessage("A jelszavak nem egyeznek meg!");
            setSnackbarSeverity("error");
            return false;
        }

        if(password.length < 6) {
            setSnackbarMessage("A jelszónak legalább 6 karakter hosszúnak kell lennie!");
            setSnackbarSeverity("error");
            return false;
        }

        if (email === "" || username === "" || name === "" || password === "") {
            setSnackbarMessage("Kérjük, töltse ki az összes mezőt!");
            setSnackbarSeverity("error");
            return false;
        }

        if (!email.includes("@")) {
            setSnackbarMessage("Kérjük, adjon meg egy érvényes email címet!");
            setSnackbarSeverity("error");
            return false;
        }

        if (username.length < 3) {
            setSnackbarMessage("A felhasználónév legalább 3 karakter hosszú kell legyen!");
            setSnackbarSeverity("error");
            return false;
        }

        if (name.length < 3) {
            setSnackbarMessage("A név legalább 3 karakter hosszú kell legyen!");
            setSnackbarSeverity("error");
            return false;
        }

        return true;
    }

    const register = async () => {
        if (!isInputValid()) {
            setSnackbarOpen(true);
            return;
        }

        
        try {
            const payload = {
                name: name,
                username: username,
                email: email,
                password: password,
            };

            const response = await axios.post("http://localhost:3001/user/register", payload);

            if (response.status >= 200 && response.status < 300) {
                setSnackbarMessage("Sikeres regisztráció!");
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
                router.push("/");
            }
            else {
                console.log("Sikertelen regisztráció!");
                console.log(response.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Box>
                <TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField value={username} onChange={(e) => setUsername(e.target.value)} label="Felhasználónév" variant="outlined" fullWidth margin="normal" />
                <TextField value={name} onChange={(e) => setName(e.target.value)} label="Név" variant="outlined" fullWidth margin="normal" />
                <TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Jelszó" type="password" variant="outlined" fullWidth margin="normal" />
                <TextField value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} label="Jelszó újra" type="password" variant="outlined" fullWidth margin="normal" />
                <Button onClick={() => register()} variant="contained">Regisztráció</Button>
            </Box>
            <CustomSnackbar
                message={snackbarMessage}
                severity={snackbarSeverity}
                open={snackbarOpen}
                onClose={() => setSnackbarOpen(false)}
            />
        </>
    );
}