@extends('layouts.acidus')

@section('title')
    Форма для внесения информации
@endsection


@section('content')
    <div class="row" style="padding: 10px; margin: 10px;">
        <form action="/changecolor" method="post">
            @csrf
            <input type="color" name="color">
            <input type="submit">
        </form>
    </div>
@endsection
