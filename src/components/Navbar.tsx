import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <nav>
      <Box
        sx={{
          height: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Link to="/" color="primary">
          <Button size="small">Home</Button>
        </Link>
        <input
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          placeholder="Buscar película..."
        />
        <Link to={`/search?search=${searchInput}`}>
          <Button size="small" variant="contained">
            Search
          </Button>
        </Link>
      </Box>
    </nav>
  );
}
