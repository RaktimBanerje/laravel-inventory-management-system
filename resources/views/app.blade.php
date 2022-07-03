<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Jetstream Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <link href="/assets/img/brand/favicon.png" rel="icon" type="image/png">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
        <link href="/assets/vendor/nucleo/css/nucleo.css" rel="stylesheet">
        <link href="/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">
        <link type="text/css" href="/assets/css/argon.css?v=1.0.0" rel="stylesheet">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body id="root" class="font-sans antialiased">
        @inertia

        @env ('local')
            <script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
        @endenv

        <script src="/assets/vendor/jquery/dist/jquery.min.js"></script>
        <script src="/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/argon.js?v=1.0.0"></script>
        <!-- <script src="{{'https://maps.googleapis.com/maps/api/js?key='.env('GMP_KEY').'&libraries=places&callback=initAutocomplete'}}" async defer></script> -->
    </body>
</html>