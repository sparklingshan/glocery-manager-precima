import { Injectable } from '@angular/core';
import { grocery } from './grocery.store';

import { item } from '../../models/item.model';

@Injectable()
export class DataService {
    getGrosery() {
        return grocery.store;
    }
    getItemsByTitle(title: string) {
        let result = [];

        grocery.store.forEach(i => {
            if (i.title.indexOf(title) > -1) {
                result.push(i);
            }
        });

        return result;
    }
    getItemByTitle(title: string) {
        let result = null;

        grocery.store.forEach(i => {
            if (i.title === title) {
                result = i;
            }
        });

        return new item(result.title, result.description, result.link, result.completed);
    }
    getItemIndexByTitle(title: string) {
        let result = null;

        grocery.store.forEach((o, i) => {
            if (o.title === title) {
                result = i;
            }
        });

        return result;
    }
    addNew(i: item) {
        grocery.store.push(new item(i.title, i.description, i.link, i.completed));
    }
    updateItem(i: item, index: number) {
        grocery.store[index] = i;
    }
    deleteItem(index) {
        grocery.store.splice(index, 1);
    }
}