package com.bismark;

import java.util.Objects;

public class Customer {
    private Integer id;
    private String name;

    private String email;
    private Integer age;

    public Customer(Integer id ,
                    String name,
                    String email,
                    Integer age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.id = id;
    }

    public Customer (){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    //equal and hash code
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Customer customer)) return false;
        return Objects.equals(getId(), customer.getId()) && Objects.equals(getName(), customer.getName()) && Objects.equals(getEmail(), customer.getEmail()) && Objects.equals(getAge(), customer.getAge());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getEmail(), getAge());
    }
    @Override
    public  String toString(){
        return "Customer {"+
                "id = " + id +
                ", name = ' " + name + '\'' +
                ", email ='" + email + '\'' +
                ", age =" + age +
                '}';


    }

}
