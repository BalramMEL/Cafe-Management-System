package com.cafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.entity.Cafe;
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

}