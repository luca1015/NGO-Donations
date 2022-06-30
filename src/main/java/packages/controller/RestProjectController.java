package packages.controller;

import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import packages.model.*;
import packages.service.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")

public class RestProjectController {

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private OrganizationService organizationService;

    @GetMapping("/login")
    public ResponseEntity<String> login(@RequestParam("email") String email,@RequestParam("password") String password){
        String existe = userService.login(email,password);
        ResponseEntity<String> respuesta = new ResponseEntity<String>(existe, HttpStatus.OK);
        return respuesta;
    }

    @GetMapping("/getUserNameAndAddress")
    public ResponseEntity<Object> getUserNameAndAddress(@RequestParam("email") String email){
        User user = userService.getUserNameAndAddress(email);

        return new ResponseEntity<Object>(user, HttpStatus.OK);
    }

    @PostMapping("/user/")
    public ResponseEntity<String> signUp(@RequestBody @Valid User user){
        String message = userService.signUp(user);
        ResponseEntity<String> respuesta = new ResponseEntity<String>(message , HttpStatus.OK);
        return respuesta;
    }

    @GetMapping("/getProjects")
    public ResponseEntity<Object> getProjects(){
        List<Project> projects = projectService.getProjects();

        List<JSONObject> entities = new ArrayList<JSONObject>();

        for(Project project : projects){
            JSONObject entity = new JSONObject();
            entity.put("publicaddress", project.getPublicaddress());
            entity.put("date", project.getDate());
            entity.put("name", project.getName());
            entity.put("country", project.getCountry());
            entity.put("categorie", project.getCategorie());
            entity.put("goal", project.getGoal());
            entity.put("summary", project.getSummary());
            entity.put("challenge", project.getChallenge());
            entity.put("solution", project.getSolution());
            entity.put("longimpact", project.getLongimpact());
            entity.put("image", project.getImage());
            entity.put("organization", project.getOrganization());
            entities.add(entity);
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @GetMapping("/getProjectById")
    public ResponseEntity<Project> getProjectById(@RequestParam("publicaddress") String publicaddress){
        Project project = projectService.getProjectById(publicaddress);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/getProjectByDate")
    public ResponseEntity<Object> getProjectByDate(){
        List<Project> projects = projectService.getProjectByDate();

        List<JSONObject> entities = new ArrayList<JSONObject>();

        for(Project project : projects){
            JSONObject entity = new JSONObject();
            entity.put("publicaddress", project.getPublicaddress());
            entity.put("date", project.getDate());
            entity.put("name", project.getName());
            entity.put("country", project.getCountry());
            entity.put("categorie", project.getCategorie());
            entity.put("goal", project.getGoal());
            entity.put("summary", project.getSummary());
            entity.put("challenge", project.getChallenge());
            entity.put("solution", project.getSolution());
            entity.put("longimpact", project.getLongimpact());
            entity.put("image", project.getImage());
            entity.put("organization", project.getOrganization());
            entities.add(entity);
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @GetMapping("/getProjectByOrganization")
    public ResponseEntity<Object> getProjectByOrganization(@RequestParam("organization") String organization){
        List<Project> projects = projectService.getProjectsByOrganization(organization);

        List<JSONObject> entities = new ArrayList<JSONObject>();

        for(Project project : projects){
            JSONObject entity = new JSONObject();
            entity.put("publicaddress", project.getPublicaddress());
            entity.put("date", project.getDate());
            entity.put("name", project.getName());
            entity.put("country", project.getCountry());
            entity.put("categorie", project.getCategorie());
            entity.put("goal", project.getGoal());
            entity.put("summary", project.getSummary());
            entity.put("challenge", project.getChallenge());
            entity.put("solution", project.getSolution());
            entity.put("longimpact", project.getLongimpact());
            entity.put("image", project.getImage());
            entity.put("organization", project.getOrganization());
            entities.add(entity);
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @GetMapping("/getProjectByOrganizationAll")
    public ResponseEntity<Object> getProjectByOrganizationMode(@RequestParam("organization") String organization){
        List<Project> projects = projectService.getProjectsByOrganizationMode(organization);

        List<JSONObject> entities = new ArrayList<JSONObject>();

        for(Project project : projects){
            JSONObject entity = new JSONObject();
            entity.put("publicaddress", project.getPublicaddress());
            entity.put("date", project.getDate());
            entity.put("name", project.getName());
            entity.put("country", project.getCountry());
            entity.put("categorie", project.getCategorie());
            entity.put("goal", project.getGoal());
            entity.put("summary", project.getSummary());
            entity.put("challenge", project.getChallenge());
            entity.put("solution", project.getSolution());
            entity.put("longimpact", project.getLongimpact());
            entity.put("image", project.getImage());
            entity.put("organization", project.getOrganization());
            entities.add(entity);
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @GetMapping("/getProjectByCategorie")
    public ResponseEntity<Object> getProjectByCategorie(@RequestParam("categorie") String categorie){
        List<Project> projects = projectService.getProjectByCategorie(categorie);

        List<JSONObject> entities = new ArrayList<JSONObject>();

        for(Project project : projects){
            JSONObject entity = new JSONObject();
            entity.put("publicaddress", project.getPublicaddress());
            entity.put("date", project.getDate());
            entity.put("name", project.getName());
            entity.put("country", project.getCountry());
            entity.put("categorie", project.getCategorie());
            entity.put("goal", project.getGoal());
            entity.put("summary", project.getSummary());
            entity.put("challenge", project.getChallenge());
            entity.put("solution", project.getSolution());
            entity.put("longimpact", project.getLongimpact());
            entity.put("image", project.getImage());
            entity.put("organization", project.getOrganization());
            entities.add(entity);
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @PostMapping("/project/data")
    public ResponseEntity<String> updateProject(@RequestBody Project project){
        projectService.updateProject(project);
        ResponseEntity<String> respuesta = new ResponseEntity<String>("Updated", HttpStatus.OK);
        return respuesta;
    }

    @PostMapping("/project/status")
    public ResponseEntity<String> updateProjectStatus(@RequestBody Project project){
        projectService.updateProjectStatus(project);
        ResponseEntity<String> respuesta = new ResponseEntity<String>("Updated", HttpStatus.OK);
        return respuesta;
    }

    @PostMapping("/project/")
    public ResponseEntity<String> putProject(@RequestBody @Valid Project project){
        projectService.putProject(project);
        ResponseEntity<String> respuesta = new ResponseEntity<String>("OK" , HttpStatus.OK);
        return respuesta;
    }

    @GetMapping("/getOrganizations")
    public ResponseEntity<Object> getOrganizations(){
        List<Organization> organizations = organizationService.getOrganizations();

        List<JSONObject> entities = new ArrayList<JSONObject>();

        for(Organization organization : organizations){
            JSONObject entity = new JSONObject();
            entity.put("id", organization.getId());
            entity.put("name", organization.getName());
            entity.put("categorie", organization.getCategorie());
            entity.put("mission", organization.getMission());
            entity.put("country", organization.getCountry());
            entity.put("yearfounded", organization.getYearfounded());
            entity.put("projectnumber", organization.getProjectnumber());
            entity.put("image", organization.getImage());
            entity.put("totalrevenue", organization.getTotalrevenue());
            entity.put("totalasset", organization.getTotalasset());
            entity.put("totalexpense", organization.getTotalexpense());
            entity.put("totalliabilitie", organization.getTotalliabilitie());
            entity.put("netincome", organization.getNetincome());
            entity.put("netassets", organization.getNetassets());
            entity.put("programexpense", organization.getProgramexpense());
            entity.put("administrativeexpense", organization.getAdministrativeexpense());
            entity.put("fundraisingexpense", organization.getFundraisingexpense());
            entity.put("workingcapital", organization.getWorkingcapital());
            entities.add(entity);
        }
        return new ResponseEntity<Object>(entities, HttpStatus.OK);
    }

    @GetMapping("/getOrganizationsById")
    public ResponseEntity<Organization> getOrganizationsById(@RequestParam("id") String id){
        Organization organization = organizationService.getOrganizationById(id);

        return new ResponseEntity<Organization>(organization, HttpStatus.OK);
    }
    @GetMapping("/getOrganizationIdByEmail")
    public ResponseEntity<Organization> getOrganizationsByEmail(@RequestParam("email") String email){
        Organization organization = organizationService.getOrganizationByEmail(email);

        return new ResponseEntity<Organization>(organization, HttpStatus.OK);
    }

    @PostMapping("/organization/")
    public ResponseEntity<String> putOrganization(@RequestBody @Valid Organization organization){
        organizationService.putOrganization(organization);
        ResponseEntity<String> respuesta = new ResponseEntity<String>("OK" , HttpStatus.OK);
        return respuesta;
    }
}
