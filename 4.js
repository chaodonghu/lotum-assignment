// 4) Given: words = ['one', 'one', 'two', 'three', 'three', 'two']
// Remove the duplicates.

 words = ['one', 'one', 'two', 'three', 'three', 'two'];
 
 var unique = words.filter(function(elem, index, self) {
       return index == self.indexOf(elem);
});


console.log(unique)
