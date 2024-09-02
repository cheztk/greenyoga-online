"use server";

import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";
import { profile } from "console";

export const saveCurrentUserToMongoDB = async () => {
  try {
    const clerkUserDetails = await currentUser();
    const mongoDbUserPayload = {
      name: clerkUserDetails?.firstName + " " + clerkUserDetails?.lastName,
      email: clerkUserDetails?.emailAddresses[0]?.emailAddress,
      clerkUserId: clerkUserDetails?.id,
      profilePic: clerkUserDetails?.imageUrl,
      isAdmin: false,
      isActive: true,
    };
    const newUser = new UserModel(mongoDbUserPayload);
    await newUser.save();
    return {
      success: true,
      message: "User saved successfully",
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getCurrentUserFromMongoDB = async () => {
  try {
    const clerkUserDetails = await currentUser();
    //check if user already exists in the database
    const user = await UserModel.findOne({ clerkUserId: clerkUserDetails?.id });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }
    const saveUserResponse = await saveCurrentUserToMongoDB();
    if (saveUserResponse.success) {
      return {
        success: true,
        data: saveUserResponse.data,
      };
    }
    return {
      success: false,
      message: "User not found in MongoDB",
    };
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
