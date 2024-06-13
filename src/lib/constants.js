export const initialItems = [
  { id: crypto.randomUUID(), name: 'Good mood', packed: true },
  { id: crypto.randomUUID(), name: 'Phone charger', packed: false },
  { id: crypto.randomUUID(), name: 'Passport', packed: false },
];

export const options = [
  { value: 'default', label: 'Sort by default' },
  { value: 'packed', label: 'Sort by packed' },
  { value: 'unpacked', label: 'Sort by unpacked' },
];
