@extends('layouts.acidus')

@section('title')
    Форма для внесения информации
@endsection


@section('content')
    <div class="row" style="padding: 10px; margin: 10px;">
        <form action="/cf" method="post">
            @csrf
            <!-- Данные, которые точно повторяют поля в базе данных -->
            <input type="text" name="userName"><br>
            <input type="tel" name="userPhone">
            <input type="submit">
        </form>
    </div>
@endsection
