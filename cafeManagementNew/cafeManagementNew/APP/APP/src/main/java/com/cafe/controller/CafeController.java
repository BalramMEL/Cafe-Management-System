package com.cafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.Exception.CafeServiceException;
import com.cafe.Exception.CustomerServiceException;
import com.cafe.dto.CafeLoginStatus;
import com.cafe.dto.CafeStatus;
import com.cafe.dto.LoginDetails;
import com.cafe.dto.Status;
import com.cafe.entity.Cafe;
import com.cafe.entity.Category;
import com.cafe.entity.Product;
import com.cafe.services.CafeService;
import com.cafe.services.CategoryService;

@RestController
@CrossOrigin
public class CafeController {
	
	@Autowired
	private CafeService cafeService;
	
	@PostMapping("/cafe")
	public CafeStatus register(@RequestBody Cafe cafe){
		try {
			 cafeService.register(cafe);
			
			CafeStatus status = new CafeStatus();
			status.setStatus(true);
			status.setMessage("Cafe added successfully!!");
			
			return status;
			
		}catch(CafeServiceException e) {
			CafeStatus status = new CafeStatus();
			status.setStatus(false);
			status.setMessage(e.getMessage());
			return status;
			
		}
		
	}
	@PostMapping("/cafe/login")
	public Status login(@RequestBody LoginDetails loginDetails) throws CustomerServiceException {
		try {
			Cafe cafe = cafeService.login(loginDetails.getEmail(), loginDetails.getPassword());
			CafeLoginStatus status = new CafeLoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");
			status.setCafeId(cafe.getCafeId());
			status.setName(cafe.getName());
			status.setRole(cafe.getRole());
			//status.setCustomer(customer);
			return status;
		}
		catch (CafeServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
	
	@GetMapping("/cafe/fetch")
	public List<Cafe> fetch() {
		List<Cafe> cafe = cafeService.fetchAll();
		
		return cafe;
	}
	
	@Autowired
    private CategoryService categoryService;  

    // Cafe: Get all Categories
    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    // Cafe: Get Category by ID
    @GetMapping("/categories/{categoryId}")    //cafe/categories/1
    public Category getCategoryById(@PathVariable int categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    // Cafe: Add Product to Category
    @PostMapping("/categories/{categoryId}/products")   //cafe/categories/1/products
    public void addProductToCategory(@PathVariable int categoryId, @RequestBody Product product) {
        categoryService.addProductToCategory(categoryId, product);
    }
  //delete cafe data
    @DeleteMapping("/deleteCafe")
    public ResponseEntity<String> deleteproduct( @RequestParam  int cafeId) {
        try {
            cafeService.deleteCafe( cafeId);
            return new ResponseEntity<>("Order item deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
