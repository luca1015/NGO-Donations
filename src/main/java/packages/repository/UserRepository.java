package packages.repository;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import packages.model.User;

import java.util.List;

public interface UserRepository extends CrudRepository<User,String> {

    @Query("SELECT name FROM users WHERE email= :email AND password= :password")
    String login(@Param("email") String userid, @Param("password") String password);

    @Query("SELECT name,publicaddress,type FROM users WHERE email= :email")
    User getUserNameAndAddress(@Param("email") String userid);

    @Query("SELECT email FROM users WHERE email= :email")
    String getExist(@Param("email") String userid);

    @Modifying
    @Transactional
    @Query("INSERT INTO users (email,password,name,lastname,publicaddress,type) VALUES(:email,:password,:name,:lastname,:publicaddress,:type);")
    String signUp(@Param("email") String userid, @Param("password") String password, @Param("name") String name, @Param("lastname") String lastname,@Param("publicaddress") String publicaddress,@Param("type") String type);


}
