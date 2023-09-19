import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="md:max-w-[1200px] mx-auto h-[80vh] flex md:items-center md:justify-between">
      <div className="flex md:items-center md:gap-5 ">
        <img
          src="img/profile.png"
          alt="profile_pic"
          className="w-[150px] h-[150px] object-cover max-w-full rounded-full  fade-opacity"
        />
        <div>
          <h1 className="text-[40px] font-semibold  fade-opacity">
            Sukhrob Abdullaev
          </h1>
          <p className="text-[20px] text-gray-500 fade-opacity">
            Frontend engineer
          </p>
        </div>
      </div>
      <div className="social_media flex md:flex-col gap-2 fade-opacity">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <a href="https://www.linkedin.com/in/sukhrob-abdullaev/">
            <LinkedInIcon
              sx={{
                fontSize: 40,
              }}
            />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <a href="https://github.com/sukhrobabdullaev">
            <GitHubIcon
              sx={{
                fontSize: 40,
              }}
            />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <a href="https://t.me/sukhrob_abdullayev">
            <TelegramIcon
              sx={{
                fontSize: 40,
              }}
            />
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <a href="https://www.youtube.com/@SukhrobAbdullayev">
            <YouTubeIcon
              sx={{
                fontSize: 40,
              }}
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
