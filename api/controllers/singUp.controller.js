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
      return next(404, "User Not Found");
    }

    const validPassword = await bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(401, "Incorrect Password"); // Use 401 for unauthorized access
    }

    const token = jwt.sign(
      {
        id: validUser._id,
      },
      JWTsecret
    );

    res.status(200).cookie(
      "access_token",
      token,
      {
        httpOnly: true,
      }
    ).json({ message: "Valid User", token }); // Send token in response body
  } catch (error) {
    next(error); // Handle other errors appropriately
  }
};
