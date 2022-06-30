package packages.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Data
@Table("projects")

public class Project {
    @Id
    @NotNull
    @NotBlank
    String publicaddress;
    @NotNull
    @NotBlank
    String date;
    @NotNull
    @NotBlank
    String name;
    @NotNull
    @NotBlank
    String country;
    @NotNull
    @NotBlank
    String categorie;
    @NotNull
    @NotBlank
    String goal;
    @NotNull
    @NotBlank
    String summary;
    @NotNull
    @NotBlank
    String challenge;
    @NotNull
    @NotBlank
    String solution;
    @NotNull
    @NotBlank
    String longimpact;
    @NotNull
    @NotBlank
    boolean status;
    @NotNull
    @NotBlank
    String image;
    @NotNull
    @NotBlank
    String organization;

    public Project(String publicaddress, String date, String name, String country, String categorie, String goal, String summary, String challenge, String solution, String longimpact, boolean status, String image, String organization){
        this.publicaddress=publicaddress;
        this.date=date;
        this.name=name;
        this.country=country;
        this.categorie=categorie;
        this.goal=goal;
        this.summary=summary;
        this.challenge=challenge;
        this.solution=solution;
        this.longimpact=longimpact;
        this.status=status;
        this.image=image;
        this.organization=organization;
    }
    public Project(){}
}
