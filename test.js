var MyParrot = require('./parrot')

console.log(MyParrot.speakEnglish() )
console.log(MyParrot.speakSpanish() )

var MyContact = require('./contact')

var name = MyContact.parseName('Jerod Estapa,555-555-5555')
var number = MyContact.parseNumber('Jerod Estapa,555-555-5555')
var contact = MyContact.createContact('Jerod Estapa,555-555-5555')

console.log(name)
console.log(number)
console.log(contact)

MyContact.loadContacts(function(err, data) {
	console.log(data)
})

var contacts = [ { name: "John Smith", number: "604-123-9090" } ]

MyContact.saveContacts(contacts, function(err)
	{
		console.log('success')
	})
	
var contact = { name: "John Smith", number: "604-123-9090" }

MyContact.saveContact(contact, function(err) {
	console.log('success')
})

var MyCommand = require('./command')

console.log(MyCommand.getOperation())
console.log(MyCommand.getOperationData())

MyCommand.add(function(err) {
	console.log('Contact added!')
})
