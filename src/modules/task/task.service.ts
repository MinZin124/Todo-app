import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity'; // adjust import path if needed

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepo: Repository<Task>,
  ) {}

  create(taskData: Partial<Task>) {
    const task = this.tasksRepo.create(taskData);
    return this.tasksRepo.save(task);
  }

  findAll() {
    return this.tasksRepo.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.tasksRepo.findOne({ where: { id }, relations: ['user'] });
  }

  async update(id: number, updateData: Partial<Task>) {
    await this.tasksRepo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.tasksRepo.delete(id);
  }
}
