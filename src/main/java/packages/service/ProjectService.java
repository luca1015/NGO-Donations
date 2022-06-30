package packages.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import packages.model.Project;
import packages.repository.ProjectRepository;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    private ArrayList<Project> projects;

    @PostConstruct
    public void init(){
        System.out.println("Iniciado el servicio de proyectos");
    }

    @PreDestroy
    public void destroy(){
        System.out.println("Fuera del servicio de proyectos");
    }


    public List<Project> getProjects(){
        List<Project> projects = projectRepository.getProjects();
        return projects;
    }

    public Project getProjectById(String publicaddress){
        Project project = projectRepository.getProjectById(publicaddress);
        return project;
    }

    public void updateProject(Project project){
        projectRepository.updateProject(project.getPublicaddress(),project.getDate(),project.getName(),project.getCountry(),project.getCategorie(),project.getGoal(),project.getSummary(),project.getChallenge(),project.getSolution(),project.getLongimpact(),project.isStatus(),project.getImage(),project.getOrganization());
    }

    public void updateProjectStatus(Project project){
        projectRepository.updateProjectStatus(project.getPublicaddress(), project.isStatus());
    }
    public List<Project> getProjectByDate(){
        List<Project> projects = projectRepository.getProjectByDate(true);
        return projects;
    }

    public List<Project> getProjectsByOrganization(String organization){
        List<Project> projects = projectRepository.getProjectByOrganization(true, organization);
        return projects;
    }

    public List<Project> getProjectsByOrganizationMode(String organization){
        List<Project> projects = projectRepository.getProjectByOrganizationMode(organization);
        return projects;
    }

    public List<Project> getProjectByCategorie(String categorie){
        List<Project> projects = projectRepository.getProjectByCategorie(true, categorie);
        return projects;
    }

    public void putProject(Project project){
        projectRepository.putProject(project.getPublicaddress(),project.getDate(),project.getName(),project.getCountry(),project.getCategorie(),project.getGoal(),project.getSummary(),project.getChallenge(),project.getSolution(),project.getLongimpact(),project.isStatus(),project.getImage(),project.getOrganization());
    }

}