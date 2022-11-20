import { Task } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { SearchTasksDto } from './dto/search-task.dto';
import {User} from "../auth/user.entity";

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    console.log(user);
    const task = this.create({
      title: title,
      description: description,
      status: TaskStatus.OPEN,
      user,
    });
    await this.save(task);
    return task;
  }

  async getTasks(searchTasksDto: SearchTasksDto, user: User): Promise<Task[]> {
    const { status, search } = searchTasksDto;
    const query = this.createQueryBuilder('task');
    query.where({user});

    if (status) {
      query.andWhere('task.status = :s', { s: status });
    }

    if (search) {
      query.andWhere(
        '((LOWER(task.title) like LOWER(:str) or LOWER(task.description) like LOWER(:str)))',
        {
          str: `%${search}%`,
        },
      );
    }

    const tasks = await query.getMany();
    console.log(query.getSql());
    return tasks;
  }
}
