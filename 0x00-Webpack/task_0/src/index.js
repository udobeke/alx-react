import $ from 'jquery';


function addParagraphs() {
  const body = $('body');

  const paragraph1 = $('<p>').text('Holberton Dashboard');
  const paragraph2 = $('<p>').text('Dashboard data for the students');
  const paragraph3 = $('<p>').text('Copyright - Holberton School');

  body.append(paragraph1, paragraph2, paragraph3);
}

$(document).ready(function () {
  addParagraphs();
});
