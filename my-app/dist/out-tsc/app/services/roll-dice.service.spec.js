import { TestBed } from '@angular/core/testing';
import { RollDiceService } from './roll-dice.service';
describe('RollDiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RollDiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=roll-dice.service.spec.js.map