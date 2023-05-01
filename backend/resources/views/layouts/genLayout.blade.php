<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <title>Flore Sakowski</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
    @include('assets.header')

    <div class="container">
        @yield('content')
    </div>

    @include('assets.footer')
</body>

</html>
