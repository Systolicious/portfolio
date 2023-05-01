@extends('layouts.genLayout')

@section('content')
    <h1>Se connecter</h1>
    <form action="post">
        <label for="email">Email</label></br>
        <input type="email" id="email"></br></br>
        <label for="password">Mot de passe</label></br>
        <input type="password" id="password"></br>
        <button>Et hop!</button>
    </form>

    <button>Pas encore inscrit?</button>
@endsection
