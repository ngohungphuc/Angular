"use strict";
var voter_service_1 = require('./voter.service');
var Rx_1 = require('rxjs/Rx');
describe('VoterService', function () {
    var voterService, mockHttp;
    beforeEach(function () {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new voter_service_1.VoterService(mockHttp);
    });
    describe('deleteVoter', function () {
        it('should remove the voter from the list of voters', function () {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Rx_1.Observable.of(false));
            voterService.deleteVoter(3, session, "joe");
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        });
        it('should call http.delete with the right URL', function () {
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Rx_1.Observable.of(false));
            voterService.deleteVoter(3, session, "joe");
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });
    describe('addVoter', function () {
        it('should call http.post with the right URL', function () {
            var session = { id: 6, voters: ["john"] };
            mockHttp.post.and.returnValue(Rx_1.Observable.of(false));
            voterService.addVoter(3, session, "joe");
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', "{}", jasmine.any(Object));
        });
    });
});
//# sourceMappingURL=voter.service.spec.js.map