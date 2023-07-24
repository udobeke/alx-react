import $ from 'jquery';

$(document).ready(function() {
  const paragraphs = [
    'Holberton Dashboard',
    'Dashboard data for the students',
    'Copyright - Holberton School',
  ];

  paragraphs.forEach((paragraph) => {
    $('body').append(`<p>${paragraph}</p>`);
  });
});
