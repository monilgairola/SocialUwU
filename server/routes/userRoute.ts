import express, { Response, Request, Router } from "express";
import { body, validationResult } from "express-validator";
import User from "../models/userModel";
import { omit } from "lodash";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import isAuthenticated from "../middlewares/isAuthenticated";

const router: Router = express.Router();

//register
router.post(
  "/register",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage("username must be between 4 and 20 characters"),
  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be valid"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({
      min: 6,
      max: 14,
    })
    .withMessage("password must be between 6 and 14 characters"),
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const userbyemail = await User.findOne({ email });
      const userbyusername = await User.findOne({ username });
      if (userbyemail || userbyusername) {
        res.json({
          error: "username or email already exists",
        });
      } else {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.json({
            error: errors.array()[0].msg,
          });
        } else {
          const userboi = await User.create({
            username: username,
            email: email,
            password: password,
          });
          const userboi2 = omit(userboi.toJSON(), "password");
          res.status(201).json(userboi2);
        }
      }
    } catch (error: any) {
      res.send({
        error: error.message,
      });
    }
  }
);

//login
router.post(
  "/login",
  body("email")
    .exists()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be valid"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({
      min: 6,
      max: 14,
    })
    .withMessage("password must be between 6 and 14 characters"),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.json({
          error: errors.array()[0].msg,
        });
      } else {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          res.json({
            error: "Invalid credentials",
          });
        } else {
          const hashedpass = await bcrypt.compare(password, user.password);
          if (!hashedpass) {
            res.json({
              error: "Invalid credentials",
            });
          } else {
            const userboi = omit(user.toJSON(), "password");
            const token = jwt.sign(
              {
                user: userboi,
              },
              process.env.JWT_SECRET as Secret,
              {
                expiresIn: "69h", // :)
              }
            );
            res.status(200).json({
              token: token,
            });
          }
        }
      }
    } catch (error: any) {
      res.send({
        error: error.message,
      });
    }
  }
);

//update profile
router.put(
  "/update_profile",
  body("email").isEmail().withMessage("email must be valid"),
  isAuthenticated,
  async (req: Request, res: Response) => {
    const { username, email, bio } = req.body;
    const userId = res.locals.user._id;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
        });
      } else {
        await User.findByIdAndUpdate(userId, {
          username: username,
          email: email,
          bio: bio,
        });
        const userboi = await User.findById(userId);
        const userboi2 = omit(userboi?.toJSON(), "password");
        res.status(200).json(userboi2);
      }
    } catch (error: any) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
);

//get user by id
router.get("/getbyid/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const userboi = await User.findById(userId);
    const userboi2 = omit(userboi?.toJSON(), "password");
    res.status(200).json(userboi2);
  } catch (error: any) {
    res.send({
      error: error.message,
    });
  }
});

//folllow user
router.put(
  "/follow/:userId",
  isAuthenticated,
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    const currentuserId = res.locals.user._id;
    try {
      const user = await User.findById(userId);
      const currentuser = await User.findById(currentuserId);
      if (userId === currentuserId) {
        res.status(403).json({
          error: "You can't follow yourself",
        });
      } else {
        if (!user?.followers.includes(currentuserId as never)) {
          await user?.updateOne({
            $push: {
              followers: currentuserId,
            },
          });
          await currentuser?.updateOne({
            $push: {
              following: userId,
            },
          });
          const userboi = await User.findById(userId);
          const userboi2 = omit(userboi?.toJSON(), "password");
          res.status(200).json(userboi2);
        } else {
          await user?.updateOne({
            $pull: {
              followers: currentuserId,
            },
          });
          await currentuser?.updateOne({
            $pull: {
              following: userId,
            },
          });
          const userboi3 = await User.findById(userId);
          const userboi4 = omit(userboi3?.toJSON(), "password");
          res.status(200).json(userboi4);
        }
      }
    } catch (error: any) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
);

export default router;
