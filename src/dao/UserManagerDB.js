import { usersModel } from "./models/userModel.js";

export class UserManager {
  async createUser(user) {
    await usersModel.create(user);
  }

  async getUserBy(filter) {
    return await usersModel.findOne(filter).lean();
  }
}
