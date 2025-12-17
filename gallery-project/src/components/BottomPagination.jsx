import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BottomPagination = ({page, handleChange}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 ">
      <div className="bg-zinc-900 border-t border-zinc-700 py-4">
        <Stack alignItems="center">
          <Pagination
            count={80}
            page={page}
            onChange={handleChange}
            shape="rounded"
            sx={{
              // 🔹 Normal buttons
              "& .MuiPaginationItem-root": {
                color: "#e5e7eb", // light gray text
                borderColor: "#555",
              },

              // 🔵 Selected (clicked) button
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#2563eb", // blue
                color: "#ffffff", // white text
              },

              // 🔵 Hover on selected (same rahe)
              "& .MuiPaginationItem-root.Mui-selected:hover": {
                backgroundColor: "#2563eb",
              },

              // 🔹 Hover on non-selected
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "#1e293b",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
};

export default BottomPagination;
