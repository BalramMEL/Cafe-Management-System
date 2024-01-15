package com.cafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafe.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	public Optional<Admin> findByEmailAndPassword(String Email,String Password);

}
