package packages.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Table("organizations")

public class Organization {

    @Id
    @NotNull
    @NotBlank
    String id;
    @NotNull
    @NotBlank
    String name;
    @NotNull
    @NotBlank
    String categorie;
    @NotNull
    @NotBlank
    String mission;
    @NotNull
    @NotBlank
    String country;
    @NotNull
    @NotBlank
    String yearfounded;
    @NotNull
    @NotBlank
    String projectnumber;
    @NotNull
    @NotBlank
    String image;
    @NotNull
    @NotBlank
    String totalrevenue;
    @NotNull
    @NotBlank
    String totalasset;
    @NotNull
    @NotBlank
    String totalexpense;
    @NotNull
    @NotBlank
    String totalliabilitie;
    @NotNull
    @NotBlank
    String netincome;
    @NotNull
    @NotBlank
    String netassets;
    @NotNull
    @NotBlank
    String programexpense;
    @NotNull
    @NotBlank
    String administrativeexpense;
    @NotNull
    @NotBlank
    String fundraisingexpense;
    @NotNull
    @NotBlank
    String workingcapital;
    @NotNull
    @NotBlank
    String email;


    public Organization(String id, String name, String categorie, String mission, String country, String yearfounded, String projectnumber, String image, String totalrevenue, String totalasset, String totalexpense, String totalliabilitie, String netincome, String netassets, String programexpense, String administrativeexpense, String fundraisingexpense, String workingcapital, String email){
        this.id = id;
        this.name=name;
        this.country=country;
        this.categorie=categorie;
        this.mission = mission;
        this.yearfounded = yearfounded;
        this.projectnumber = projectnumber;
        this.totalrevenue = totalrevenue;
        this.totalasset = totalasset;
        this.totalexpense = totalexpense;
        this.totalliabilitie = totalliabilitie;
        this.image=image;
        this.netincome = netincome;
        this.netassets = netassets;
        this.programexpense = programexpense;
        this.administrativeexpense = administrativeexpense;
        this.fundraisingexpense = fundraisingexpense;
        this.workingcapital = workingcapital;
        this.email = email;
    }

    public Organization(){
    }
}
