<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- THEME STYLES -->
    <link href="/css/layout.min.css" rel="stylesheet" type="text/css"/>
</head>
<body>

    <div id="app">
        React live here
    </div>

    <!-- Scripts -->
    <script src="{{ asset('/js/app.js') }}" defer></script>


    <!-- Back To Top -->
    <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>

    <!-- JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
    <!-- CORE PLUGINS -->
    <script src="/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL PLUGINS -->
    <script src="/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="/vendor/jquery.back-to-top.js" type="text/javascript"></script>
    <script src="/vendor/jquery.smooth-scroll.js" type="text/javascript"></script>
    <script src="/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="/vendor/jquery.parallax.min.js" type="text/javascript"></script>
    <script src="/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL SCRIPTS -->
    <script src="/js/layout.min.js" type="text/javascript"></script>
    <script src="/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="/js/components/wow.min.js" type="text/javascript"></script>

</body>
</html>
