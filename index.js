// Sử dụng import thay vì require trong ES Module
import express from "express";
import fetch from "node-fetch"; // Nếu dùng Node 18+ thì fetch đã có sẵn, nhưng nếu Node < 18 thì cần cài node-fetch
import cors from "cors";

const app = express();
app.use(cors());


const headers = {
  Accept: "*/*",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  Origin: "https://cheatnetwork.eu",
  Referer: "https://cheatnetwork.eu/",
};

const cookies = [
  "_ga=GA1.1.1243347547.1758008614",
  "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbmMiOiJVMkZzZEdWa1gxK3crSzNaSU9mNzFiaXBYYWszMmNETWNHOVgrd2JzNW9jbHloZ09SdzAvT3pxRGpFRTJ0STJJZGhkSDF3NjVwTndBMDZlSjNPMm84RnlpTU9LTm9rSFhWczAvUk9ObDE4OD0iLCJpYXQiOjE3NTgwMDkxMTcsImV4cCI6MTc2MzE5MzExN30.A-4--i-WaT5OMTZ_ZLmezyxqmA76eS03gUnwqTKjzfQ",
].join("; ");

app.get("/api/quiz", async (req, res) => {
  try {
    const quizId = req.query.id;

    if (!quizId) {
      return res.status(400).send("Thiếu id");
    }

    const url = `https://api.cheatnetwork.eu/quizizz/${quizId}/answers`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...headers,
        Cookie: cookies,
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .send(`Lỗi API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
