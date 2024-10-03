const fs = require('fs');

const data = "In sunt consectetur nulla irure fugiat dolore occaecat magna aute est aute id. Deserunt duis amet ut duis voluptate excepteur. Proident eiusmod aute pariatur ex id Lorem duis anim sunt. Dolore laborum incididunt magna fugiat."

fs.writeFile('myNewFile.txt', data, (err) => {
	if (err) {
		console.log(err);
		return; 
	} else {
		console.log("Written to file successfully")
	}
});
