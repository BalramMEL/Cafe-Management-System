package com.cafe.dto;

public class ProductDTO {

    private String name;
    private double price;
    private int categoryId; // Assuming this is an ID for the category

    // Constructors, getters, and setters
    // ...

    public ProductDTO() {
        // Default constructor
    }

    public ProductDTO(String name, double price, int categoryId) {
        this.name = name;
        this.price = price;
        this.categoryId = categoryId;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

    // Getters and setters for fields
    // ...
}