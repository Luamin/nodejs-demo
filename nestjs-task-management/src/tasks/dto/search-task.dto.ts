import { TaskStatus } from '../task.model';

export class SearchTasksDto {
  status?: TaskStatus;
  search?: string;
}
