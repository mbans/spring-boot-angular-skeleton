package com.lumar.mbans.spring;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {

    @RequestMapping(value="/greeting")
    public ResponseEntity<?> index() {

        Map<String,String> message = new HashMap<>();
        message.put("message","greetings!");
        return new ResponseEntity(message, HttpStatus.OK);
    }

}