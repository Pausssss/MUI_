import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const SearchResults = ({ users }) => {
  return (
    <Box sx={{ maxWidth: "600px", margin: "0 auto", padding: "16px" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#f5f5f5", mb: 2 }}
      >
        Kết quả tìm kiếm
      </Typography>
      <List>
        {users.length > 0 ? (
          users.map((user, index) => (
            <ListItem key={index} sx={{ padding: "8px 0" }}>
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.avatar} sx={{ width: 48, height: 48 }} />
              </ListItemAvatar>
              <ListItemText
                sx={{ "& .MuiTypography-root": { color: "#f5f5f5" } }}
                primary={user.name}
                secondary={user.username}
              />
            </ListItem>
          ))
        ) : (
          <Typography sx={{ color: "#f5f5f5" }}>
            Không tìm thấy người dùng
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default SearchResults;