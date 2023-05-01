@extends('layouts.genLayout')

@section('content')
    <h1>Se connecter</h1>
    <form action="post">
        <label for="name">Ton petit nom</label></br>
        <input type="text" id="name"></br>
        <label for="email">Ton email</label></br>
        <input type="email" id="email"></br>




    </form>
@endsection
