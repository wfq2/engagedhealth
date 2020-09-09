$(document).ready(() => {
  $.get("../cdn/bios.csv",
	  (response) => {
      console.log(response)
	  });
})
