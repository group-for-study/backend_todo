import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
	constructor(private readonly todoService: TodoService) {}

	@Get()
	getHello(): string {
		return this.todoService.getTodoList();
	}
}
