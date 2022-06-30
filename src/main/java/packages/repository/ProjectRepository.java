package packages.repository;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import packages.model.Project;

import java.util.List;

public interface ProjectRepository extends CrudRepository<Project,String> {

    @Query("SELECT * FROM projects ORDER BY date ASC")
    List<Project> getProjects();

    @Query("SELECT * FROM projects WHERE publicaddress=:publicaddress")
    Project getProjectById(@Param("publicaddress") String publicaddress);

    @Query("SELECT * FROM projects WHERE status=:status ORDER BY date ASC")
    List<Project> getProjectByDate(@Param("status") boolean status);

    @Query("SELECT * FROM projects WHERE status=:status AND organization=:organization")
    List<Project> getProjectByOrganization(@Param("status") boolean status, @Param("organization") String organization);

    @Query("SELECT * FROM projects WHERE organization=:organization")
    List<Project> getProjectByOrganizationMode(@Param("organization") String organization);

    @Query("SELECT * FROM projects WHERE status=:status AND categorie=:categorie")
    List<Project> getProjectByCategorie(@Param("status") boolean status, @Param("categorie") String categorie);

    @Modifying
    @Transactional
    @Query("INSERT INTO projects (publicaddress,date,name,country,categorie,goal,summary,challenge,solution,longimpact,status,image,organization) VALUES(:publicaddress,:date,:name,:country,:categorie,:goal,:summary,:challenge,:solution,:longimpact,:status,:image,:organization)")
    void putProject(@Param("publicaddress") String publicaddress, @Param("date") String date, @Param("name") String name, @Param("country") String country, @Param("categorie") String categorie, @Param("goal") String goal, @Param("summary") String summary, @Param("challenge") String challenge, @Param("solution") String solution, @Param("longimpact") String longimpact, @Param("status") boolean status, @Param("image") String image, @Param("organization") String organization);

    @Modifying
    @Transactional
    @Query("UPDATE projects SET name=:name,country=:country,categorie=:categorie,goal=:goal,summary=:summary,challenge=:challenge,solution=:solution,longimpact=:longimpact WHERE publicaddress=:publicaddress")
    void updateProject(@Param("publicaddress") String publicaddress, @Param("date") String date, @Param("name") String name, @Param("country") String country, @Param("categorie") String categorie, @Param("goal") String goal, @Param("summary") String summary, @Param("challenge") String challenge, @Param("solution") String solution, @Param("longimpact") String longimpact, @Param("status") boolean status, @Param("image") String image, @Param("organization") String organization);

    @Modifying
    @Transactional
    @Query("UPDATE projects SET status=:status WHERE publicaddress=:publicaddress")
    void updateProjectStatus(@Param("publicaddress") String publicaddress, @Param("status") Boolean status);

}
