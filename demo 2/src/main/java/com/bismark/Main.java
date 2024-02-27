package com.bismark;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@SpringBootApplication
@RestController
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);

    }
}




//        @GetMapping("/greet")
//
//        public GreetResponse greet()
//    {
//        GreetResponse response;
//        response = new GreetResponse("Hello from tomcat",
//                    List.of("java", "javascript", "golang"),
//                    new person("bismark" , 23 , 23000)
//            );
//        return response;
//    }
//
//    //application context for creating the person object
//         record person(String  name, Integer age, Integer savings){
//         }
//         record  GreetResponse(String greet ,
//                               List<String> favprogramminglanguages,
//                               Main.person person){}
//}
