import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async find(query = {}) {
    return await dbContext.Bug.find(query)
  }

  async findById(id) {
    const bug = await dbContext.Bug.findById(id)
    if (!bug) {
      throw new BadRequest('Invalid ID')
    }
    return bug
  }

  async create(body) {
    return await dbContext.Bug.create(body)
  }

  async delete(id, userId) {
    // const bug = await dbContext.Bug.findOneAndRemove({ _id: id, creatorId: userId })
    // if (!bug) {
    //   throw new BadRequest('BAD REQUEST')
    // }
    // return bug
  }
}

export const bugsService = new BugsService()