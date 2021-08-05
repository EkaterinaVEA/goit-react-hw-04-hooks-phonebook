function FilterContacts(contacts, filter) {
  return contacts.filter(obj => {
    return obj.name.toLowerCase().includes(filter.toLowerCase().trim());
  });
}

export default FilterContacts;
