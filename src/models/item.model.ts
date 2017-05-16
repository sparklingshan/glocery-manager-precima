//item model
export class item {
    title = null;
    description = null;
    link = null;
    completed = false;

    constructor(title: string, description: string, link: string, completed: boolean) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.completed = completed;
    }
    //mark item as completed
    complete() {
        this.completed = true;
    }
    //mark item as uncompleted
    undo() {
        this.completed = false;
    }
}
