import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600";
  let HOT_URL =
    "https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?w=600";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity >= 70
                ? RAIN_URL
                : info.temp > 25
                ? HOT_URL
                : COLD_URL
            }
            alt="weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} - {info.weather}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>Temperature: {info.temp}°C</p>
              <p>Max Temp: {info.tempMax}°C</p>
              <p>Min Temp: {info.tempMin}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Feels Like: {info.feelsLike}°C</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
