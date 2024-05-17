import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';


// import { TaskRespository } from './task.repository';
// import { Task } from './task.entity';
// import { TaskRespository } from './task.repository';

@Module({
  imports : [TypeOrmModule.forFeature([Task ])],
  controllers: [TasksController],
  providers: [TasksService ]
})
export class TasksModule {
}
