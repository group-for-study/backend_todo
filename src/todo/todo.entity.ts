export class TodoListEntity {
	public id: number;
	public date: string;
	/**
	 * 완료상태
	 */
	public isDone: boolean;
	/**
	 * 할일 내용
	 */
	public content: string;
}
