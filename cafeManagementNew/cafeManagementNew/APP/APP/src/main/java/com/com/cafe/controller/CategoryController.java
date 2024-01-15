package com.cafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.entity.Category;
import com.cafe.services.CategoryService;

@RestController
@CrossOrigin
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/category/fetch")
	public List<Category> fetch() {
		List<Category> category = categoryService.fetchAll();
		
		return category;
	}
	
	  @DeleteMapping("/deleteCategory")
	    public ResponseEntity<String> deleteCategory( @RequestParam  int categoryId) {
	        try {
	            categoryService.deleteCategory( categoryId);
	            return new ResponseEntity<>("Order item deleted successfully", HttpStatus.OK);
	        } catch (Exception e) {
	            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }

}