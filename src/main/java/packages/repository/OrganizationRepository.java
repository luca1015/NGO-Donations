package packages.repository;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import packages.model.Organization;

import java.util.List;

public interface OrganizationRepository extends CrudRepository<Organization,String> {

    @Query("SELECT * FROM organizations")
    List<Organization> getOrganizations();

    @Query("SELECT * FROM organizations WHERE id=:id")
    Organization getOrganizationsById(@Param("id") String id);

    @Query("SELECT * FROM organizations WHERE email=:email")
    Organization getOrganizationsByEmail(@Param("email") String email);

    @Modifying
    @Transactional
    @Query("INSERT INTO organizations (id,name,categorie,mission,country,yearfounded,projectnumber,image,totalrevenue,totalasset,totalexpense,totalliabilitie,netincome,netassets,programexpense,administrativeexpense,fundraisingexpense,workingcapital,email) VALUES(:id,:name,:categorie,:mission,:country,:yearfounded,:projectnumber,:image,:totalrevenue,:totalasset,:totalexpense,:totalliabilitie,:netincome,:netassets,:programexpense,:administrativeexpense,:fundraisingexpense,:workingcapital,:email)")
    void putOrganization(@Param("id") String id, @Param("name") String name, @Param("categorie") String categorie, @Param("mission") String mission, @Param("country") String country, @Param("yearfounded") String yearfounded, @Param("projectnumber") String projectnumber, @Param("image") String image, @Param("totalrevenue") String totalrevenue, @Param("totalasset") String totalasset, @Param("totalexpense") String totalexpense, @Param("totalliabilitie") String totalliabilitie, @Param("netincome") String netincome, @Param("netassets") String netassets, @Param("programexpense") String programexpense, @Param("administrativeexpense") String administrativeexpense, @Param("fundraisingexpense") String fundraisingexpense, @Param("workingcapital") String workingcapital, @Param("email") String email);

}