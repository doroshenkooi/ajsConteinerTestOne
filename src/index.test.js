const Team = require('./team');
const Character = require('./character');

describe('Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('should add a character to the team', () => {
    const character = new Character('Bob', 5, 'Defensive');

    team.add(character);

    expect(team.members.size).toBe(1);
  });

  test('should not allow duplicate characters in the team', () => {
    const character = new Character('Bob', 5, 'Defensive');

    team.add(character);

    expect(() => {
      team.add(character);
    }).toThrow();
  });

  test('should add multiple characters to the team', () => {
    const character1 = new Character('Bob', 5, 'Defensive');
    const character2 = new Character('Alice', 10, 'Aggressive');

    team.addAll(character1, character2);

    expect(team.members.size).toBe(2);
  });

  test('should convert team members to an array', () => {
    const character1 = new Character('Bob', 5, 'Defensive');
    const character2 = new Character('Alice', 10, 'Aggressive');

    team.addAll(character1, character2);

    expect(team.toArray()).toEqual([character1, character2]);
  });
});
