@extends('layouts.genLayout')

@section('content')
    <h1>Créer un compte</h1>
    <form action="post">
        <label for="name">Ton petit nom</label><br>
        <input type="text" id="name"><br>
        <label for="email">Ton email</label></br>
        <input type="email" id="email"><br>
        <label for="password">Choisis ton mot de passe</label><br>
        <input type="password" id="password">
    </form>
    <button>Valider</button>
@endsection
