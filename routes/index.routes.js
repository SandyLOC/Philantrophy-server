const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const campaignRoutes = require("./campaigns.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("Philantrophy");
});

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

router.use("/campaigns", campaignRoutes);

module.exports = router;
