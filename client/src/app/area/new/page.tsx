"use client";
import LoadingSpinner from "@/app/components/loadingSpinner";
import { Edit, Label } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Button,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TableContainer,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Area } from "@shared/area";
import { Dialect } from "@shared/dialect";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditAreaDialog from "./EditAreaDialog";

export default function NewareaPage() {
  const [areaName, setareaName] = useState<string>("");
  const [regionId, setregionId] = useState<number>(0); //TODO: get regions from server and set the id
  const [regions, setregions] = useState<
    { id: number; name: string; dialect: Dialect }[]
  >([]); //TODO: create region type

  const [areas, setAreas] = useState<Area[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);

  const fetchAreas = async () => {
    const response = await axios.get("http://localhost:3001/area");
    if (response.status >= 200 && response.status < 300) {
      setAreas(response.data);
    }
  };

  const router = useRouter();

  const isInputValid = () => {
    if (regionId === 0) {
      return false;
    }

    if (areaName === "" || areaName.length < 2) return false;

    return true;
  };

  const handleCreateButton = async () => {
    if (!isInputValid()) {
      console.log("Errir");
      return;
    }

    const payload = {
      name: areaName,
      regionId: regionId,
    };
    const response = await axios.post("http://localhost:3001/area", payload);
    if (response.status >= 200 && response.status < 300) {
      console.log("Sikeres tájegység létrehozás!"); //TODO snackbar
      router.push("/"); //TODO: maybe to areas page
    }
  };

  //get regions from server
  useEffect(() => {
    async function getregions() {
      try {
        const response = await axios.get("http://localhost:3001/region"); //TODO: where id ...
        setregions(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setregionId(0);
    getregions();
  }, []);

  return (
    <>
      {regions.length == 0 ? (
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
                Új tájegység felvétele
              </Typography>
              <TextField
                fullWidth
                onChange={(e) => setareaName(e.target.value)}
                value={areaName}
                variant="outlined"
                placeholder="Tájegység neve"
              ></TextField>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value={regionId}
                onChange={(e) => setregionId(e.target.value as number)}
                variant="outlined"
              >
                <MenuItem disabled value={0}>
                  Válassz régiót
                </MenuItem>
                {regions.map((region) => (
                  <MenuItem key={region.id} value={region.id}>
                    {region.name}
                    <span style={{ marginLeft: 8, color: "grey" }}>
                      ({region.dialect.name})
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
                Tájegységek lekérdezése
              </Typography>
              <Button onClick={() => fetchAreas()} variant="contained">
                Lekérdezés
              </Button>
              {areas.length > 0 && (
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
                        <TableCell align="center">Tájegység neve</TableCell>
                        <TableCell align="center">Régió neve</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {areas.map((area, index) => (
                        <TableRow key={index}>
                          <TableCell width={24} align="center">
                            {index + 1}
                          </TableCell>
                          <TableCell align="center">{area.name}</TableCell>
                          <TableCell align="center">
                            {area.region.name}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => {
                                setSelectedArea(area);
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
          <EditAreaDialog
            area={selectedArea}
            open={dialogOpen}
            onClose={() => {
              setDialogOpen(false);
              fetchAreas();
            }}
          />
        </>
      )}
    </>
  );
}
