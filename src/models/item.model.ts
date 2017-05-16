export class item {
    title = null;
    description = null;
    link = null;
    completed = false;

    constructor(title: string, description: string, link: string) {
        this.title = title;
        this.description = description;
        this.link = link;
    }

    complete() {
        this.completed = true;
    }

    undo() {
        this.completed = false;
    }
}
