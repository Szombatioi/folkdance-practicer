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
import { Region } from "@shared/region";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import EditRegionDialog from "./EditRegionDialog";

export default function NewregionPage() {
  const [regionName, setRegionName] = useState<string>("");
  const [dialectId, setDialectId] = useState<number>(0); //TODO: get dialects from server and set the id
  const [dialects, setDialects] = useState<{ id: number; name: string }[]>([]); //TODO: create dialect type

  const [regions, setRegions] = useState<Region[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const fetchRegions = async () => {
    const response = await axios.get("http://localhost:3001/region");
    if (response.status >= 200 && response.status < 300) {
      setRegions(response.data);
    }
  };

  const router = useRouter();

  const isInputValid = () => {
    if (dialectId === 0) {
      return false;
    }

    if (regionName === "" || regionName.length < 2) return false;

    return true;
  };

  const handleCreateButton = async () => {
    if (!isInputValid()) {
      console.log("Errir");
      return;
    }

    const payload = {
      name: regionName,
      dialectId: dialectId,
    };
    const response = await axios.post("http://localhost:3001/region", payload);
    if (response.status >= 200 && response.status < 300) {
      console.log("Sikeres dialektus létrehozás!"); //TODO snackbar
      // router.push("/") //TODO: maybe to regions page
      setRegionName("");
      fetchRegions();
    }
  };

  //get dialects from server
  useEffect(() => {
    async function getDialects() {
      try {
        const response = await axios.get("http://localhost:3001/dialect"); //TODO: where id ...
        setDialects(response.data);
      } catch (error) {
        //TODO snackbar
      }
    }
    setDialectId(0);
    getDialects();
  }, []);

  return (
    <>
      {dialects.length == 0 ? (
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
                Új régió felvétele
              </Typography>
              <TextField
                fullWidth
                onChange={(e) => setRegionName(e.target.value)}
                value={regionName}
                variant="outlined"
                placeholder="Régió neve"
              ></TextField>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value={dialectId}
                onChange={(e) => setDialectId(e.target.value as number)}
                variant="outlined"
              >
                <MenuItem disabled value={0}>
                  Válassz dialektust
                </MenuItem>
                {dialects.map((dialect) => (
                  <MenuItem key={dialect.id} value={dialect.id}>
                    {dialect.name}
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
                Régiók lekérdezése
              </Typography>
              <Button onClick={() => fetchRegions()} variant="contained">
                Lekérdezés
              </Button>
              {regions.length > 0 && (
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
                        <TableCell>
                          #
                        </TableCell>
                        <TableCell align="center">
                          Régió neve
                        </TableCell>
                        <TableCell align="center">Dialektus neve</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {regions.map((region, index) => (
                        <TableRow key={index}>
                          <TableCell width={24} align="center">
                            {index + 1}
                          </TableCell>
                          <TableCell align="center">{region.name}</TableCell>
                          <TableCell align="center">
                            {region.dialect.name}
                          </TableCell>
                          <TableCell align="center">
                            <IconButton onClick={() => {
                              setSelectedRegion(region);
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
          <EditRegionDialog region={selectedRegion} open={dialogOpen} onClose={() => {setDialogOpen(false); fetchRegions();}} />
        </>
      )}
    </>
  );
}
