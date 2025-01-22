import { ship } from '../src/modules/ship.js';

describe('Ship module', () => {
  let battleship;

  beforeEach(() => {
    battleship = ship(3); // Create a new ship before each test
  });

  test('should have correct length', () => {
    expect(battleship.length).toBe(3); // Ensure ship has length 3
  });

  test('should not be sunk initially', () => {
    expect(battleship.isSunk()).toBe(false); // Ship should not be sunk at first
  });

  test('should be sunk after enough hits', () => {
    battleship.hit();
    battleship.hit();
    battleship.hit();
    expect(battleship.isSunk()).toBe(true); // Ship should be sunk after 3 hits
  });
});
