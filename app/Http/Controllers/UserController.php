<?php

namespace App\Http\Controllers;

use App\Models\product;
use Illuminate\Http\Request;
use Log;
use Exception;

class UserController extends Controller
{
    //
    public function getProductsList()
    {
        try
        {
            $products = product::orderBy('id', 'desc')->get();
            return response()->json($products);
        }
        catch(Exception $e)
        {
            Log::error($e);
           // return response()->json(['error' => 'Server error'], 500);
 
        }
        
    }

    // get individual products list
    public function getProductList(Request $request)
    {
        try
        {
            $productList = product::findOrFail($request->get('productId'));
            return response()->json($productList);
        }
        catch(Exception $e)
        {
            Log::error($e);
           // return response()->json(['error' => 'Server error'], 500);
 
        }
        
    }
    public function updateProductList(Request $request)
    {
        try
        {
            $productId  = $request->get('productId');
            $productName = $request->get('productName');
            // $productDescription = $request->get('productDescription');
            $productPrice = $request->get('productPrice');

            Product::where('id', $productId)->update([
                'name' => $productName,
                //  'description' => $productDescription, 
                 'price' => $productPrice]);
            return response()->json([
                'name' => $productName,
                //  'description' => $productDescription, 
                 'price' => $productPrice]);
        }
        catch(Exception $e)
        {
            Log::error($e);
           // return response()->json(['error' => 'Server error'], 500);
 
        }
        
    }
    public function destroy(product $product)
    {
        try
        {
            $product->delete();
            return response()->json(['success' => 'Product deleted successfully']);
        }
        catch(Exception $e)
        {
            Log::error($e);
           // return response()->json(['error' => 'Server error'], 500);
 
        }
        
    }
    //store

    // public function store(Request $request)
    // {
    //     try
    //     {
    //         $productName = $request->get('productName');
    //         $productDescription = $request->get('productDescription');
    //         $productPrice = $request->get('productPrice');

    //         $product = new Product([
    //             'name' => $productName,
    //             'description' => $productDescription, 
    //              'price' => $productPrice]);
    //         $product->save();
    //         return response()->json([
    //             'name' => $productName,
    //             'description' => $productDescription, 
    //              'price' => $productPrice]);
    //     }
    //     catch(Exception $e)
    //     {
    //         Log::error($e);
    //        // return response()->json(['error' => 'Server error'], 500);
 
    //     }
        
    // }
      // Storing new employee.

      public function store(Request $request)
      {
          try
          {
              $productName = $request->get('productName');
              $productPrice = $request->get('productPrice');
  
              product::create([
                  'name'           =>  $productName,
                  'price'          =>  $productPrice
              ]);
  
              return response()->json([
                  'name'   =>  $productName,
                  'price' =>  $productPrice
              ]);
              
              

            
          }
          catch(Exception $e)
          {
              Log::error($e);
          }
      }
    
}
