"use client";
import CustomSnackbar from "@/app/components/customSnackbar";
import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { DanceCategory } from "@shared/dance-category";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EditDanceCategoryDialog from "./EditDanceCategoryDialog";

export default function NewDanceCategoryPage() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "error" | "warning" | "info" | "success"
  >("error");

  const [danceCategories, setDanceCategories] = useState<DanceCategory[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDanceCategory, setSelectedDanceCategory] = useState<DanceCategory | null>(null);

  const fetchDanceCategories = async () => {
    const response = await axios.get("http://localhost:3001/dance-categories");
    if (response.status >= 200 && response.status < 300) {
      setDanceCategories(response.data);
    }
  };

  const [dcName, setDcName] = useState<string>("");
  const router = useRouter();
  const handleCreateButton = async () => {
    const payload = {
      name: dcName,
    };
    const response = await axios.post(
      "http://localhost:3001/dance-categories",
      payload
    );
    if (response.status >= 200 && response.status < 300) {
      setSnackbarMessage("Kategória sikeresen létrehozva!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      // router.push("/") //TODO: maybe to dialects page
      setDcName("");
      fetchDanceCategories();
    } else {
      setSnackbarMessage("Hiba történt a kategória létrehozása során!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Box margin={4} justifySelf="center" alignSelf="center">
        <Paper
          elevation={3}
          sx={{
            alignItems: "center",
            paddingY: 4,
            paddingX: 8,
            flexDirection: "column",
            display: "flex",
            gap: 2,
            flexGrow: 0,
          }}
        >
          <Typography variant="h4" align="center">
            Új tánc kategória felvétele
          </Typography>
          <TextField
            onChange={(e) => setDcName(e.target.value)}
            value={dcName}
            variant="outlined"
            placeholder="Kategória neve"
          ></TextField>
          <Button onClick={() => handleCreateButton()} variant="contained">
            Létrehozás
          </Button>
        </Paper>
      </Box>
      <Box margin={4} justifySelf="center" alignSelf="center">
        <Paper
          elevation={3}
          sx={{
            alignItems: "center",
            paddingY: 4,
            paddingX: 8,
            flexDirection: "column",
            display: "flex",
            gap: 2,
            flexGrow: 0,
          }}
        >
          <Typography variant="h4" align="center">
            Tánc kategóriák lekérdezése
          </Typography>
          <Button onClick={() => fetchDanceCategories()} variant="contained">
            Lekérdezés
          </Button>
          {danceCategories.length > 0 && (
            <TableContainer
              style={{
                width: "300px",
                border: "1px solid grey",
                borderRadius: "8px",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="center">
                      Kategória neve
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {danceCategories.map((danceCategory, index) => (
                    <TableRow key={index}>
                      <TableCell width={24} align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">{danceCategory.name}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setSelectedDanceCategory(danceCategory);
                            setDialogOpen(true);
                          }}
                        >
                          <Edit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Box>
      <EditDanceCategoryDialog open={dialogOpen} onClose={() => {setDialogOpen(false); fetchDanceCategories();}} danceCategory={selectedDanceCategory} />
      <CustomSnackbar
        message={snackbarMessage}
        severity={snackbarSeverity}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
      />
    </>
  );
}
