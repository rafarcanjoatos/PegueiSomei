package com.example.pegueisomei.controller;

import com.example.pegueisomei.product.Product;
import com.example.pegueisomei.product.ProductRepository;
import com.example.pegueisomei.product.ProductResponseDTO;
import com.example.pegueisomei.product.ProductRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin(origins = { "http://localhost:8080/" })
@RestController
@RequestMapping("product")
@Repository
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @PostMapping
    public void saveProduct(@RequestBody ProductRequestDTO data) {
        Product productData = new Product(data);
        repository.save(productData);
        return;
    }

    @GetMapping
    public List<ProductResponseDTO> getAll() {

        List<ProductResponseDTO> productList = repository.findAll().stream().map(ProductResponseDTO::new).toList();
        return productList;
    }
}
