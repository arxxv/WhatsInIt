const User = require("../models/user");

module.exports.getUser = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await User.findById(id);

    if (!user) return res.status(404).json({ error: "User not found" });
    const userdata = {
      id: user._id,
      username: user.username,
      email: user.email,
      allergies: user.allergies,
    };
    res.json({ data: userdata });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "Server error" } });
  }
};

module.exports.updateUser = async (req, res) => {
  const userid = req.user.id;
  const body = req.body;
  try {
    let user = await User.findById(userid);
    user.allergies = body.allergies;
    const userdata = {
      id: user._id,
      username: user.username,
      email: user.email,
      allergies: user.allergies,
    };
    user.save();
    res.json({ data: userdata });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: { msg: "Server error" } });
  }
};
