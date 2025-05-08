"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Edit, Label } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputLabel,
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
import { Land } from "@shared/land";
import { Region } from "@shared/region";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditLandDialog from "./EditLandDialog";

export default function NewlandPage() {
  const [landName, setlandName] = useState<string>("");
  const [areaId, setareaId] = useState<number>(0); //TODO: get areas from server and set the id
  const [areas, setareas] = useState<{ id: number; name: string, region: Region }[]>([]); //TODO: create area type

  const router = useRouter();

  const [lands, setLands] = useState<Land[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedLand, setSelectedLand] = useState<Land | null>(null);

  const fetchLands = async () => {
    const response = await axios.get("http://localhost:3001/land");
    if (response.status >= 200 && response.status < 300) {
      setLands(response.data);
    }
  };

  const isInputValid = () => {
    if (areaId === 0) {
      return false;
    }

    if (landName === "" || landName.length < 2) return false;

    return true;
  };

  const handleCreateButton = async () => {
    if (!isInputValid()) {
      console.log("Errir");
      return;
    }

    const payload = {
      name: landName,
      areaId: areaId,
    };
    const response = await axios.post("http://localhost:3001/land", payload);
    if (response.status >= 200 && response.status < 300) {
      console.log("Sikeres település létrehozás!"); //TODO snackbar
      router.push("/"); //TODO: maybe to lands page
    }
  };

  //get areas from server
  useEffect(() => {
    async function getareas() {
      try {
        const response = await axios.get("http://localhost:3001/area"); //TODO: where id ...
        setareas(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setareaId(0);
    getareas();
  }, []);

  return (
    <>
      {areas.length == 0 ? (
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
                Új település felvétele
              </Typography>
              <TextField
                fullWidth
                onChange={(e) => setlandName(e.target.value)}
                value={landName}
                variant="outlined"
                placeholder="Település neve"
              ></TextField>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value={areaId}
                onChange={(e) => setareaId(e.target.value as number)}
                variant="outlined"
              >
                <MenuItem disabled value={0}>
                  Válassz tájegységet
                </MenuItem>
                {areas.map((area) => (
                  <MenuItem key={area.id} value={area.id}>
                    {area.name}
                    <span style={{ marginLeft: 8, color: "grey" }}>
                      ({area.region.name})
                    </span>
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
                Települések lekérdezése
              </Typography>
              <Button onClick={() => fetchLands()} variant="contained">
                Lekérdezés
              </Button>
              {lands.length > 0 && (
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
                        <TableCell align="center">
                          Település neve
                        </TableCell>
                        <TableCell align="center">Tájegység neve</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {lands.map((land, index) => (
                        <TableRow key={index}>
                          <TableCell width={24} align="center">
                            {index + 1}
                          </TableCell>
                          <TableCell align="center">{land.name}</TableCell>
                          <TableCell align="center">
                            {land.area.name}
                          </TableCell>
                          <TableCell>
                            <IconButton onClick={() => {
                              setSelectedLand(land);
                              setDialogOpen(true);
                            }}>
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
          <EditLandDialog land={selectedLand} open={dialogOpen} onClose={() => {setDialogOpen(false); fetchLands();}} />
        </>
      )}
    </>
  );
}
