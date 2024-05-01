const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
app.use(cors());

app.use(express.json());

// Define API endpoint
const API_ENDPOINT = "https://vistaar-api.tekdinext.com/cache/search";

// Route to handle user queries
app.post("/search", async (req, res) => {
  const userInput = req.body;
  console.log(userInput); // Assuming the frontend sends the entire query as JSON

  try {
    // Make request to API with userInput in the request body
    const response = await axios.post(API_ENDPOINT, userInput);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
