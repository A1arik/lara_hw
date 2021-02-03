<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Faker\Provider\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Image::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return false;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $path = $request->file('fileToUpload')->store('public/images');
        $img = new Image();
        $img->url = str_replace( "public/","", $path);
        $img->alt = $request->alt;
        $img->title = $request->title;
        $img->save();

        return response($img->toJson(),200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Image::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Image::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $oldImg = Image::find($id);
        $oldImg->title = $request->title;
        $oldImg->alt = $request->alt;

        if (isset($request->imgNoChange) && $request->imgNoChange == "noChange") {
        } else {
            Storage::delete('public/' . $oldImg->url);
            $path = $request->file('fileToUpload')->store('public/images');
            $oldImg->url = str_replace( "public/","", $path);
        }

        $res = $oldImg->save();

        return response($res,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $oldImg = Image::find($id);
        Storage::delete('public/' . $oldImg->url);
        $res = $oldImg->delete();
        return response($res,200);
    }
}
