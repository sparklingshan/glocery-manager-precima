import { item } from '../../models/item.model';

export const grocery = {
    store: [
        new item('item1', 'item1 description', 'http://www.amazon.ca', true),
        new item('item2', 'item2 description', 'http://www.ebay.ca', false),
        new item('item3', 'item3 description', 'http://www.walmart.ca', false)
    ]
}