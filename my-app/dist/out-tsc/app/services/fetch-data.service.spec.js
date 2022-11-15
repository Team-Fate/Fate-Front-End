import { TestBed } from '@angular/core/testing';
import { FetchDataService } from './fetch-data.service';
describe('FetchDataService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FetchDataService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=fetch-data.service.spec.js.map