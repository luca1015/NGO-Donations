package packages.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Table("users")

public class User {
    @Id
    @NotNull
    @NotBlank
    String email;
    @NotNull
    @NotBlank
    @Size(min = 8, max = 15)
    String password;
    @NotNull
    @NotBlank
    String name;
    @NotNull
    @NotBlank
    String lastname;
    String publicaddress;
    @NotNull
    @NotBlank
    String type;

    public User(String email,String password, String name, String lastName, String type){
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastname = lastName;
        this.type = type;
    }
    public User(String email,String password, String name, String lastName, String publicAddress, String type){
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastname = lastName;
        this.publicaddress = publicAddress;
        this.type = type;
    }
    public User(){}
}
