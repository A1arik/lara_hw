<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesOperations extends Controller
{
    public function CreateFile(){
        Storage::disk('local')->put('file.txt','content');
        return Storage::disk('local')->get('file.txt');
    }

    public function GetFile(){
        return Storage::download('file.txt', 'uFile.txt');
    }

    public function UploadFileForm(){
        return '
        <form action="/test/file/send" METHOD="post" enctype="multipart/form-data">
        <input type="hidden" name="_token" value="' . csrf_token() . '">
        <input type="file" name="fileToUpload">
        <input type="submit" name="submit">
        </form>';
    }

    public function UploadFileStore(Request $request){
        $path = $request->file('fileToUpload')->store('someDirInApp');
        return $path;
    }

}
