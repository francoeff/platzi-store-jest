import actions from '../../actions';
import productMock from '../../__mocks__/productMock';

describe('Actions', () => {
  const payload = productMock;
  test('addToCart Action', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart Action', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
