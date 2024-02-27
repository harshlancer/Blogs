import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWTsecret = "wetsofwater";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "SignUp successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: validUser._id }, JWTsecret);

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ message: "Valid User", token });
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { username, email, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, JWTsecret);
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({ message: "User signed in with Google" });
    } else {
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUsername = username
        ? username.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4)
        : `user${Math.random().toString(36).slice(2)}`;
      const newUser = new User({
        username: newUsername,
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, JWTsecret);
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({ message: "User created and signed in with Google" });
    }
  } catch (error) {
    next(error);
  }
};
