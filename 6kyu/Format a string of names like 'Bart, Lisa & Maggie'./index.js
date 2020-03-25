/*
  Title:
    Format a string of names like 'Bart, Lisa & Maggie'.
  Description:
    Given: an array containing hashes of names
    Return: a string formatted as a list of names separated by commas except
    for the last two names, which should be separated by an ampersand.
  Examples:
    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'
    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'
    list([ {name: 'Bart'} ])
    // returns 'Bart'
    list([])
    // returns ''
  Notes:
    All the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
  Kata Link:
    https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie
*/

function list(names){
    return names.map(function(x){ return x.name; }).join(", ").replace(/,(?!.*,)/gmi, " &");
  }