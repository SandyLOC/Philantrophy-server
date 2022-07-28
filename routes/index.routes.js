const router = require("express").Router();
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const campaignRoutes = require("./campaign.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

router.use("/campaign", campaignRoutes);

module.exports = router;
