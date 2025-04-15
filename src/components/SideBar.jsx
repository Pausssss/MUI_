import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái tìm kiếm

  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  // Lọc danh sách dựa trên searchTerm
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        position: "fixed",
        width: "360px",
      }}
    >
      {/* Thanh tìm kiếm */}
      <TextField
        placeholder="Tìm kiếm"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật từ khóa
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#808080" }} />
            </InputAdornment>
          ),
          style: {
            color: "#f5f5f5",
            backgroundColor: "#16181c",
            borderRadius: "25px",
            border: "1px solid #f5f5f5", // Viền trắng (tùy chỉnh trước)
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { border: "none" },
          },
        }}
      />

      {/* Tạo khoảng cách 20px */}
      <Box sx={{ height: "20px" }} />

      <Box
        sx={{
          backgroundColor: "#1e2124", // Nền xám đậm (tùy chỉnh trước)
          borderRadius: "25px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginBottom: "150px",
        }}
      >
        {/* Danh sách kết quả tìm kiếm hoặc người liên hệ gần đây */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              color: "#f5f5f5",
            }}
          >
            {searchTerm ? "Kết quả tìm kiếm" : "Người liên hệ gần đây"}
          </Typography>
          <List>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, index) => (
                <ListItem key={index} sx={{ padding: "8px 0" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt={contact.name}
                      src={contact.avatar}
                      sx={{ width: 48, height: 48 }} // Avatar lớn (tùy chỉnh trước)
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        color: "#f5f5f5",
                      },
                    }}
                    primary={contact.name}
                    secondary={contact.username}
                  />
                </ListItem>
              ))
            ) : (
              <Typography sx={{ color: "#f5f5f5", padding: "8px 0" }}>
                Không tìm thấy người dùng
              </Typography>
            )}
          </List>
          {filteredContacts.length > 0 && (
            <Box sx={{ marginTop: "8px" }}>
              <Link
                href="#"
                sx={{
                  color: "#6ec207",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <Typography>Xem thêm</Typography>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;