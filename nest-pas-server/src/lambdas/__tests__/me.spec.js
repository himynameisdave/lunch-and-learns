import me from '../me.js';

jest.mock('../../utils/respond.js', () => (cb) => ({
    json: () => cb(null, { hello: '🌏' }),
}));

describe('lambdas/me', () => {
    it('callback is called with the correct data', () => {
        const mock = jest.fn();
        me(null, null, mock);
        expect(mock).toHaveBeenCalledWith(null, { hello: '🌏' });
    });
});
