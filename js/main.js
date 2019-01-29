$(function () {
    var postCounter = 0;

    function getData(i) {
        $.getJSON('https://jsonplaceholder.typicode.com/photos/' + i,
            function (data) {
                //                console.log(data);
                var figureHolder = document.createElement('figure');
                $(figureHolder).addClass('single-post');

                var imageHolder = document.createElement('img');
                $(imageHolder).attr('src', data.url);
                $(figureHolder).append(imageHolder);

                var figcaptionHolder = document.createElement('figcaption');
                $(figcaptionHolder).text(data.id + ' ' + data.title);
                $(figureHolder).append(figcaptionHolder);

                $('#posts-list').append(figureHolder);

                if (i >= postCounter + 10) return;

                getData(++i);
            });
    }
    getData(1);

    $('#load-posts').click(function () {
        var nextPost = $('.single-post').length;
        postCounter = nextPost;
        getData(nextPost + 1);
    });

    $(window).scroll(function () {
        console.log($(window).scrollTop());
        console.log($(window).height());
        console.log($(document).height());

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            var nextPost = $('.single-post').length;
            postCounter = nextPost;
            getData(nextPost + 1);
        }
    });
});
