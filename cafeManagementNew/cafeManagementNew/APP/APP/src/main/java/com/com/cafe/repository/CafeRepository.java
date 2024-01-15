package com.cafe.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cafe.entity.Cafe;

public interface CafeRepository extends JpaRepository<Cafe, Integer> {
	public Optional<Cafe> findByEmailAndPassword(String email, String password);
	public Optional<Cafe> findByName(String name);
	
	@Modifying
    @Query("DELETE FROM Cafe p where p.cafeId=:cafeId")
    public void deleteCafe(@Param("cafeId") int cafeId);
	
}
