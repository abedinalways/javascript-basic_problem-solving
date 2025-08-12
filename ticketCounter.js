let ticket_counter = [];
let passengers = ['a', 'b', 'c', 'd', 'e', 'f'];
if (passengers.length > 5) {
  ticket_counter.push(...passengers);
}
console.log(ticket_counter)