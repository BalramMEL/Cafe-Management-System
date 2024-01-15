package com.cafe.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.Exception.AdminServiceException;
import com.cafe.Exception.CafeServiceException;
import com.cafe.Exception.CustomerServiceException;
import com.cafe.dto.AdminLoginStatus;
import com.cafe.dto.LoginDetails;
import com.cafe.dto.RegistrationAdminStatus;
import com.cafe.dto.Status;
import com.cafe.entity.Admin;
import com.cafe.entity.Category;
import com.cafe.repository.CategoryServiceRepository;
import com.cafe.services.AdminService;

@RestController
@CrossOrigin
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/admin/register")
	public RegistrationAdminStatus register(@RequestBody Admin admin){
		try {
			int id= adminService.register(admin);
			
			
			RegistrationAdminStatus status = new RegistrationAdminStatus();
			status.setStatus(true);
			status.setMessage("Admin registered successfully!!");
			status.setId(id);
			return status;
			
		}catch(AdminServiceException e) {
			RegistrationAdminStatus status = new RegistrationAdminStatus();
			status.setStatus(false);
			status.setMessage(e.getMessage());
			return status;
			
		}
		
	}
	@PostMapping("/admin/login")
	public Status login(@RequestBody LoginDetails loginDetails) throws CustomerServiceException {
		try {
			Admin admin = adminService.login(loginDetails.getEmail(), loginDetails.getPassword());
			AdminLoginStatus status = new AdminLoginStatus();
			status.setStatus(true);
			status.setMessageIfAny("Login successful!");

			status.setAdminId(admin.getId());
			
			status.setRole(admin.getRole());
			return status;
		}
		catch (CafeServiceException e) {
			Status status = new Status();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
			return status;
		}
	}
//	@Autowired
//    private CategoryServiceRepository categoryServiceRepository;
//
//    // Admin: Add Category
//    @PostMapping("/categories")
//    public void addCategory(@RequestBody Category category) {
//        categoryServiceRepository.addCategory(category);
//    }
	@Autowired
    private CategoryServiceRepository categoryServiceRepository;

    // Admin: Add Category
    @PostMapping("/categories")
    public void addCategory(@RequestBody Category category) {
        categoryServiceRepository.addCategory(category);
    }

}


