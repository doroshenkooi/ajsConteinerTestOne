class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(member) {
      if (this.members.has(member)) {
        throw new Error('Character already exists in the team');
      }
      this.members.add(member);
    }
  
    addAll(...members) {
      for (const member of members) {
        this.add(member);
      }
    }
  
    toArray() {
      return Array.from(this.members);
    }
  }
  
  module.exports = Team;
  