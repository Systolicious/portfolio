@extends('layouts.genLayout')

@section('content')
    <h1>Se connecter</h1>
    <form action="post">


        <label for="email">Email</label></br>
        <input type="email" id="email"></br></br>
        <label for="password">Mot de passe</label></br>
        <input type="password" id="password"></br>

        <p>L'inscription c'est par ici</p>



    </form>
@endsection
