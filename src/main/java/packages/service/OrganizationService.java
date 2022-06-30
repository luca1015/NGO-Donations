package packages.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import packages.model.Organization;
import packages.repository.OrganizationRepository;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrganizationService {

    @Autowired
    private OrganizationRepository organizationRepository;

    @PostConstruct
    public void init(){
        System.out.println("Iniciado el servicio de organizaciones");
    }

    @PreDestroy
    public void destroy(){
        System.out.println("Fuera del servicio de organizaciones");
    }


    public List<Organization> getOrganizations(){
        List<Organization> organizations = organizationRepository.getOrganizations();
        return organizations;
    }

    public Organization getOrganizationById(String id){
        Organization organization = organizationRepository.getOrganizationsById(id);
        return organization;
    }

    public Organization getOrganizationByEmail(String email){
        Organization organization = organizationRepository.getOrganizationsByEmail(email);
        return organization;
    }


    public void putOrganization(Organization organization){
        organizationRepository.putOrganization(organization.getId(),organization.getName(),organization.getCategorie(),organization.getMission(),organization.getCountry(),organization.getYearfounded(),organization.getProjectnumber(),organization.getImage(),organization.getTotalrevenue(),organization.getTotalasset(),organization.getTotalexpense(),organization.getTotalliabilitie(),organization.getNetincome(),organization.getNetassets(),organization.getProgramexpense(),organization.getAdministrativeexpense(),organization.getFundraisingexpense(),organization.getWorkingcapital(),organization.getEmail());
    }

}