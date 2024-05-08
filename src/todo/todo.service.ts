import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
	getTodoList(): string {
		return 'return todolist';
	}
}
