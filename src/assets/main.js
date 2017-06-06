$(function () {

    // your code will go here

    coursesCompleted = [];

    console.log(coursesCompleted);

    $.ajax({
        url     : 'https://www.codeschool.com/users/richih.json',
        dataType: 'jsonp',
        success : function (response) {

            $('#badges').html(response);
            console.log(response.courses.completed);
            addCourses(response.courses.completed);

        }
    });

    function addCourses(courses) {

        var badges = $('#badges');

        courses.forEach(function (course) {
            console.log(course.title);
            console.log(course.badge);

            var $course = $('<div>', {
                'class': 'course'
            }).appendTo(badges);

            $('<h3>', {
                text: course.title
            }).appendTo($course);

            $('<img>', {
                src: course.badge
            }).appendTo($course);

            $('<a>', {
                href: course.url,
                text: 'See Course',
                target: 'blank',
                class: 'btn btn-primary'
            }).appendTo($course);

        });


    }


    // https://www.codeschool.com/users/richih.json

});
