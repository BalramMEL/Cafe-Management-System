package com.cafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafe.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{
	public Optional<Category> findByName(String Name);

}
