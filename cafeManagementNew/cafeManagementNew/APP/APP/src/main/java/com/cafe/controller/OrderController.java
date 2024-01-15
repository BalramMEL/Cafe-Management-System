package com.cafe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.dto.OrderRequestDto;
import com.cafe.entity.Cafe;
import com.cafe.entity.Order;
import com.cafe.entity.OrderItem;
import com.cafe.services.BillService;
import com.cafe.services.OrderService;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private BillService billService;

    @PostMapping("/placeOrderWithItemsAndGenerateBill")
    public ResponseEntity<String> placeOrderWithItemsAndGenerateBill(@RequestBody OrderRequestDto orderRequest) {
        try {
            Order order = orderRequest.getOrder();

            // Ensure that order items are not null and not empty
            if (orderRequest.getOrderItems() == null || orderRequest.getOrderItems().isEmpty()) {
                return new ResponseEntity<>("Order items cannot be empty", HttpStatus.BAD_REQUEST);
            }

            // Call the service method to place order with items
            orderService.placeOrderWithItemsAndGenerateBill(order, orderRequest.getOrderItems());

            // Generate a bill for the order
            billService.generateBill(order);

            return new ResponseEntity<>("Order placed successfully, and bill generated", HttpStatus.OK);
        } catch (Exception e) {
            // Handle exceptions appropriately, you might want to log the exception
            return new ResponseEntity<>("Failed to place order: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/order/fetch")
	public List<Order> fetch() {
		List<Order> order = orderService.fetchAll();
		
		return order;
	}
    @GetMapping("/orderitem/fetch")
	public List<OrderItem> fetchItem() {
		List<OrderItem> orderItem = orderService.fetchAllItems();
		
		return orderItem;
	}

    // You can add more controller methods as needed
}
