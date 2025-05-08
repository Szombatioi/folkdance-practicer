"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { DanceType } from "@shared/dance-type";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditDanceTypeDialog from "./EditDanceTypeDialog";

export default function NewDanceTypePage() {
  const [danceTypeName, setDanceTypeName] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(0);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  );

  const router = useRouter();

  const [danceTypes, setDanceTypes] = useState<DanceType[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDanceType, setSelectedDanceType] = useState<DanceType | null>(
    null
  );

  const fetchDanceTypes = async () => {
    const response = await axios.get("http://localhost:3001/dance-types");
    if (response.status >= 200 && response.status < 300) {
      setDanceTypes(
        response.data.sort((a: DanceType, b: DanceType) =>
          a.danceCategory.name.localeCompare(b.danceCategory.name)
        )
      );
    }
  };

  const isInputValid = () => {
    if (categoryId === 0) {
      return false;
    }

    if (danceTypeName === "" || danceTypeName.length < 2) return false;

    return true;
  };

  const handleCreateButton = async () => {
    if (!isInputValid()) {
      console.log("Error");
      return;
    }

    const payload = {
      name: danceTypeName,
      danceCategoryId: categoryId,
    };
    const response = await axios.post(
      "http://localhost:3001/dance-types",
      payload
    );
    if (response.status >= 200 && response.status < 300) {
      console.log("Sikeres tánctípus létrehozás!"); //TODO snackbar
      //   router.push("/"); //TODO: maybe to danceTypes page
      setDanceTypeName("");
      fetchDanceTypes();
    }
  };

  //get categories from server
  useEffect(() => {
    async function getDanceCategories() {
      try {
        const response = await axios.get(
          "http://localhost:3001/dance-categories"
        ); //TODO: where id ...
        setCategories(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setCategoryId(0);
    getDanceCategories();
  }, []);

  return (
    <>
      {categories.length == 0 ? (
        <LoadingSpinner />
      ) : (
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
                Új tánctípus felvétele
              </Typography>
              <TextField
                fullWidth
                onChange={(e) => setDanceTypeName(e.target.value)}
                value={danceTypeName}
                variant="outlined"
                placeholder="Tánctípus neve"
              ></TextField>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value as number)}
                variant="outlined"
              >
                <MenuItem disabled value={0}>
                  Válassz tánc kategóriát
                </MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
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
                Tánctípusok lekérdezése
              </Typography>
              <Button onClick={() => fetchDanceTypes()} variant="contained">
                Lekérdezés
              </Button>
              {danceTypes.length > 0 && (
                <TableContainer
                  style={{
                    width: "450px",
                    border: "1px solid grey",
                    borderRadius: "8px",
                  }}
                >
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Típus neve</TableCell>
                        <TableCell align="center">
                          Tánc kategória neve
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {danceTypes.map((danceType, index) => (
                        <TableRow key={index}>
                          <TableCell width={24} align="center">
                            {index + 1}
                          </TableCell>
                          <TableCell align="center">{danceType.name}</TableCell>
                          <TableCell align="center">
                            {danceType.danceCategory.name}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => {
                                setSelectedDanceType(danceType);
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
          <EditDanceTypeDialog open={dialogOpen} onClose={() => {setDialogOpen(false); fetchDanceTypes();}} danceType={selectedDanceType} />
        </>
      )}
    </>
  );
}
