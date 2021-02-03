<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return view('products.index', ['products' => Product::all()]);
    }

    public function byCategory($slug){
        //$data = ProductCategory::where('slug', $slug)->with('products')->firstOrFail();
        //dd($data);
        return view('products.category',
            ['category' => ProductCategory::where('slug', $slug)->with('products')->firstOrFail()]);
    }
}
