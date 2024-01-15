package com.cafe.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cafe.Exception.AdminServiceException;
import com.cafe.Exception.CustomerServiceException;
import com.cafe.entity.Admin;
import com.cafe.entity.Customer;
import com.cafe.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	public AdminRepository adminRepository;
	
	public int register(Admin admin) {
		Optional<Admin> checkAdmin=adminRepository.findByEmailAndPassword(admin.getEmail(),admin.getPassword());
		if(checkAdmin.isEmpty()) {
		Admin savedAdmin=adminRepository.save(admin);
		return savedAdmin.getId();
		}else throw new AdminServiceException("Admin already registered!!");
	}
	public Admin login(String email, String password) throws CustomerServiceException {
		Optional<Admin> admin = adminRepository.findByEmailAndPassword(email,password);
		if(admin.isPresent())
			return admin.get();
		else
			throw new CustomerServiceException("Invalid Email/Password");
	}
	
	

}
