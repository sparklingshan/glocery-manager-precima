import { Injectable } from '@angular/core';
import { grocery } from './grocery.store';

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
}