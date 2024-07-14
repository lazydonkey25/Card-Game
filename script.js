const cards = [
  // Kinetic Cards
  { 
    name: 'Railgun', 
    damage: 30, 
    type: 'kinetic', 
    description: 'A high powered single shot kinetic weapon. Deals 30 damage base.', 
    cost: 5 
  },
  { 
    name: 'Auto Cannon', 
    damage: 10, 
    type: 'kinetic', 
    description: 'A rapid fire cannon that deals 10x5 damage for up to 50 total.', 
    cost: 5 
    },
    {
    name: 'Heavy Cannon',
    damage: 20,
    type: 'kinetic',
    description: 'A heavy cannon that deals 20x3 damage for up to 60 total, but has low accuracy.',
    cost: 10
    },
    {
    name: 'Smart Gun',
    damage: 15,
    type: 'kinetic',
    description: 'A kinetic weapon that deals 5x7 damage for up to 35 total and can correct it\'s aim mid-flight, granting it very high accuracy.',
    cost: 5
    },

  // Energy Cards
  { 
    name: 'Plasma Cannon', 
    damage: 25, 
    type: 'energy', 
    description: 'A high powered single shot energy weapon. Deals 25 damage base.', 
    cost: 5 
  },
  { 
    name: 'Laser Array', 
    damage: 15, 
    type: 'energy', 
    description: 'A rapid fire laser array that deals 15x2 damage for up to 30 total.', 
    cost: 5 
  },
  { 
    name: 'Fusion Beam', 
    damage: 40, 
    type: 'energy', 
    description: 'Use a powerful beam weapon that deals 40 damage to your opponent.', 
    cost: 10 
  },
  { 
    name: 'Giga Beam', 
    damage: 60, 
    type: 'energy', 
    description: 'Use a highly experimental attack to annihilate your enemies, dealing 60 damage but disabling your ship for the next turn.', 
    cost: 15 
  },

  // Mixed Cards
  { 
    name: 'Missile Barrage', 
    damage: 20, 
    type: 'mixed', 
    description: 'A barrage of missiles that deal 10x5 damage for up to 50 total.', 
    cost: 10 
  },
  { 
    name: 'Drone Swarm', 
    damage: 2, 
    type: 'mixed', 
    description: 'A swarm of armed drones that deal 2x10 damage and lower opponent accuracy by 2 for 3 turns.', 
    cost: 10 
    },
  
  { 
    name: 'Antimatter Warhead', 
    damage: 100, 
    type: 'mixed', 
    description: 'Use an antimatter warhead to deal 100 damage to your opponent. This will also deal 50 damage to your ship.', 
    cost: 20 
  },

  // Support Cards
  { 
    name: 'Shield Generator', 
    damage: 0, 
    type: 'support', 
    description: 'Generates a shield that absorbs 40 damage.', 
    cost: 5 
  },
  { 
    name: 'Nanite Drone', 
    damage: 0, 
    type: 'support', 
    description: 'Deploy a nanite repair drone to repair your armor by 30. Lowers your evasion by 1 for this turn.', 
    cost: 5 
  },
  { 
    name: 'Chaff Launcher', 
    damage: 0, 
    type: 'support', 
    description: 'Confuse your enemy\'s targeting computer and lower their accuracy for 2 for 3 turns.', 
    cost: 5 
  },
  { 
    name: 'Thruster', 
    damage: 0, 
    type: 'support', 
    description: 'Increases your evasion by 3 for 3 turns.', 
    cost: 5 
  },
  { 
    name: 'EMP', 
    damage: 0, 
    type: 'support', 
    description: 'Disables all enemy systems for 2 turns.', 
    cost: 10 
  },
  { 
    name: 'Overcharge', 
    damage: 0, 
    type: 'support', 
    description: 'Use 200% of your energy to launch a devastating attack. Double your attack and evasion for 3 turns. After this, your ship is disabled for 2 turns.', 
    cost: 15 
    },
    {
    name: 'Reaper Missile',
    damage: 20,
    type: 'mixed',
    description: 'Launch an illegally modified missile that deals 20 damage and disables your opponent\'s ship for 1 turn.',
    cost: 20
    }
];
