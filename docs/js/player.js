<script>
    function onYouTubeIframeAPIReady() {

        var player;

        player = new YT.Player('div_YouTube', {
            videoId: 'wp_Mp_13EIs',     // THE VIDEO ID.
            width: 560,
            height: 316,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'showinfo': 0,
                'modestbranding': 0,
                'loop': 1,
                'fs': 0,
                'cc_load_policty': 0,
                'iv_load_policy': 3
            },
            events: {
                'onReady': function (e) {
                    e.target.mute();
                    e.target.setVolume(50);      // YOU CAN SET VALUE TO 100 FOR MAX VOLUME.
                }
            }
        });
    }
</script>