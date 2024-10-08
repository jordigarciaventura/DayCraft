"use client";

import { useAppStore } from "@/state/store";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useColorScheme } from "@mui/material/styles";

interface Props {
  initialMode: "system" | "light" | "dark" | undefined;
}

export default function ClientToggleColorMode({ initialMode }: Props) {
  const { setMode } = useColorScheme();

  const storeMode = useAppStore((state) => state.mode);

  const themeMode = storeMode ?? initialMode;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        minHeight: "56px",
      }}
    >
      <FormControl>
        <FormLabel id="demo-theme-toggle">Theme</FormLabel>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={themeMode}
          onChange={(event) =>
            setMode(event.target.value as "system" | "light" | "dark")
          }
        >
          <FormControlLabel value="system" control={<Radio />} label="System" />
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
