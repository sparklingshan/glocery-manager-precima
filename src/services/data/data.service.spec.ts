import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataService]
        });
    });

    it('should inject data service', inject([DataService], (data: DataService) => {
        expect(data).toBeTruthy();
    }));
});