$(function () {
    $('#button').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';
    var  text = $("#text").val();
    var channel = $("#channel").val();
    var data = {
            token: 'xoxp-24811237350-24807488117-25149209044-5123566b5a',
            channel: channel,
            username: 'yubidoll',
            text: text,
            icon_url: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatar-temp/2016-03-19/27953394180_d5ad5c69f1eff588a282.png',
           };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( "送信完了！");
            },
        });
    });
});
