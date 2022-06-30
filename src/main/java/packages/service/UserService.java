package packages.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import packages.model.User;
import packages.repository.UserRepository;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private ArrayList<User> users;

    @PostConstruct
    public void init(){
        System.out.println("Iniciado el servicio de usuarios");
    }

    @PreDestroy
    public void destroy(){
        System.out.println("Fuera del servicio de usuarios");
    }


    public String signUp(User user){
        String message;
        if(getExist(user.getEmail())){
            message = "This email has been logged before";
        }else{
            userRepository.signUp(user.getEmail(),user.getPassword(),user.getName(),user.getLastname(),user.getPublicaddress(),user.getType());
            message = "Created";
        }
        return message;
    }

    public boolean getExist(String userid){
        boolean exist = false;
        String email = userRepository.getExist(userid);
        if(email!=null)
            exist = true;
        return  exist;
    }

    public String login(String userid, String password) {

        boolean existe = getExist(userid);

        String user = userRepository.login(userid, password);

        String response="It doesn't exist any user associate to this email account";

        if(existe){
            if(user!=null){
                response="Correct Credentials";
            }else{
                response="Invalid Password";
            }

        }
        return response;
    }

    public User getUserNameAndAddress(String email){

        User user = userRepository.getUserNameAndAddress(email);

        return user;
    }

}