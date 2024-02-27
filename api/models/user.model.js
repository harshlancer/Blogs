import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  profilePicture: {
    type: String,
    default:
      "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-19.jpg",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
