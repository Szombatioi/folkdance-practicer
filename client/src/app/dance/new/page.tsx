"use client";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dialect } from "@shared/dialect";
import { Region } from "@shared/region";
import { Area } from "@shared/area";
import { Land } from "@shared/land";
import { DanceCategory } from "@shared/dance-category";
import { DanceType } from "@shared/dance-type";

//TODO: if any axios call is null (not found) then handle it
//e.g. if(dialect) ...

//REGION disabled while dialect is null
//AREA disabled while region is null
//...

//Flow logic
//IF autofill is used
//ELSE
//IF category is added, then
//Fetch types, and filter based on category

export default function NewDancePage() {
  const [danceName, setDanceName] = useState<string>("");
  const [danceCategory, setDanceCategory] = useState<DanceCategory|null>(null);
  const [danceType, setDanceType] = useState<DanceType|null>(null);
  const [danceDialect, setDanceDialect] = useState<Dialect|null>(null);
  const [danceRegion, setDanceRegion] = useState<Region|null>(null);
  const [danceArea, setDanceArea] = useState<Area|null>(null);
  const [danceLand, setDanceLand] = useState<Land|null>(null);

  const [dialects, setDialects] = useState<Dialect[]>();
  const [regions, setRegions] = useState<Region[]>();
  const [availableAreas, setAvailableAreas] = useState<Area[]>();
  const [availableLands, setAvailableLands] = useState<Land[]>();
  const [availableCategories, setAvailableCategories] =
    useState<DanceCategory[]>();
  const [availableTypes, setAvailableTypes] = useState<DanceType[]>();

  const handleCreateButtonClick = async () => {
    const payload = {
      name: danceName,
      areaId: danceArea?.id,
      landId: danceLand ? danceLand.id : null,
      danceTypeId: danceType?.id,
    };
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BACKEND_URL + "/dance",
      payload
    );
  };

  const autoFill = async () => {
    try {
      const prediction = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/predict`,
        {
          title: danceName,
        }
      );

      setPredictions(prediction.data);
    } catch (error) {
      //TODO: snackbar
    }
  };

  async function getDialects() {
    try {
      const dialectsRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dialect`
      );
      setDialects(dialectsRes.data);
      console.log(dialectsRes.data);
    } catch (error) {
      //TODO snackbar
    }
  }

  async function getRegions() {
    try {
      const regionsRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/region`
      );
      setRegions(regionsRes.data);
      console.log(regionsRes.data);
    } catch (error) {}
  }

  async function getAreas() {
    try {
      const areasRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/area`
      );
      setAvailableAreas(areasRes.data);
      console.log(areasRes.data);
    } catch (error) {}
  }

  async function getLands() {
    try {
      const landsRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/land`
      );
      setAvailableLands(landsRes.data);
      console.log(landsRes.data);
    } catch (error) {}
  }

  async function getCategories() {
    try {
      const categoriesRes = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/dance-categories`
      );
      setAvailableCategories(categoriesRes.data);
      console.log(categoriesRes.data);
    } catch (error) {}
  }

  async function fetchTypes(): Promise<DanceType[]> {
    const typesRes = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/dance-types`
    );
    return typesRes.data;
  }

  async function getTypes() {
    try {
      const typesRes = await fetchTypes();
      setAvailableTypes(typesRes);
      console.log(typesRes);
    } catch (error) {}
  }

  //Get autocomplete possible values
  useEffect(() => {
    getDialects();
    getRegions();
    getAreas();
    getLands();
    getCategories();
    // getTypes();
  }, []);

  //wrapper function for setCategory()
  const _setDanceCategory = async (category: DanceCategory) => {
    setDanceCategory(category);

    const types = await fetchTypes();
    const filteredTypes = types.filter((t) => t.danceCategory.name == category.name);
    setAvailableTypes(filteredTypes);
  };

  async function fetchLands(): Promise<Land[]> {
    const landsRes = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/land`
    );
    return landsRes.data;
  }

  const _setDanceArea = async (area: Area) => {
    setDanceArea(area);

    const lands = await fetchLands();
    const filteredLands = lands.filter(l => l.area.name === area.name);
    setAvailableLands(filteredLands);

    if(area) setFromArea(area);
    // else{
    //   setDanceDialect(null);
    //   setDanceRegion(null);
    // }
  };

  const setPredictions = async (prediction: {
    dance_type: string;
    area: string;
    land: string[];
  }) => {
    const dts = await axios.get<
      {
        id: number;
        name: string;
        danceCategory: { id: number; name: string };
      }[]
    >(process.env.NEXT_PUBLIC_BACKEND_URL + "/dance-types");
    const dt = dts.data.find((t) => t.name == prediction.dance_type);
    if (dt && dt.danceCategory) {
      _setDanceCategory(dt.danceCategory);
      setDanceType(dt);
    }
    //TODO: else snackbar

    const area = await axios.get<Area>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/area/name/${prediction.area}`);
    if(area) setFromArea(area.data);
    // setDanceLand(prediction.land.length); //TODO: maybe we won't do this afterall...

    console.log(danceCategory);
    console.log(danceType);
    console.log(danceDialect);
    console.log(danceRegion);
    console.log(danceArea);
    console.log(danceLand);
  };

  const setFromArea = async (area: Area) => {
    const structureFrom = "area"; //TODO: could be land too...
    //retrieve area id from backend
    // const areaRes = await axios.get<{
    //   id: number;
    //   name: string /*, TODO others?*/;
    // }>(`${process.env.NEXT_PUBLIC_BACKEND_URL}/area/name/${area.name}`);

    if (!area) {
      //TODO snackbar
      console.log("Area did not found");
      return;
    }

    const structure = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/structure/${structureFrom}/${area.id}`
    );
    setDanceArea(area);
    //TODO if empty

    const dialect = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/dialect/name/${structure.data.dialect}`);
    const region = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/region/name/${structure.data.region}`);
    if(dialect) setDanceDialect(dialect.data); //TODO if empty
    if(region) setDanceRegion(region.data); //TODO if empty
  }

  return (
    <>
      <Box justifySelf="center" alignSelf="center">
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
            Új tánc felvétele
          </Typography>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                onChange={(e) => setDanceName(e.target.value)}
                value={danceName}
                variant="outlined"
                label="Tánc neve"
                required
                sx={{ width: 300 }}
              />
              <IconButton
                onClick={() => autoFill()}
                title="Automatikus kitöltés név alapján"
                sx={{ borderRadius: 0, marginLeft: 1 }}
              >
                <AutoAwesomeIcon />
              </IconButton>
            </div>
          </div>
          <div
            className="divider"
            style={{
              height: "1px",
              width: "50%",
              borderTop: "1px solid black;",
            }}
          ></div>

          {/* Dance category + type */}
          <div
            className="row"
            style={{
              minWidth: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Autocomplete
              disablePortal
              options={availableCategories || []}
              getOptionLabel={(option) => option.name}
              value={
                availableCategories?.find((c) => c.name === danceCategory?.name) ||
                null
              }
              onChange={(e, v) => {
                _setDanceCategory(v!); // update category + filtered types
                setDanceType(null); // clear DanceType
                // setAvailableTypes([]); // clear options
              }}
              sx={{ flex: 1, marginX: 1 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  label="Tánc kategória"
                  variant="outlined"
                />
              )}
            />
            <Autocomplete
              disablePortal
              options={availableTypes || []}
              getOptionLabel={(option) => option.name}
              value={availableTypes?.find((t) => t.name === danceType?.name) || null}
              onChange={(e, v) => setDanceType(v!)}
              sx={{ flex: 1, marginX: 1 }}
              disabled={!danceCategory || danceCategory.name.length === 0}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Tánctípus"
                  required
                  disabled={!danceCategory || danceCategory.name.length === 0}
                />
              )}
            />
          </div>

          {/* Dialect + region */}
          <div
            className="row"
            style={{
              minWidth: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{ marginX: 1, flex: 1 }}
              // onChange={(e) => setDanceDialect(e.target.value)}
              value={danceDialect ? danceDialect?.name : ""}
              variant="outlined"
              label="Dialektus"
              disabled
              required
            />
            <TextField
              sx={{ marginX: 1, flex: 1 }}
              // onChange={(e) => setDanceRegion(e.target.value)}
              value={danceRegion ? danceRegion?.name : ""}
              variant="outlined"
              label="Régió"
              disabled
              required
            />
          </div>

          {/* Area + Land */}
          <div
            className="row"
            style={{
              minWidth: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <TextField
              sx={{ marginX: 1, flex: 1 }}
              onChange={(e) => setDanceArea(e.target.value)}
              value={danceArea}
              variant="outlined"
              label="Tájegység"
            /> */}
            <Autocomplete
              disablePortal
              options={availableAreas || []}
              getOptionLabel={(option) => option.name}
              value={availableAreas?.find((c) => c.name === danceArea?.name) || null}
              onChange={(e, v) => {
                _setDanceArea(v!);
                setDanceLand(null);

                // _setDanceCategory(v?.name || ""); // update category + filtered types
                // setDanceType(""); // clear DanceType
                // setAvailableTypes([]); // clear options
              }}
              sx={{ flex: 1, marginX: 1 }}
              renderInput={(params) => (
                <TextField {...params} label="Tájegység" variant="outlined" required />
              )}
            />
            {/* <TextField
              sx={{ marginX: 1, flex: 1 }}
              onChange={(e) => setDanceLand(e.target.value)}
              value={danceLand}
              variant="outlined"
              label="Falu/Település"
            /> */}
            <Autocomplete
              disablePortal
              options={availableLands || []}
              getOptionLabel={(option) => option.name}
              value={availableLands?.find((t) => t.name === danceLand?.name) || null}
              onChange={(e, v) => setDanceLand(v!)}
              sx={{ flex: 1, marginX: 1 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Falu/Település"
                />
              )}
            />
          </div>
          <div className="row">
            <Button
              variant="contained"
              onClick={() => handleCreateButtonClick()}
            >
              Létrehozás
            </Button>
          </div>
        </Paper>
      </Box>
    </>
  );
}
