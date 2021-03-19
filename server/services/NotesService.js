import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async find(query = {}) {
    return await dbContext.Note.find(query)
  }

  async findById(id) {
    const note = await dbContext.Note.findById(id)
    if (!note) {
      throw new BadRequest('Invalid ID')
    }
    return note
  }

  async create(body) {
    return await dbContext.Note.create(body)
  }

  async delete(id, userId) {
    const note = await dbContext.Note.findOneAndRemove({ _id: id, creatorId: userId })
    if (!note) {
      throw new BadRequest('BAD REQUEST')
    }
    return note
  }
}

export const notesService = new NotesService()
