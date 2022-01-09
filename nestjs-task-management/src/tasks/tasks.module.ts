import { Module } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
