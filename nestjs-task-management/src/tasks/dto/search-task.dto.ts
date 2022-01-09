import { TaskStatus } from '../task-status.enum';
import { IsString, IsEnum, IsOptional } from 'class-validator';

export class SearchTasksDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
