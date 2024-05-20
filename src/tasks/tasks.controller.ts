import {  Body, Controller, Get, Param, Post} from '@nestjs/common';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTask } from './dto/update-task.dto';
// import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {} // we pass the

  // @Get()
  // getTasks(@Query() filterDto : GetTaskFilterDto): Task[] {          // renamed to getTasks() from the getAllTasks because now we are to get the Tasks on the base of the filters

  //   // if we have any filters defined, call taskServices.getTaskWiFilter() otherwise get All Tasks
  //   // the filters are coming with the Query Parameters.


  //   if(Object.keys(filterDto).length){
  //     return this.taskServices.getTasksWithFilterDto(filterDto)
  //     //...
  //   }
  //   else{
  //     // getAllTasks
  //   return this.taskServices.getAllTasks();

  //   }


    
  // }


  // @Get('/:id')
  // getTaskById(@Param('id') id : string) : Promise<Task> {
  //   return this.taskServices.getTaskById(id)
  // }
  
  @Post()
  createTask(@Body() createTaskDto : CreateTaskDto): Promise<Task>{

    return this.taskServices.createTask(createTaskDto)

  }

  // @Post()
  // createTask( @Body() createTask: CreateTaskDto) : Task {
  //  console.log('This is the create Task : ',createTask)
  //   return this.taskServices.createTask(createTask)
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id : string): Task[]{
  //   console.log('This is the id of deleted task : ', id)
  //   return this.taskServices.deleteTask(id)
  // }

  // @Patch('/:id')
  // updateTheTaskStatus(@Param('id') id : string , @Body() updateTask : UpdateTask ): Task{
  //  return this.taskServices.updateTheTaskStatus(id , updateTask)
  // }

}
