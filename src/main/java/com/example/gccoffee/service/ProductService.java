package com.example.gccoffee.service;

import com.example.gccoffee.model.Category;
import com.example.gccoffee.model.Product;

import java.util.List;

/*
    카테고리를 가져오고 product 를 만드는 기능
 */
public interface ProductService {
    List<Product> getProductByCategory(Category category);

    List<Product> getAllProduct();

    Product createProduct(String productName, Category category, long price);

    Product createProduct(String productName, Category category, long price, String description);
}
