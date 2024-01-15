package com.cafe.repository;

import java.util.List;

import com.cafe.entity.Category;
import com.cafe.entity.Product;


public interface CategoryServiceRepository {

    // Methods for Admin
    void addCategory(Category category);

    // Methods for Cafe
    List<Category> getAllCategories();
    Category getCategoryById(int categoryId);
    void addProductToCategory(int categoryId, Product product);

	
}
//package com.cdac.repository;
//
//import java.util.List;
//
//import com.cdac.entity.Category;
//import com.cdac.entity.Product;
//
//
//public interface CategoryServiceRepository {
//
//    // Methods for Admin
//    void addCategory(Category category);
//
//    // Methods for Cafe
//    List<Category> getAllCategories();
//    Category getCategoryById(int categoryId);
//    void addProductToCategory(int categoryId, Product product);
//}