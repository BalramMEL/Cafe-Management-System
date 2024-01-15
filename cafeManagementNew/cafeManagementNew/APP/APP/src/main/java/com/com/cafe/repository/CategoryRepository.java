package com.cafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cafe.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{
	public Optional<Category> findByName(String Name);
	
	@Modifying
    @Query("DELETE FROM Category p where p.categoryId=:categoryId")
    void deleteCategory(@Param("categoryId") int categoryId);

}
